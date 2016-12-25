module.exports =
webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189);
	module.exports = __webpack_require__(421);


/***/ },

/***/ 165:
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "tesseract.js@^1.0.10",
					"scope": null,
					"escapedName": "tesseract.js",
					"name": "tesseract.js",
					"rawSpec": "^1.0.10",
					"spec": ">=1.0.10 <2.0.0",
					"type": "range"
				},
				"/Users/pg/Sites/code/scanner"
			]
		],
		"_from": "tesseract.js@>=1.0.10 <2.0.0",
		"_id": "tesseract.js@1.0.10",
		"_inCache": true,
		"_location": "/tesseract.js",
		"_nodeVersion": "6.7.0",
		"_npmOperationalInternal": {
			"host": "packages-12-west.internal.npmjs.com",
			"tmp": "tmp/tesseract.js-1.0.10.tgz_1476823577978_0.5278713656589389"
		},
		"_npmUser": {
			"name": "antimatter15",
			"email": "antimatter15@gmail.com"
		},
		"_npmVersion": "3.10.8",
		"_phantomChildren": {},
		"_requested": {
			"raw": "tesseract.js@^1.0.10",
			"scope": null,
			"escapedName": "tesseract.js",
			"name": "tesseract.js",
			"rawSpec": "^1.0.10",
			"spec": ">=1.0.10 <2.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/"
		],
		"_resolved": "https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz",
		"_shasum": "e11a96ae76147939d9218f88e287fb69414b1e5d",
		"_shrinkwrap": null,
		"_spec": "tesseract.js@^1.0.10",
		"_where": "/Users/pg/Sites/code/scanner",
		"author": "",
		"browser": {
			"./src/node/index.js": "./src/browser/index.js"
		},
		"bugs": {
			"url": "https://github.com/naptha/tesseract.js/issues"
		},
		"dependencies": {
			"file-type": "^3.8.0",
			"is-url": "^1.2.2",
			"jpeg-js": "^0.2.0",
			"level-js": "^2.2.4",
			"node-fetch": "^1.6.3",
			"object-assign": "^4.1.0",
			"png.js": "^0.2.1",
			"tesseract.js-core": "^1.0.2"
		},
		"description": "Pure Javascript Multilingual OCR",
		"devDependencies": {
			"babel-preset-es2015": "^6.16.0",
			"babelify": "^7.3.0",
			"browserify": "^13.1.0",
			"envify": "^3.4.1",
			"http-server": "^0.9.0",
			"pako": "^1.0.3",
			"watchify": "^3.7.0"
		},
		"directories": {},
		"dist": {
			"shasum": "e11a96ae76147939d9218f88e287fb69414b1e5d",
			"tarball": "https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz"
		},
		"gitHead": "fc15b0ef43cbf2d8729f8db2ef06a16b2497a16e",
		"homepage": "https://github.com/naptha/tesseract.js",
		"license": "Apache-2.0",
		"main": "src/index.js",
		"maintainers": [
			{
				"name": "antimatter15",
				"email": "antimatter15@gmail.com"
			},
			{
				"name": "bijection",
				"email": "guillermo@cdbzb.com"
			}
		],
		"name": "tesseract.js",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+https://github.com/naptha/tesseract.js.git"
		},
		"scripts": {
			"build": "browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js",
			"release": "npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish",
			"start": "watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract & watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js & http-server -p 7355",
			"test": "echo \"Error: no test specified\" & exit 1"
		},
		"version": "1.0.10"
	};

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var defaultOptions = {
	    // workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/worker.js',
	    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',    
	    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
	}
	
	if (process.env.NODE_ENV === "development") {
	    console.debug('Using Development Configuration')
	    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
	}else{
	    var version = __webpack_require__(165).version;
	    defaultOptions.workerPath = 'https://cdn.rawgit.com/naptha/tesseract.js/' + version + '/dist/worker.js'
	}
	
	exports.defaultOptions = defaultOptions;
	
	
	exports.spawnWorker = function spawnWorker(instance, workerOptions){
	    if(window.Blob && window.URL){
	        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'])
	        var worker = new Worker(window.URL.createObjectURL(blob));
	    }else{
	        var worker = new Worker(workerOptions.workerPath)
	    }
	
	    worker.onmessage = function(e){
	        var packet = e.data;
	        instance._recv(packet)
	    }
	    return worker
	}
	
	exports.terminateWorker = function(instance){
	    instance.worker.terminate()
	}
	
	exports.sendPacket = function sendPacket(instance, packet){
	    loadImage(packet.payload.image, function(img){
	        packet.payload.image = img
	        instance.worker.postMessage(packet) 
	    })
	}
	
	
	function loadImage(image, cb){
	    if(typeof image === 'string'){
	        if(/^\#/.test(image)){
	            // element css selector
	            return loadImage(document.querySelector(image), cb)
	        }else if(/(blob|data)\:/.test(image)){
	            // data url
	            var im = new Image
	            im.src = image;
	            im.onload = e => loadImage(im, cb);
	            return
	        }else{
	            var xhr = new XMLHttpRequest();
	            xhr.open('GET', image, true)
	            xhr.responseType = "blob";
	            xhr.onload = e => loadImage(xhr.response, cb);
	            xhr.onerror = function(e){
	                if(/^https?:\/\//.test(image) && !/^https:\/\/crossorigin.me/.test(image)){
	                    console.debug('Attempting to load image with CORS proxy')
	                    loadImage('https://crossorigin.me/' + image, cb)
	                }
	            }
	            xhr.send(null)
	            return
	        }
	    }else if(image instanceof File){
	        // files
	        var fr = new FileReader()
	        fr.onload = e => loadImage(fr.result, cb);
	        fr.readAsDataURL(image)
	        return
	    }else if(image instanceof Blob){
	        return loadImage(URL.createObjectURL(image), cb)
	    }else if(image.getContext){
	        // canvas element
	        return loadImage(image.getContext('2d'), cb)
	    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
	        // image element or video element
	        var c = document.createElement('canvas');
	        c.width  = image.naturalWidth  || image.videoWidth;
	        c.height = image.naturalHeight || image.videoHeight;
	        var ctx = c.getContext('2d');
	        ctx.drawImage(image, 0, 0);
	        return loadImage(ctx, cb)
	    }else if(image.getImageData){
	        // canvas context
	        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
	        return loadImage(data, cb)
	    }else{
	        return cb(image)
	    }
	    throw new Error('Missing return in loadImage cascade')
	
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(559);
	module.exports = self.fetch.bind(self);


/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, __resourceQuery) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(75);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(41);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(42);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(77);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(76);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(19);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(319);
	
	var _tesseract = __webpack_require__(553);
	
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

	 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pg/Sites/code/scanner/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pg/Sites/code/scanner/pages/index.js"); } } })();
	    (function (Component, route) {
	      if (false) return
	      if (false) return

	      var qs = __webpack_require__(55)
	      var params = qs.parse(__resourceQuery.slice(1))
	      if (params.entry == null) return

	      module.hot.accept()
	      Component.__route = route

	      if (module.hot.status() === 'idle') return

	      var components = next.router.components
	      for (var r in components) {
	        if (!components.hasOwnProperty(r)) continue

	        if (components[r].Component.__route === route) {
	          next.router.update(r, Component)
	        }
	      }
	    })(module.exports.default || module.exports, "/")
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), "?entry"))

