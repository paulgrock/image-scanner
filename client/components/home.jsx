import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {toggleCheck, incNumber, decNumber} from '../actions';
import 'isomorphic-fetch';
// import Tesseract from 'tesseract.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileUpload(evt) {
    const files = evt.currentTarget.files;
    if (files.length > 0) {
      const formData = new FormData();
      formData.append('file', files[0]);
      // Tesseract.recognize(files[0])
      //   .then((result) => {
      //     console.log(result);
      //   });
      fetch('/scanner', {
        method: 'POST',
        body: formData
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          words: json
        });
      })
      .catch((err) => console.error(err));
    }
  }

  render() {
    const props = this.props;
    const {checked, value} = props;
    const listOfWords = this.state.words.map((word) => {
      return <li>{word.text}</li>;
    });
    return (
      <div>
        <form>
          <input type="file" name="file" accept="image/*" onChange={this.handleFileUpload}/>
        </form>
        <h1>List of words from the image</h1>
        <ul>
          {listOfWords}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked, value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
