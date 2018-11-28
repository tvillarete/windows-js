import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Window, Titlebar } from "../../toolbox";
import { minimizeApp, closeApp } from "../../task_manager/actions";

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
`;

const Textarea = styled.textarea`
  padding: 0 16px;
  flex: 1;
  outline: none;
  border: none;
  resize: none;
  font-size: 13px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 13px;
`;

const Icon = styled.img`
   height: 1em;
   width: 1em;
   margin-right: 4px;
`;

class Notepad extends Component {
  static get metadata() {
    return {
      name: "Notepad",
      icon: "Notepad.png",
      type: "window"
    };
  }

  get fileContents() {
    const { fileSystem, config } = this.props;
    const { tree } = fileSystem;
    const { path, name } = config;
    if (!path) {
      return null;
    }
    let curDir = tree[path.split("/")[0]];
    for (let dir of path.split("/").slice(1)) {
      curDir = curDir[dir];
    }
    return curDir[name];
  }

  render() {
    const { minimized, closing, config } = this.props;
    const { name } = config;
    const fileContents = this.fileContents;

    return (
      <Window height={400} width={500} minimized={minimized} closing={closing}>
        <Titlebar
          onMinimize={() => this.props.minimizeApp("Notepad")}
          onClose={() => this.props.closeApp("Notepad")}
        >
         <Icon src="/images/Notepad.png" />
          <Title>{name} - Notepad</Title>
        </Titlebar>
        <Container>
          <Textarea autoFocus defaultValue={fileContents} />
        </Container>
      </Window>
    );
  }
}

const mapStateToProps = state => ({
  fileSystem: state.fileSystem
});

const mapDispatchToProps = dispatch => ({
  minimizeApp: id => dispatch(minimizeApp(id)),
  closeApp: id => dispatch(closeApp(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notepad);
