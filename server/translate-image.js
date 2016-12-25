const Tesseract = require('tesseract.js');

const translateImage = (img) => {
  return Tesseract.recognize(img)
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
      return wordMap;
    })
    .catch((err) => err);
};

module.exports = translateImage;
