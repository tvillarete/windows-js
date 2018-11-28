import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { Window, Titlebar } from '../../toolbox';
import { minimizeApp, closeApp, launchApp } from '../../task_manager/actions';

const SearchContainer = styled.div`
   display: flex;
`;

const Container = styled.div`
   flex: 1;
   display: flex;
`;

const Sidebar = styled.div`
   width: 15em;
`;

const FilePane = styled.div`
   display: flex;
   align-content: flex-start;
   flex-wrap: wrap;
   flex: 1;
`;

const IconContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   height: 6em;
   width: 5em;
   margin: 4px;
   border: 1px solid transparent;
   box-sizing: border-box;
   cursor: default;

   :hover {
      background-color: #cce8ff;
   }

   ${props =>
      props.isSelected &&
      css`
         background-color: #cce8ff;
         border: 1px solid dodgerblue;
      `};

   h3 {
      margin: 8px;
      font-size: 12px;
   }
`;

const Icon = styled.img`
   width: 60%;
   height: auto;
   margin: 8px 0;
`;

const Arrow = styled.img`
   height: 1em;
   width: 1em;
   margin: auto 8px;
`;

class Explorer extends Component {
   static get metadata() {
      return {
         name: 'Explorer',
         icon: 'explorer.png',
         type: 'window',
      };
   }

   state = {
      curPath: 'C/Desktop',
      selected: '',
   };

   get dirFolders() {
      const { fileSystem } = this.props;
      const { tree } = fileSystem;
      const { curPath } = this.state;

      let treeLevelContents = tree['C'];
      for (let dir of curPath.split('/')) {
         if (dir === 'C') {
            continue;
         }
         treeLevelContents = treeLevelContents[dir];
      }

      return treeLevelContents;
   }

   getExtension(file) {
      let ext = file.split('.');
      if (ext.length > 1) {
         return ext[ext.length-1];
      }
      return 'folder';
   }

   upOneLevel() {
      const { curPath } = this.state;
      if (curPath === 'C') return;
      const newCurPath = curPath
         .split('/')
         .slice(0, -1)
         .join('/');

      this.setState(state => {
         return {
            ...state,
            curPath: newCurPath,
            selected: '',
         };
      });
   }

   openFile(name, fileType) {
      const { fileSystem } = this.props;
      const { defaultApps } = fileSystem;
      const extension = this.getExtension(name);

      if (fileType === 'folder') {
         this.setState(state => ({
            ...this.state,
            curPath: state.curPath.concat(`/${name}`),
            selected: '',
         }));
      } else if (defaultApps[extension]) {
         this.props.launchApp(defaultApps[extension], {
            name,
            path: this.state.curPath,
            fileType
         });
      }
   }

   select(name) {
      this.setState({ selected: name });
   }

   render() {
      const { minimized, closing } = this.props;
      const { selected } = this.state;
      const files = this.dirFolders;

      return (
         <Window minimized={minimized} height="500" with="700" closing={closing}>
            <Titlebar
               onMinimize={() => this.props.minimizeApp('Explorer')}
               onClose={() => this.props.closeApp('Explorer')}
            />
            <SearchContainer>
               <Arrow alt="Back" src="/images/icons/left_arrow.svg" />
               <Arrow alt="Forward" src="/images/icons/right_arrow.svg" />
               <Arrow
                  alt="Up one level"
                  src="/images/icons/up_arrow.svg"
                  onClick={() => this.upOneLevel()}
               />
            </SearchContainer>
            <Container>
               <Sidebar>
                  <h3>Sidebar</h3>
               </Sidebar>
               <FilePane>
                  {Object.keys(files).map((name, index) => {
                     let fileType = name.split('.');
                     fileType =
                        fileType.length > 1
                           ? fileType[fileType.length - 1]
                           : 'folder';
                     const isSelected = selected === name;

                     return (
                        <IconContainer
                           key={`file-${name}`}
                           isSelected={isSelected}
                           onClick={() =>
                              isSelected
                                 ? this.openFile(name, fileType)
                                 : this.select(name)
                           }>
                           <Icon src={`/images/icons/${fileType}.png`} />
                           <h3>{name}</h3>
                        </IconContainer>
                     );
                  })}
               </FilePane>
            </Container>
         </Window>
      );
   }
}

const mapStateToProps = state => ({
   desktopState: state.desktopState,
   fileSystem: state.fileSystem,
});

const mapDispatchToProps = dispatch => ({
   minimizeApp: id => dispatch(minimizeApp(id)),
   closeApp: id => dispatch(closeApp(id)),
   launchApp: (id, props) => dispatch(launchApp(id, props)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Explorer);
