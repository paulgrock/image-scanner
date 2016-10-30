const Tesseract = require('tesseract.js');

exports.register = (server, options, next) => {
  const translateImage = (img, reply) => {
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
        return reply(wordMap);
      })
      .catch((err) => reply(err));
  };

  server.route({
    method: 'POST',
    path: '/scanner',
    handler: (request, reply) => {
      console.log(request.payload.file);
      translateImage(request.payload.file, reply);
    }
  });

  next();
};

exports.register.attributes = {
  name: 'scanner',
  version: '1.0.0'
};
