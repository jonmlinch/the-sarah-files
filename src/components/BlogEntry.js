import React, { Component } from 'react';
import TextEditor from './text-editor/TextEditor'
import '../App.css';

class BlogEntry extends Component {
  
  render() {
    return (
      <div className="Editor">
          <h1>Write your thoughts below</h1>
          <hr></hr>
          <TextEditor />
      </div>
    );
  }
}

export default BlogEntry;