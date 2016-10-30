import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import Tesseract from 'tesseract.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };

    this.handleFileProcessing = this.handleFileProcessing.bind(this);
  }

  handleFileProcessing(evt) {
    const files = evt.currentTarget.files;
    if (files.length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]);
      Tesseract.recognize(files[0])
        .progress((message) => console.log(message))
        .then((result) => {
          const wordMap = result.words.map((word) => {
            return {
              text: word.text,
              choices: word.choices,
              confidence: word.confidence,
              baseline: word.baseline,
              bbox: word.bbox
            };
          });
          this.setState({
            words: wordMap
          });
        });
    }
  }

  render() {
    const props = this.props;
    const listOfWords = this.state.words.map((word) => {
      return <li>{word.text}</li>;
    });
    return (
      <div>
        <form>
          <input type="file" name="file" accept="image/*" onChange={this.handleFileProcessing}/>
        </form>
        <h1>List of words from the image</h1>
        <ul>
          {listOfWords}
        </ul>
      </div>
    );
  }
}

export default connect()(Home);
