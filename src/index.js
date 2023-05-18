const app = require('express')();

app.get('/', (req, res) => {
  return res.json({ message: 'I´m using Docker 🥙' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  return console.log('listening port :8080');
});
