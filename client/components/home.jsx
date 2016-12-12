import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import Tesseract from 'tesseract.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      recognitionProgress: 0,
      currentUser: '',
      users: []
    };

    this.handleFileProcessing = this.handleFileProcessing.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleFileProcessing(evt) {
    const files = evt.currentTarget.files;
    if (files.length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]);
      Tesseract.recognize(files[0])
        .progress((message) => {
          if (message.status === 'recognizing text') {
            this.setState({
              recognitionProgress: message.progress
            });
          }
        })
        .then((result) => {
          const lines = result.lines.map((line) => {
            const prices = line.words.filter((word) => !isNaN(Number(word.text)));
            console.log(prices);
            return {
              text: line.text,
              choices: line.choices,
              confidence: line.confidence,
              baseline: line.baseline,
              bbox: line.bbox
            };
          });
          this.setState({
            lines
          });
        });
    }
  }

  handleUserChange(evt) {
    this.setState({
      currentUser: evt.target.value
    });
  }

  handleAddUser() {
    const users = this.state.users.concat(this.state.currentUser);
    this.setState({
      users,
      currentUser: ''
    });
    console.log(this.state);
  }

  render() {
    const listOfLines = this.state.lines.map((line, idx) => {
      return <li key={`line-${idx}`}>{line.text}</li>;
    });
    console.log(this.state);
    return (
      <div>
        <form>
          <input type="file" name="file" accept="image/*" onChange={this.handleFileProcessing}/>
        </form>
        <h2>Users</h2>
        <form onSubmit={this.handleAddUser} name="userForm">
          <input type="text" name="user" value={this.state.currentUser} onChange={this.handleUserChange}/>
          <button type="submit">+</button>
        </form>

        <h1>List of lines from the image</h1>
        {
          this.state.recognitionProgress > 0 &&
          <progress max="100" value={this.state.recognitionProgress * 100}/>
        }
        <ul>
          {listOfLines}
        </ul>

        { this.state.users &&
          <div>
            <h3>Users</h3>
            <ul>
              {this.state.users.map((user) => <li>{user}</li>)}
            </ul>
          </div>
        }
      </div>
    );
  }
}

export default connect()(Home);
