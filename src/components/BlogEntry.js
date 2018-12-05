import React, { Component } from 'react';
import TextEditor from './text-editor/TextEditor'
import '../App.css';

class BlogEntry extends Component {
  
  render() {
    return (
      <div>
          <h1>This is where the text editor will go</h1>
          <TextEditor />
      </div>
    );
  }
}

export default BlogEntry;