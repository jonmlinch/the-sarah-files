import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../editor.css'


class Wysiwyg extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  // onEditorStateChange: Function = (editorState) => {
  //   this.setState({
  //     editorState,
  //   });
  // };

  render() {
    const { editorState } = this.state;
    return (
      <div className="editorContainer">
        <Editor
          editorState={editorState}
          wrapperClassName="editors"
          toolbarClassName="toolbar"
          editorClassName="editors"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}


export default Wysiwyg