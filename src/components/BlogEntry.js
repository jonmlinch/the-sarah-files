import React, { Component } from 'react';
import PageContainer from './PageContainer'
import '../App.css';

class BlogEntry extends Component {
  
  render() {
    return (
      <div className="App">
          <h1>Write your thoughts below</h1>
          <hr></hr>
          <PageContainer />
      </div>
    );
  }
}

export default BlogEntry;