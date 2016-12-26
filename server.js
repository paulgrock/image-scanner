const express = require('express');
const multer = require('multer');
const upload = multer();
const next = require('next');

const translateImage = require('./server/translate-image');

const PORT = process.env.PORT || 3000;

const app = next({
  dir: '.',
  dev: process.env.NODE_ENV || true
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/foo', (req, res) => {
      return app.render(req, res, '/index', req.query);
    });

    server.post('/scanner', upload.single('file'), (req, res) => {
      console.log(req.file);
      console.log(typeof req.file);
      translateImage(req.file)
        .then((words) => {
          console.log(words);
          res.send(words);
        })
        .catch((err) => res.send(500, err));
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  });