/***/ },

/***/ 551:
/***/ function(module, exports) {

	// The result of dump.js is a big JSON tree
	// which can be easily serialized (for instance
	// to be sent from a webworker to the main app
	// or through Node's IPC), but we want
	// a (circular) DOM-like interface for walking
	// through the data. 
	
	module.exports = function circularize(page){
	    page.paragraphs = []
	    page.lines = []
	    page.words = []
	    page.symbols = []
	
	    page.blocks.forEach(function(block){
	        block.page = page;
	
	        block.lines = []
	        block.words = []
	        block.symbols = []
	
	        block.paragraphs.forEach(function(para){
	            para.block = block;
	            para.page = page;
	
	            para.words = []
	            para.symbols = []
	            
	            para.lines.forEach(function(line){
	                line.paragraph = para;
	                line.block = block;
	                line.page = page;
	
	                line.symbols = []
	
	                line.words.forEach(function(word){
	                    word.line = line;
	                    word.paragraph = para;
	                    word.block = block;
	                    word.page = page;
	                    word.symbols.forEach(function(sym){
	                        sym.word = word;
	                        sym.line = line;
	                        sym.paragraph = para;
	                        sym.block = block;
	                        sym.page = page;
	                        
	                        sym.line.symbols.push(sym)
	                        sym.paragraph.symbols.push(sym)
	                        sym.block.symbols.push(sym)
	                        sym.page.symbols.push(sym)
	                    })
	                    word.paragraph.words.push(word)
	                    word.block.words.push(word)
	                    word.page.words.push(word)
	                })
	                line.block.lines.push(line)
	                line.page.lines.push(line)
	            })
	            para.page.paragraphs.push(para)
	        })
	    })
	    return page
	}

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	const adapter = __webpack_require__(227)
	
	let jobCounter = 0;
	
	module.exports = class TesseractJob {
	    constructor(instance){
	        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)
	
	        this._instance = instance;
	        this._resolve = []
	        this._reject = []
	        this._progress = []
	        this._finally = []
	    }
	
	    then(resolve, reject){
	        if(this._resolve.push){
	            this._resolve.push(resolve) 
	        }else{
	            resolve(this._resolve)
	        }
	
	        if(reject) this.catch(reject);
	        return this;
	    }
	    catch(reject){
	        if(this._reject.push){
	            this._reject.push(reject) 
	        }else{
	            reject(this._reject)
	        }
	        return this;
	    }
	    progress(fn){
	        this._progress.push(fn)
	        return this;
	    }
	    finally(fn) {
	        this._finally.push(fn)
	        return this;  
	    }
	    _send(action, payload){
	        adapter.sendPacket(this._instance, {
	            jobId: this.id,
	            action: action,
	            payload: payload
	        })
	    }
	
	    _handle(packet){
	        var data = packet.data;
	        let runFinallyCbs = false;
	
	        if(packet.status === 'resolve'){
	            if(this._resolve.length === 0) console.log(data);
	            this._resolve.forEach(fn => {
	                var ret = fn(data);
	                if(ret && typeof ret.then == 'function'){
	                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
	                }
	            })
	            this._resolve = data;
	            this._instance._dequeue()
	            runFinallyCbs = true;
	        }else if(packet.status === 'reject'){
	            if(this._reject.length === 0) console.error(data);
	            this._reject.forEach(fn => fn(data))
	            this._reject = data;
	            this._instance._dequeue()
	            runFinallyCbs = true;
	        }else if(packet.status === 'progress'){
	            this._progress.forEach(fn => fn(data))
	        }else{
	            console.warn('Message type unknown', packet.status)
	        }
	
	        if (runFinallyCbs) {
	            this._finally.forEach(fn => fn(data));
	        }
	    }
	}


/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	const adapter = __webpack_require__(227)
	const circularize = __webpack_require__(551)
	const TesseractJob = __webpack_require__(552);
	const objectAssign = __webpack_require__(5);
	const version = __webpack_require__(165).version;
	
	function create(workerOptions){
		workerOptions = workerOptions || {};
		var worker = new TesseractWorker(objectAssign({}, adapter.defaultOptions, workerOptions))
		worker.create = create;
		worker.version = version;
		return worker;
	}
	
	class TesseractWorker {
		constructor(workerOptions){
			this.worker = null;
			this.workerOptions = workerOptions;
			this._currentJob = null;
			this._queue = []
		}
	
		recognize(image, options){
			return this._delay(job => {
				if(typeof options === 'string'){
					options = { lang: options };
				}else{
					options = options || {}
					options.lang = options.lang || 'eng';	
				}
				
				job._send('recognize', { image: image, options: options, workerOptions: this.workerOptions })
			})
		}
		detect(image, options){
			options = options || {}
			return this._delay(job => {
				job._send('detect', { image: image, options: options, workerOptions: this.workerOptions })
			})
		}
	
		terminate(){ 
			if(this.worker) adapter.terminateWorker(this);
			this.worker = null;
		}
	
		_delay(fn){
			if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);
	
			var job = new TesseractJob(this);
			this._queue.push(e => {
				this._queue.shift()
				this._currentJob = job;
				fn(job)
			})
			if(!this._currentJob) this._dequeue();
			return job
		}
	
		_dequeue(){
			this._currentJob = null;
			if(this._queue.length > 0){
				this._queue[0]()
			}
		}
	
		_recv(packet){
	
	        if(packet.status === 'resolve' && packet.action === 'recognize'){
	            packet.data = circularize(packet.data);
	        }
	
			if(this._currentJob.id === packet.jobId){
				this._currentJob._handle(packet)
			}else{
				console.warn('Job ID ' + packet.jobId + ' not known.')
			}
		}
	}
	
	var DefaultTesseract = create()
	
	module.exports = DefaultTesseract

