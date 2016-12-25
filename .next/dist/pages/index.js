'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/Users/pg/Sites/code/scanner/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/pg/Sites/code/scanner/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/pg/Sites/code/scanner/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/pg/Sites/code/scanner/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/pg/Sites/code/scanner/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/pg/Sites/code/scanner/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _tesseract = require('tesseract.js');

var _tesseract2 = _interopRequireDefault(_tesseract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_React$Component) {
  (0, _inherits3.default)(Home, _React$Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.state = {
      lines: [],
      recognitionProgress: 0
    };

    _this.handleFileProcessing = _this.handleFileProcessing.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'handleFileProcessing',
    value: function handleFileProcessing(evt) {
      var _this2 = this;

      var files = evt.currentTarget.files;
      if (files.length > 0) {
        var formData = new FormData();
        formData.append('file', files[0]);

        fetch('/scanner', {
          method: 'POST',
          body: formData
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          _this2.setState({
            words: json
          });
        }).catch(function (err) {
          return console.error(err);
        });
        // Tesseract.recognize(files[0])
        //   .progress((message) => {
        //     if (message.status === 'recognizing text') {
        //       this.setState({
        //         recognitionProgress: message.progress
        //       });
        //     }
        //   })
        //   .then((result) => {
        //     const lines = result.lines.map((line) => {
        //       const prices = line.words.filter((word) => !isNaN(Number(word.text)));
        //       console.log(prices);
        //       return {
        //         text: line.text,
        //         choices: line.choices,
        //         confidence: line.confidence,
        //         baseline: line.baseline,
        //         bbox: line.bbox
        //       };
        //     });
        //     this.setState({
        //       lines
        //     });
        //   });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var listOfLines = this.state.lines.map(function (line, idx) {
        return _react2.default.createElement(
          'li',
          { key: 'line-' + idx },
          line.text
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement('input', { type: 'file', name: 'file', accept: 'image/*', onChange: this.handleFileProcessing })
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Users'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', { type: 'text' })
          )
        ),
        _react2.default.createElement(
          'h1',
          null,
          'List of lines from the image'
        ),
        this.state.recognitionProgress > 0 && _react2.default.createElement('progress', { max: '100', value: this.state.recognitionProgress * 100 }),
        _react2.default.createElement(
          'ul',
          null,
          listOfLines
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwibGluZXMiLCJyZWNvZ25pdGlvblByb2dyZXNzIiwiaGFuZGxlRmlsZVByb2Nlc3NpbmciLCJiaW5kIiwiZXZ0IiwiZmlsZXMiLCJjdXJyZW50VGFyZ2V0IiwibGVuZ3RoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2V0U3RhdGUiLCJ3b3JkcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibGlzdE9mTGluZXMiLCJtYXAiLCJsaW5lIiwiaWR4IiwidGV4dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQywyQkFBcUI7QUFGVixLQUFiOztBQUtBLFVBQUtDLG9CQUFMLEdBQTRCLE1BQUtBLG9CQUFMLENBQTBCQyxJQUExQixPQUE1QjtBQVBpQjtBQVFsQjs7Ozt5Q0FFb0JDLEcsRUFBSztBQUFBOztBQUN4QixVQUFNQyxRQUFRRCxJQUFJRSxhQUFKLENBQWtCRCxLQUFoQztBQUNBLFVBQUlBLE1BQU1FLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQixZQUFNQyxXQUFXLElBQUlDLFFBQUosRUFBakI7QUFDQUQsaUJBQVNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0JMLE1BQU0sQ0FBTixDQUF4Qjs7QUFFQU0sY0FBTSxVQUFOLEVBQWtCO0FBQ2hCQyxrQkFBUSxNQURRO0FBRWhCQyxnQkFBTUw7QUFGVSxTQUFsQixFQUlHTSxJQUpILENBSVEsVUFBQ0MsR0FBRDtBQUFBLGlCQUFTQSxJQUFJQyxJQUFKLEVBQVQ7QUFBQSxTQUpSLEVBS0dGLElBTEgsQ0FLUSxVQUFDRSxJQUFELEVBQVU7QUFDZCxpQkFBS0MsUUFBTCxDQUFjO0FBQ1pDLG1CQUFPRjtBQURLLFdBQWQ7QUFHRCxTQVRILEVBVUdHLEtBVkgsQ0FVUyxVQUFDQyxHQUFEO0FBQUEsaUJBQVNDLFFBQVFDLEtBQVIsQ0FBY0YsR0FBZCxDQUFUO0FBQUEsU0FWVDtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1HLGNBQWMsS0FBS3hCLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQndCLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3RELGVBQU87QUFBQTtBQUFBLFlBQUksZUFBYUEsR0FBakI7QUFBeUJELGVBQUtFO0FBQTlCLFNBQVA7QUFDRCxPQUZtQixDQUFwQjtBQUdBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbURBQU8sTUFBSyxNQUFaLEVBQW1CLE1BQUssTUFBeEIsRUFBK0IsUUFBTyxTQUF0QyxFQUFnRCxVQUFVLEtBQUt6QixvQkFBL0Q7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUpGO0FBS0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscURBQU8sTUFBSyxNQUFaO0FBREY7QUFERixTQUxGO0FBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVZGO0FBWUksYUFBS0gsS0FBTCxDQUFXRSxtQkFBWCxHQUFpQyxDQUFqQyxJQUNBLDRDQUFVLEtBQUksS0FBZCxFQUFvQixPQUFPLEtBQUtGLEtBQUwsQ0FBV0UsbUJBQVgsR0FBaUMsR0FBNUQsR0FiSjtBQWVFO0FBQUE7QUFBQTtBQUNHc0I7QUFESDtBQWZGLE9BREY7QUFxQkQ7OztFQWhGZ0IsZ0JBQU1LLFM7O2tCQW1GVi9CLEkiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BnL1NpdGVzL2NvZGUvc2Nhbm5lciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlc30gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBUZXNzZXJhY3QgZnJvbSAndGVzc2VyYWN0LmpzJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaW5lczogW10sXG4gICAgICByZWNvZ25pdGlvblByb2dyZXNzOiAwXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRmlsZVByb2Nlc3NpbmcgPSB0aGlzLmhhbmRsZUZpbGVQcm9jZXNzaW5nLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVGaWxlUHJvY2Vzc2luZyhldnQpIHtcbiAgICBjb25zdCBmaWxlcyA9IGV2dC5jdXJyZW50VGFyZ2V0LmZpbGVzO1xuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZXNbMF0pO1xuXG4gICAgICBmZXRjaCgnL3NjYW5uZXInLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHdvcmRzOiBqc29uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgICAgLy8gVGVzc2VyYWN0LnJlY29nbml6ZShmaWxlc1swXSlcbiAgICAgIC8vICAgLnByb2dyZXNzKChtZXNzYWdlKSA9PiB7XG4gICAgICAvLyAgICAgaWYgKG1lc3NhZ2Uuc3RhdHVzID09PSAncmVjb2duaXppbmcgdGV4dCcpIHtcbiAgICAgIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICAgICAgICByZWNvZ25pdGlvblByb2dyZXNzOiBtZXNzYWdlLnByb2dyZXNzXG4gICAgICAvLyAgICAgICB9KTtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vICAgICBjb25zdCBsaW5lcyA9IHJlc3VsdC5saW5lcy5tYXAoKGxpbmUpID0+IHtcbiAgICAgIC8vICAgICAgIGNvbnN0IHByaWNlcyA9IGxpbmUud29yZHMuZmlsdGVyKCh3b3JkKSA9PiAhaXNOYU4oTnVtYmVyKHdvcmQudGV4dCkpKTtcbiAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKHByaWNlcyk7XG4gICAgICAvLyAgICAgICByZXR1cm4ge1xuICAgICAgLy8gICAgICAgICB0ZXh0OiBsaW5lLnRleHQsXG4gICAgICAvLyAgICAgICAgIGNob2ljZXM6IGxpbmUuY2hvaWNlcyxcbiAgICAgIC8vICAgICAgICAgY29uZmlkZW5jZTogbGluZS5jb25maWRlbmNlLFxuICAgICAgLy8gICAgICAgICBiYXNlbGluZTogbGluZS5iYXNlbGluZSxcbiAgICAgIC8vICAgICAgICAgYmJveDogbGluZS5iYm94XG4gICAgICAvLyAgICAgICB9O1xuICAgICAgLy8gICAgIH0pO1xuICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gICAgICAgbGluZXNcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGxpc3RPZkxpbmVzID0gdGhpcy5zdGF0ZS5saW5lcy5tYXAoKGxpbmUsIGlkeCkgPT4ge1xuICAgICAgcmV0dXJuIDxsaSBrZXk9e2BsaW5lLSR7aWR4fWB9PntsaW5lLnRleHR9PC9saT47XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgYWNjZXB0PVwiaW1hZ2UvKlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVQcm9jZXNzaW5nfS8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGgyPlVzZXJzPC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDE+TGlzdCBvZiBsaW5lcyBmcm9tIHRoZSBpbWFnZTwvaDE+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnJlY29nbml0aW9uUHJvZ3Jlc3MgPiAwICYmXG4gICAgICAgICAgPHByb2dyZXNzIG1heD1cIjEwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnJlY29nbml0aW9uUHJvZ3Jlc3MgKiAxMDB9Lz5cbiAgICAgICAgfVxuICAgICAgICA8dWw+XG4gICAgICAgICAge2xpc3RPZkxpbmVzfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19