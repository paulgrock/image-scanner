const Tesseract = require('tesseract.js');

const translateImage = (img) => {
  return Tesseract.recognize(img)
    .progress((message) => console.log(message))
    .then((result) => {
      return result.lines.map((line) => ({
        text: line.text,
        choices: line.choices,
        confidence: line.confidence,
        baseline: line.baseline,
        bbox: line.bbox
      }));
    })
    .catch((err) => err);
};

module.exports = translateImage;