/***/ },

/***/ 559:
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (typeof input === 'string') {
	      this.url = input
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split('\r\n').forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L3Rlc3NlcmFjdC5qcy9wYWNrYWdlLmpzb24/MTBkZjEwMCIsIndlYnBhY2s6Ly8vLi9+L3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcz8xMGRmMTAwIiwid2VicGFjazovLy8uL34vaXNvbW9ycGhpYy1mZXRjaC9mZXRjaC1ucG0tYnJvd3NlcmlmeS5qcz8xMGRmMTAwIiwid2VicGFjazovLy8uL3BhZ2VzPzEwZGYxMDAiLCJ3ZWJwYWNrOi8vLy4vfi90ZXNzZXJhY3QuanMvc3JjL2NvbW1vbi9jaXJjdWxhcml6ZS5qcz8xMGRmMTAwIiwid2VicGFjazovLy8uL34vdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vam9iLmpzPzEwZGYxMDAiLCJ3ZWJwYWNrOi8vLy4vfi90ZXNzZXJhY3QuanMvc3JjL2luZGV4LmpzPzEwZGYxMDAiLCJ3ZWJwYWNrOi8vLy4vfi93aGF0d2ctZmV0Y2gvZmV0Y2guanM/MTBkZjEwMCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsImxpbmVzIiwicmVjb2duaXRpb25Qcm9ncmVzcyIsImhhbmRsZUZpbGVQcm9jZXNzaW5nIiwiYmluZCIsImV2dCIsImZpbGVzIiwiY3VycmVudFRhcmdldCIsImxlbmd0aCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzIiwianNvbiIsInNldFN0YXRlIiwid29yZHMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RPZkxpbmVzIiwibWFwIiwibGluZSIsImlkeCIsInRleHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRixtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQSxHOzs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBLGlGQUFnRjtBQUNoRjtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQ7QUFDdkQsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULCtFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUE4Qix1QkFBdUI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSx3Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBK0IsMEJBQTBCLGVBQWU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQyIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiX2FyZ3NcIjogW1xuXHRcdFtcblx0XHRcdHtcblx0XHRcdFx0XCJyYXdcIjogXCJ0ZXNzZXJhY3QuanNAXjEuMC4xMFwiLFxuXHRcdFx0XHRcInNjb3BlXCI6IG51bGwsXG5cdFx0XHRcdFwiZXNjYXBlZE5hbWVcIjogXCJ0ZXNzZXJhY3QuanNcIixcblx0XHRcdFx0XCJuYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG5cdFx0XHRcdFwicmF3U3BlY1wiOiBcIl4xLjAuMTBcIixcblx0XHRcdFx0XCJzcGVjXCI6IFwiPj0xLjAuMTAgPDIuMC4wXCIsXG5cdFx0XHRcdFwidHlwZVwiOiBcInJhbmdlXCJcblx0XHRcdH0sXG5cdFx0XHRcIi9Vc2Vycy9wZy9TaXRlcy9jb2RlL3NjYW5uZXJcIlxuXHRcdF1cblx0XSxcblx0XCJfZnJvbVwiOiBcInRlc3NlcmFjdC5qc0A+PTEuMC4xMCA8Mi4wLjBcIixcblx0XCJfaWRcIjogXCJ0ZXNzZXJhY3QuanNAMS4wLjEwXCIsXG5cdFwiX2luQ2FjaGVcIjogdHJ1ZSxcblx0XCJfbG9jYXRpb25cIjogXCIvdGVzc2VyYWN0LmpzXCIsXG5cdFwiX25vZGVWZXJzaW9uXCI6IFwiNi43LjBcIixcblx0XCJfbnBtT3BlcmF0aW9uYWxJbnRlcm5hbFwiOiB7XG5cdFx0XCJob3N0XCI6IFwicGFja2FnZXMtMTItd2VzdC5pbnRlcm5hbC5ucG1qcy5jb21cIixcblx0XHRcInRtcFwiOiBcInRtcC90ZXNzZXJhY3QuanMtMS4wLjEwLnRnel8xNDc2ODIzNTc3OTc4XzAuNTI3ODcxMzY1NjU4OTM4OVwiXG5cdH0sXG5cdFwiX25wbVVzZXJcIjoge1xuXHRcdFwibmFtZVwiOiBcImFudGltYXR0ZXIxNVwiLFxuXHRcdFwiZW1haWxcIjogXCJhbnRpbWF0dGVyMTVAZ21haWwuY29tXCJcblx0fSxcblx0XCJfbnBtVmVyc2lvblwiOiBcIjMuMTAuOFwiLFxuXHRcIl9waGFudG9tQ2hpbGRyZW5cIjoge30sXG5cdFwiX3JlcXVlc3RlZFwiOiB7XG5cdFx0XCJyYXdcIjogXCJ0ZXNzZXJhY3QuanNAXjEuMC4xMFwiLFxuXHRcdFwic2NvcGVcIjogbnVsbCxcblx0XHRcImVzY2FwZWROYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG5cdFx0XCJuYW1lXCI6IFwidGVzc2VyYWN0LmpzXCIsXG5cdFx0XCJyYXdTcGVjXCI6IFwiXjEuMC4xMFwiLFxuXHRcdFwic3BlY1wiOiBcIj49MS4wLjEwIDwyLjAuMFwiLFxuXHRcdFwidHlwZVwiOiBcInJhbmdlXCJcblx0fSxcblx0XCJfcmVxdWlyZWRCeVwiOiBbXG5cdFx0XCIvXCJcblx0XSxcblx0XCJfcmVzb2x2ZWRcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy90ZXNzZXJhY3QuanMvLS90ZXNzZXJhY3QuanMtMS4wLjEwLnRnelwiLFxuXHRcIl9zaGFzdW1cIjogXCJlMTFhOTZhZTc2MTQ3OTM5ZDkyMThmODhlMjg3ZmI2OTQxNGIxZTVkXCIsXG5cdFwiX3Nocmlua3dyYXBcIjogbnVsbCxcblx0XCJfc3BlY1wiOiBcInRlc3NlcmFjdC5qc0BeMS4wLjEwXCIsXG5cdFwiX3doZXJlXCI6IFwiL1VzZXJzL3BnL1NpdGVzL2NvZGUvc2Nhbm5lclwiLFxuXHRcImF1dGhvclwiOiBcIlwiLFxuXHRcImJyb3dzZXJcIjoge1xuXHRcdFwiLi9zcmMvbm9kZS9pbmRleC5qc1wiOiBcIi4vc3JjL2Jyb3dzZXIvaW5kZXguanNcIlxuXHR9LFxuXHRcImJ1Z3NcIjoge1xuXHRcdFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL25hcHRoYS90ZXNzZXJhY3QuanMvaXNzdWVzXCJcblx0fSxcblx0XCJkZXBlbmRlbmNpZXNcIjoge1xuXHRcdFwiZmlsZS10eXBlXCI6IFwiXjMuOC4wXCIsXG5cdFx0XCJpcy11cmxcIjogXCJeMS4yLjJcIixcblx0XHRcImpwZWctanNcIjogXCJeMC4yLjBcIixcblx0XHRcImxldmVsLWpzXCI6IFwiXjIuMi40XCIsXG5cdFx0XCJub2RlLWZldGNoXCI6IFwiXjEuNi4zXCIsXG5cdFx0XCJvYmplY3QtYXNzaWduXCI6IFwiXjQuMS4wXCIsXG5cdFx0XCJwbmcuanNcIjogXCJeMC4yLjFcIixcblx0XHRcInRlc3NlcmFjdC5qcy1jb3JlXCI6IFwiXjEuMC4yXCJcblx0fSxcblx0XCJkZXNjcmlwdGlvblwiOiBcIlB1cmUgSmF2YXNjcmlwdCBNdWx0aWxpbmd1YWwgT0NSXCIsXG5cdFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcblx0XHRcImJhYmVsLXByZXNldC1lczIwMTVcIjogXCJeNi4xNi4wXCIsXG5cdFx0XCJiYWJlbGlmeVwiOiBcIl43LjMuMFwiLFxuXHRcdFwiYnJvd3NlcmlmeVwiOiBcIl4xMy4xLjBcIixcblx0XHRcImVudmlmeVwiOiBcIl4zLjQuMVwiLFxuXHRcdFwiaHR0cC1zZXJ2ZXJcIjogXCJeMC45LjBcIixcblx0XHRcInBha29cIjogXCJeMS4wLjNcIixcblx0XHRcIndhdGNoaWZ5XCI6IFwiXjMuNy4wXCJcblx0fSxcblx0XCJkaXJlY3Rvcmllc1wiOiB7fSxcblx0XCJkaXN0XCI6IHtcblx0XHRcInNoYXN1bVwiOiBcImUxMWE5NmFlNzYxNDc5MzlkOTIxOGY4OGUyODdmYjY5NDE0YjFlNWRcIixcblx0XHRcInRhcmJhbGxcIjogXCJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy90ZXNzZXJhY3QuanMvLS90ZXNzZXJhY3QuanMtMS4wLjEwLnRnelwiXG5cdH0sXG5cdFwiZ2l0SGVhZFwiOiBcImZjMTViMGVmNDNjYmYyZDg3MjlmOGRiMmVmMDZhMTZiMjQ5N2ExNmVcIixcblx0XCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uYXB0aGEvdGVzc2VyYWN0LmpzXCIsXG5cdFwibGljZW5zZVwiOiBcIkFwYWNoZS0yLjBcIixcblx0XCJtYWluXCI6IFwic3JjL2luZGV4LmpzXCIsXG5cdFwibWFpbnRhaW5lcnNcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcImFudGltYXR0ZXIxNVwiLFxuXHRcdFx0XCJlbWFpbFwiOiBcImFudGltYXR0ZXIxNUBnbWFpbC5jb21cIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiYmlqZWN0aW9uXCIsXG5cdFx0XHRcImVtYWlsXCI6IFwiZ3VpbGxlcm1vQGNkYnpiLmNvbVwiXG5cdFx0fVxuXHRdLFxuXHRcIm5hbWVcIjogXCJ0ZXNzZXJhY3QuanNcIixcblx0XCJvcHRpb25hbERlcGVuZGVuY2llc1wiOiB7fSxcblx0XCJyZWFkbWVcIjogXCJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhXCIsXG5cdFwicmVwb3NpdG9yeVwiOiB7XG5cdFx0XCJ0eXBlXCI6IFwiZ2l0XCIsXG5cdFx0XCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL25hcHRoYS90ZXNzZXJhY3QuanMuZ2l0XCJcblx0fSxcblx0XCJzY3JpcHRzXCI6IHtcblx0XHRcImJ1aWxkXCI6IFwiYnJvd3NlcmlmeSBzcmMvaW5kZXguanMgLXQgWyBiYWJlbGlmeSAtLXByZXNldHMgWyBlczIwMTUgXSBdIC1vIGRpc3QvdGVzc2VyYWN0LmpzIC0tc3RhbmRhbG9uZSBUZXNzZXJhY3QgJiYgYnJvd3NlcmlmeSBzcmMvYnJvd3Nlci93b3JrZXIuanMgLXQgWyBiYWJlbGlmeSAtLXByZXNldHMgWyBlczIwMTUgXSBdIC1vIGRpc3Qvd29ya2VyLmpzXCIsXG5cdFx0XCJyZWxlYXNlXCI6IFwibnBtIHJ1biBidWlsZCAmJiBnaXQgY29tbWl0IC1hbSAnbmV3IHJlbGVhc2UnICYmIGdpdCBwdXNoICYmIGdpdCB0YWcgYGpxIC1yICcudmVyc2lvbicgcGFja2FnZS5qc29uYCAmJiBnaXQgcHVzaCBvcmlnaW4gLS10YWdzICYmIG5wbSBwdWJsaXNoXCIsXG5cdFx0XCJzdGFydFwiOiBcIndhdGNoaWZ5IHNyYy9pbmRleC5qcyAgLXQgWyBlbnZpZnkgLS1OT0RFX0VOViBkZXZlbG9wbWVudCBdIC10IFsgYmFiZWxpZnkgLS1wcmVzZXRzIFsgZXMyMDE1IF0gXSAtbyBkaXN0L3Rlc3NlcmFjdC5kZXYuanMgLS1zdGFuZGFsb25lIFRlc3NlcmFjdCAmIHdhdGNoaWZ5IHNyYy9icm93c2VyL3dvcmtlci5qcyAgLXQgWyBlbnZpZnkgLS1OT0RFX0VOViBkZXZlbG9wbWVudCBdIC10IFsgYmFiZWxpZnkgLS1wcmVzZXRzIFsgZXMyMDE1IF0gXSAtbyBkaXN0L3dvcmtlci5kZXYuanMgJiBodHRwLXNlcnZlciAtcCA3MzU1XCIsXG5cdFx0XCJ0ZXN0XCI6IFwiZWNobyBcXFwiRXJyb3I6IG5vIHRlc3Qgc3BlY2lmaWVkXFxcIiAmIGV4aXQgMVwiXG5cdH0sXG5cdFwidmVyc2lvblwiOiBcIjEuMC4xMFwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90ZXNzZXJhY3QuanMvcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIHdvcmtlclBhdGg6ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL25hcHRoYS90ZXNzZXJhY3QuanMvMC4yLjAvZGlzdC93b3JrZXIuanMnLFxuICAgIGNvcmVQYXRoOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9uYXB0aGEvdGVzc2VyYWN0LmpzLWNvcmUvMC4xLjAvaW5kZXguanMnLCAgICBcbiAgICBsYW5nUGF0aDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbmFwdGhhL3Rlc3NkYXRhL2doLXBhZ2VzLzMuMDIvJyxcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBjb25zb2xlLmRlYnVnKCdVc2luZyBEZXZlbG9wbWVudCBDb25maWd1cmF0aW9uJylcbiAgICBkZWZhdWx0T3B0aW9ucy53b3JrZXJQYXRoID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvZGlzdC93b3JrZXIuZGV2LmpzP25vY2FjaGU9JyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDMpXG59ZWxzZXtcbiAgICB2YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4gICAgZGVmYXVsdE9wdGlvbnMud29ya2VyUGF0aCA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL25hcHRoYS90ZXNzZXJhY3QuanMvJyArIHZlcnNpb24gKyAnL2Rpc3Qvd29ya2VyLmpzJ1xufVxuXG5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG5cblxuZXhwb3J0cy5zcGF3bldvcmtlciA9IGZ1bmN0aW9uIHNwYXduV29ya2VyKGluc3RhbmNlLCB3b3JrZXJPcHRpb25zKXtcbiAgICBpZih3aW5kb3cuQmxvYiAmJiB3aW5kb3cuVVJMKXtcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbJ2ltcG9ydFNjcmlwdHMoXCInICsgd29ya2VyT3B0aW9ucy53b3JrZXJQYXRoICsgJ1wiKTsnXSlcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xuICAgIH1lbHNle1xuICAgICAgICB2YXIgd29ya2VyID0gbmV3IFdvcmtlcih3b3JrZXJPcHRpb25zLndvcmtlclBhdGgpXG4gICAgfVxuXG4gICAgd29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgcGFja2V0ID0gZS5kYXRhO1xuICAgICAgICBpbnN0YW5jZS5fcmVjdihwYWNrZXQpXG4gICAgfVxuICAgIHJldHVybiB3b3JrZXJcbn1cblxuZXhwb3J0cy50ZXJtaW5hdGVXb3JrZXIgPSBmdW5jdGlvbihpbnN0YW5jZSl7XG4gICAgaW5zdGFuY2Uud29ya2VyLnRlcm1pbmF0ZSgpXG59XG5cbmV4cG9ydHMuc2VuZFBhY2tldCA9IGZ1bmN0aW9uIHNlbmRQYWNrZXQoaW5zdGFuY2UsIHBhY2tldCl7XG4gICAgbG9hZEltYWdlKHBhY2tldC5wYXlsb2FkLmltYWdlLCBmdW5jdGlvbihpbWcpe1xuICAgICAgICBwYWNrZXQucGF5bG9hZC5pbWFnZSA9IGltZ1xuICAgICAgICBpbnN0YW5jZS53b3JrZXIucG9zdE1lc3NhZ2UocGFja2V0KSBcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWFnZSwgY2Ipe1xuICAgIGlmKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpe1xuICAgICAgICBpZigvXlxcIy8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgLy8gZWxlbWVudCBjc3Mgc2VsZWN0b3JcbiAgICAgICAgICAgIHJldHVybiBsb2FkSW1hZ2UoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbWFnZSksIGNiKVxuICAgICAgICB9ZWxzZSBpZigvKGJsb2J8ZGF0YSlcXDovLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgIC8vIGRhdGEgdXJsXG4gICAgICAgICAgICB2YXIgaW0gPSBuZXcgSW1hZ2VcbiAgICAgICAgICAgIGltLnNyYyA9IGltYWdlO1xuICAgICAgICAgICAgaW0ub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoaW0sIGNiKTtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBpbWFnZSwgdHJ1ZSlcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZSh4aHIucmVzcG9uc2UsIGNiKTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgaWYoL15odHRwcz86XFwvXFwvLy50ZXN0KGltYWdlKSAmJiAhL15odHRwczpcXC9cXC9jcm9zc29yaWdpbi5tZS8udGVzdChpbWFnZSkpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdBdHRlbXB0aW5nIHRvIGxvYWQgaW1hZ2Ugd2l0aCBDT1JTIHByb3h5JylcbiAgICAgICAgICAgICAgICAgICAgbG9hZEltYWdlKCdodHRwczovL2Nyb3Nzb3JpZ2luLm1lLycgKyBpbWFnZSwgY2IpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLnNlbmQobnVsbClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfWVsc2UgaWYoaW1hZ2UgaW5zdGFuY2VvZiBGaWxlKXtcbiAgICAgICAgLy8gZmlsZXNcbiAgICAgICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICBmci5vbmxvYWQgPSBlID0+IGxvYWRJbWFnZShmci5yZXN1bHQsIGNiKTtcbiAgICAgICAgZnIucmVhZEFzRGF0YVVSTChpbWFnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgfWVsc2UgaWYoaW1hZ2UgaW5zdGFuY2VvZiBCbG9iKXtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKSwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UuZ2V0Q29udGV4dCl7XG4gICAgICAgIC8vIGNhbnZhcyBlbGVtZW50XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoaW1hZ2UuZ2V0Q29udGV4dCgnMmQnKSwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UudGFnTmFtZSA9PSBcIklNR1wiIHx8IGltYWdlLnRhZ05hbWUgPT0gXCJWSURFT1wiKXtcbiAgICAgICAgLy8gaW1hZ2UgZWxlbWVudCBvciB2aWRlbyBlbGVtZW50XG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGMud2lkdGggID0gaW1hZ2UubmF0dXJhbFdpZHRoICB8fCBpbWFnZS52aWRlb1dpZHRoO1xuICAgICAgICBjLmhlaWdodCA9IGltYWdlLm5hdHVyYWxIZWlnaHQgfHwgaW1hZ2UudmlkZW9IZWlnaHQ7XG4gICAgICAgIHZhciBjdHggPSBjLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGN0eCwgY2IpXG4gICAgfWVsc2UgaWYoaW1hZ2UuZ2V0SW1hZ2VEYXRhKXtcbiAgICAgICAgLy8gY2FudmFzIGNvbnRleHRcbiAgICAgICAgdmFyIGRhdGEgPSBpbWFnZS5nZXRJbWFnZURhdGEoMCwgMCwgaW1hZ2UuY2FudmFzLndpZHRoLCBpbWFnZS5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShkYXRhLCBjYilcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGNiKGltYWdlKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgcmV0dXJuIGluIGxvYWRJbWFnZSBjYXNjYWRlJylcblxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHRoZSB3aGF0d2ctZmV0Y2ggcG9seWZpbGwgaW5zdGFsbHMgdGhlIGZldGNoKCkgZnVuY3Rpb25cbi8vIG9uIHRoZSBnbG9iYWwgb2JqZWN0ICh3aW5kb3cgb3Igc2VsZilcbi8vXG4vLyBSZXR1cm4gdGhhdCBhcyB0aGUgZXhwb3J0IGZvciB1c2UgaW4gV2VicGFjaywgQnJvd3NlcmlmeSBldGMuXG5yZXF1aXJlKCd3aGF0d2ctZmV0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gc2VsZi5mZXRjaC5iaW5kKHNlbGYpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzb21vcnBoaWMtZmV0Y2gvZmV0Y2gtbnBtLWJyb3dzZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDMxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgUmVhY3QsIHtQcm9wVHlwZXN9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5pbXBvcnQgVGVzc2VyYWN0IGZyb20gJ3Rlc3NlcmFjdC5qcyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZXM6IFtdLFxuICAgICAgcmVjb2duaXRpb25Qcm9ncmVzczogMFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUZpbGVQcm9jZXNzaW5nID0gdGhpcy5oYW5kbGVGaWxlUHJvY2Vzc2luZy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRmlsZVByb2Nlc3NpbmcoZXZ0KSB7XG4gICAgY29uc3QgZmlsZXMgPSBldnQuY3VycmVudFRhcmdldC5maWxlcztcbiAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzWzBdKTtcblxuICAgICAgZmV0Y2goJy9zY2FubmVyJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB3b3JkczoganNvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICAgIC8vIFRlc3NlcmFjdC5yZWNvZ25pemUoZmlsZXNbMF0pXG4gICAgICAvLyAgIC5wcm9ncmVzcygobWVzc2FnZSkgPT4ge1xuICAgICAgLy8gICAgIGlmIChtZXNzYWdlLnN0YXR1cyA9PT0gJ3JlY29nbml6aW5nIHRleHQnKSB7XG4gICAgICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgICAgICAgcmVjb2duaXRpb25Qcm9ncmVzczogbWVzc2FnZS5wcm9ncmVzc1xuICAgICAgLy8gICAgICAgfSk7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyAgICAgY29uc3QgbGluZXMgPSByZXN1bHQubGluZXMubWFwKChsaW5lKSA9PiB7XG4gICAgICAvLyAgICAgICBjb25zdCBwcmljZXMgPSBsaW5lLndvcmRzLmZpbHRlcigod29yZCkgPT4gIWlzTmFOKE51bWJlcih3b3JkLnRleHQpKSk7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhwcmljZXMpO1xuICAgICAgLy8gICAgICAgcmV0dXJuIHtcbiAgICAgIC8vICAgICAgICAgdGV4dDogbGluZS50ZXh0LFxuICAgICAgLy8gICAgICAgICBjaG9pY2VzOiBsaW5lLmNob2ljZXMsXG4gICAgICAvLyAgICAgICAgIGNvbmZpZGVuY2U6IGxpbmUuY29uZmlkZW5jZSxcbiAgICAgIC8vICAgICAgICAgYmFzZWxpbmU6IGxpbmUuYmFzZWxpbmUsXG4gICAgICAvLyAgICAgICAgIGJib3g6IGxpbmUuYmJveFxuICAgICAgLy8gICAgICAgfTtcbiAgICAgIC8vICAgICB9KTtcbiAgICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC8vICAgICAgIGxpbmVzXG4gICAgICAvLyAgICAgfSk7XG4gICAgICAvLyAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsaXN0T2ZMaW5lcyA9IHRoaXMuc3RhdGUubGluZXMubWFwKChsaW5lLCBpZHgpID0+IHtcbiAgICAgIHJldHVybiA8bGkga2V5PXtgbGluZS0ke2lkeH1gfT57bGluZS50ZXh0fTwvbGk+O1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWxlUHJvY2Vzc2luZ30vPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxoMj5Vc2VyczwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgxPkxpc3Qgb2YgbGluZXMgZnJvbSB0aGUgaW1hZ2U8L2gxPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5yZWNvZ25pdGlvblByb2dyZXNzID4gMCAmJlxuICAgICAgICAgIDxwcm9ncmVzcyBtYXg9XCIxMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNvZ25pdGlvblByb2dyZXNzICogMTAwfS8+XG4gICAgICAgIH1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtsaXN0T2ZMaW5lc31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiLy8gVGhlIHJlc3VsdCBvZiBkdW1wLmpzIGlzIGEgYmlnIEpTT04gdHJlZVxuLy8gd2hpY2ggY2FuIGJlIGVhc2lseSBzZXJpYWxpemVkIChmb3IgaW5zdGFuY2Vcbi8vIHRvIGJlIHNlbnQgZnJvbSBhIHdlYndvcmtlciB0byB0aGUgbWFpbiBhcHBcbi8vIG9yIHRocm91Z2ggTm9kZSdzIElQQyksIGJ1dCB3ZSB3YW50XG4vLyBhIChjaXJjdWxhcikgRE9NLWxpa2UgaW50ZXJmYWNlIGZvciB3YWxraW5nXG4vLyB0aHJvdWdoIHRoZSBkYXRhLiBcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjaXJjdWxhcml6ZShwYWdlKXtcbiAgICBwYWdlLnBhcmFncmFwaHMgPSBbXVxuICAgIHBhZ2UubGluZXMgPSBbXVxuICAgIHBhZ2Uud29yZHMgPSBbXVxuICAgIHBhZ2Uuc3ltYm9scyA9IFtdXG5cbiAgICBwYWdlLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uKGJsb2NrKXtcbiAgICAgICAgYmxvY2sucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgYmxvY2subGluZXMgPSBbXVxuICAgICAgICBibG9jay53b3JkcyA9IFtdXG4gICAgICAgIGJsb2NrLnN5bWJvbHMgPSBbXVxuXG4gICAgICAgIGJsb2NrLnBhcmFncmFwaHMuZm9yRWFjaChmdW5jdGlvbihwYXJhKXtcbiAgICAgICAgICAgIHBhcmEuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgIHBhcmEucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgICAgIHBhcmEud29yZHMgPSBbXVxuICAgICAgICAgICAgcGFyYS5zeW1ib2xzID0gW11cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFyYS5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpe1xuICAgICAgICAgICAgICAgIGxpbmUucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICBsaW5lLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgbGluZS5wYWdlID0gcGFnZTtcblxuICAgICAgICAgICAgICAgIGxpbmUuc3ltYm9scyA9IFtdXG5cbiAgICAgICAgICAgICAgICBsaW5lLndvcmRzLmZvckVhY2goZnVuY3Rpb24od29yZCl7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQubGluZSA9IGxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFyYWdyYXBoID0gcGFyYTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbihzeW0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLndvcmQgPSB3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0uYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmxpbmUuc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYXJhZ3JhcGguc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5ibG9jay5zeW1ib2xzLnB1c2goc3ltKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLnBhZ2Uuc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYXJhZ3JhcGgud29yZHMucHVzaCh3b3JkKVxuICAgICAgICAgICAgICAgICAgICB3b3JkLmJsb2NrLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYWdlLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGxpbmUuYmxvY2subGluZXMucHVzaChsaW5lKVxuICAgICAgICAgICAgICAgIGxpbmUucGFnZS5saW5lcy5wdXNoKGxpbmUpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcGFyYS5wYWdlLnBhcmFncmFwaHMucHVzaChwYXJhKVxuICAgICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHBhZ2Vcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanNcbi8vIG1vZHVsZSBpZCA9IDU1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJjb25zdCBhZGFwdGVyID0gcmVxdWlyZSgnLi4vbm9kZS9pbmRleC5qcycpXG5cbmxldCBqb2JDb3VudGVyID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUZXNzZXJhY3RKb2Ige1xuICAgIGNvbnN0cnVjdG9yKGluc3RhbmNlKXtcbiAgICAgICAgdGhpcy5pZCA9ICdKb2ItJyArICgrK2pvYkNvdW50ZXIpICsgJy0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMywgOClcblxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB0aGlzLl9yZXNvbHZlID0gW11cbiAgICAgICAgdGhpcy5fcmVqZWN0ID0gW11cbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSBbXVxuICAgICAgICB0aGlzLl9maW5hbGx5ID0gW11cbiAgICB9XG5cbiAgICB0aGVuKHJlc29sdmUsIHJlamVjdCl7XG4gICAgICAgIGlmKHRoaXMuX3Jlc29sdmUucHVzaCl7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlLnB1c2gocmVzb2x2ZSkgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9yZXNvbHZlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVqZWN0KSB0aGlzLmNhdGNoKHJlamVjdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjYXRjaChyZWplY3Qpe1xuICAgICAgICBpZih0aGlzLl9yZWplY3QucHVzaCl7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QucHVzaChyZWplY3QpIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlamVjdCh0aGlzLl9yZWplY3QpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHByb2dyZXNzKGZuKXtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MucHVzaChmbilcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpbmFsbHkoZm4pIHtcbiAgICAgICAgdGhpcy5fZmluYWxseS5wdXNoKGZuKVxuICAgICAgICByZXR1cm4gdGhpczsgIFxuICAgIH1cbiAgICBfc2VuZChhY3Rpb24sIHBheWxvYWQpe1xuICAgICAgICBhZGFwdGVyLnNlbmRQYWNrZXQodGhpcy5faW5zdGFuY2UsIHtcbiAgICAgICAgICAgIGpvYklkOiB0aGlzLmlkLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgX2hhbmRsZShwYWNrZXQpe1xuICAgICAgICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICAgICAgICBsZXQgcnVuRmluYWxseUNicyA9IGZhbHNlO1xuXG4gICAgICAgIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZXNvbHZlJyl7XG4gICAgICAgICAgICBpZih0aGlzLl9yZXNvbHZlLmxlbmd0aCA9PT0gMCkgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBmbihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgJiYgdHlwZW9mIHJldC50aGVuID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Rlc3NlcmFjdEpvYiBpbnN0YW5jZXMgZG8gbm90IGNoYWluIGxpa2UgRVM2IFByb21pc2VzLiBUbyBjb252ZXJ0IGl0IGludG8gYSByZWFsIHByb21pc2UsIHVzZSBQcm9taXNlLnJlc29sdmUuJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVxdWV1ZSgpXG4gICAgICAgICAgICBydW5GaW5hbGx5Q2JzID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3JlamVjdCcpe1xuICAgICAgICAgICAgaWYodGhpcy5fcmVqZWN0Lmxlbmd0aCA9PT0gMCkgY29uc29sZS5lcnJvcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdC5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKVxuICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLl9kZXF1ZXVlKClcbiAgICAgICAgICAgIHJ1bkZpbmFsbHlDYnMgPSB0cnVlO1xuICAgICAgICB9ZWxzZSBpZihwYWNrZXQuc3RhdHVzID09PSAncHJvZ3Jlc3MnKXtcbiAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzLmZvckVhY2goZm4gPT4gZm4oZGF0YSkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZXNzYWdlIHR5cGUgdW5rbm93bicsIHBhY2tldC5zdGF0dXMpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocnVuRmluYWxseUNicykge1xuICAgICAgICAgICAgdGhpcy5fZmluYWxseS5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90ZXNzZXJhY3QuanMvc3JjL2NvbW1vbi9qb2IuanNcbi8vIG1vZHVsZSBpZCA9IDU1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJjb25zdCBhZGFwdGVyID0gcmVxdWlyZSgnLi9ub2RlL2luZGV4LmpzJylcbmNvbnN0IGNpcmN1bGFyaXplID0gcmVxdWlyZSgnLi9jb21tb24vY2lyY3VsYXJpemUuanMnKVxuY29uc3QgVGVzc2VyYWN0Sm9iID0gcmVxdWlyZSgnLi9jb21tb24vam9iJyk7XG5jb25zdCBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuZnVuY3Rpb24gY3JlYXRlKHdvcmtlck9wdGlvbnMpe1xuXHR3b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucyB8fCB7fTtcblx0dmFyIHdvcmtlciA9IG5ldyBUZXNzZXJhY3RXb3JrZXIob2JqZWN0QXNzaWduKHt9LCBhZGFwdGVyLmRlZmF1bHRPcHRpb25zLCB3b3JrZXJPcHRpb25zKSlcblx0d29ya2VyLmNyZWF0ZSA9IGNyZWF0ZTtcblx0d29ya2VyLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRyZXR1cm4gd29ya2VyO1xufVxuXG5jbGFzcyBUZXNzZXJhY3RXb3JrZXIge1xuXHRjb25zdHJ1Y3Rvcih3b3JrZXJPcHRpb25zKXtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdFx0dGhpcy53b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucztcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHR0aGlzLl9xdWV1ZSA9IFtdXG5cdH1cblxuXHRyZWNvZ25pemUoaW1hZ2UsIG9wdGlvbnMpe1xuXHRcdHJldHVybiB0aGlzLl9kZWxheShqb2IgPT4ge1xuXHRcdFx0aWYodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKXtcblx0XHRcdFx0b3B0aW9ucyA9IHsgbGFuZzogb3B0aW9ucyB9O1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRcdG9wdGlvbnMubGFuZyA9IG9wdGlvbnMubGFuZyB8fCAnZW5nJztcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRqb2IuX3NlbmQoJ3JlY29nbml6ZScsIHsgaW1hZ2U6IGltYWdlLCBvcHRpb25zOiBvcHRpb25zLCB3b3JrZXJPcHRpb25zOiB0aGlzLndvcmtlck9wdGlvbnMgfSlcblx0XHR9KVxuXHR9XG5cdGRldGVjdChpbWFnZSwgb3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGpvYi5fc2VuZCgnZGV0ZWN0JywgeyBpbWFnZTogaW1hZ2UsIG9wdGlvbnM6IG9wdGlvbnMsIHdvcmtlck9wdGlvbnM6IHRoaXMud29ya2VyT3B0aW9ucyB9KVxuXHRcdH0pXG5cdH1cblxuXHR0ZXJtaW5hdGUoKXsgXG5cdFx0aWYodGhpcy53b3JrZXIpIGFkYXB0ZXIudGVybWluYXRlV29ya2VyKHRoaXMpO1xuXHRcdHRoaXMud29ya2VyID0gbnVsbDtcblx0fVxuXG5cdF9kZWxheShmbil7XG5cdFx0aWYoIXRoaXMud29ya2VyKSB0aGlzLndvcmtlciA9IGFkYXB0ZXIuc3Bhd25Xb3JrZXIodGhpcywgdGhpcy53b3JrZXJPcHRpb25zKTtcblxuXHRcdHZhciBqb2IgPSBuZXcgVGVzc2VyYWN0Sm9iKHRoaXMpO1xuXHRcdHRoaXMuX3F1ZXVlLnB1c2goZSA9PiB7XG5cdFx0XHR0aGlzLl9xdWV1ZS5zaGlmdCgpXG5cdFx0XHR0aGlzLl9jdXJyZW50Sm9iID0gam9iO1xuXHRcdFx0Zm4oam9iKVxuXHRcdH0pXG5cdFx0aWYoIXRoaXMuX2N1cnJlbnRKb2IpIHRoaXMuX2RlcXVldWUoKTtcblx0XHRyZXR1cm4gam9iXG5cdH1cblxuXHRfZGVxdWV1ZSgpe1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdGlmKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApe1xuXHRcdFx0dGhpcy5fcXVldWVbMF0oKVxuXHRcdH1cblx0fVxuXG5cdF9yZWN2KHBhY2tldCl7XG5cbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnICYmIHBhY2tldC5hY3Rpb24gPT09ICdyZWNvZ25pemUnKXtcbiAgICAgICAgICAgIHBhY2tldC5kYXRhID0gY2lyY3VsYXJpemUocGFja2V0LmRhdGEpO1xuICAgICAgICB9XG5cblx0XHRpZih0aGlzLl9jdXJyZW50Sm9iLmlkID09PSBwYWNrZXQuam9iSWQpe1xuXHRcdFx0dGhpcy5fY3VycmVudEpvYi5faGFuZGxlKHBhY2tldClcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUud2FybignSm9iIElEICcgKyBwYWNrZXQuam9iSWQgKyAnIG5vdCBrbm93bi4nKVxuXHRcdH1cblx0fVxufVxuXG52YXIgRGVmYXVsdFRlc3NlcmFjdCA9IGNyZWF0ZSgpXG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFRlc3NlcmFjdFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90ZXNzZXJhY3QuanMvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMudXJsID0gaW5wdXRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgcmF3SGVhZGVycy5zcGxpdCgnXFxyXFxuJykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==