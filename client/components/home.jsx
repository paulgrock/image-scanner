import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import Tesseract from 'tesseract.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
      recognitionProgress: 0
    };

    this.handleFileProcessing = this.handleFileProcessing.bind(this);
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

  render() {
    const listOfLines = this.state.lines.map((line, idx) => {
      return <li key={`line-${idx}`}>{line.text}</li>;
    });
    return (
      <div>
        <form>
          <input type="file" name="file" accept="image/*" onChange={this.handleFileProcessing}/>
        </form>
        <h2>Users</h2>
        <ul>
          <li>
            <input type="text"/>
          </li>
        </ul>
        <h1>List of lines from the image</h1>
        {
          this.state.recognitionProgress > 0 &&
          <progress max="100" value={this.state.recognitionProgress * 100}/>
        }
        <ul>
          {listOfLines}
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
