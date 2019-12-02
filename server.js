const express = require('express');
const app = express();

// Init middleware (Now the bodyParser is included in the Express itself)
app.use(express.json({ extended: false }));

app.get('/health', (req, res) => res.send('Application running...'));

app.post('/api/welcome-msg', (req, res) => {
  const name = req.body.name;
  res.send({status: `Hi ${name}, welcome to the most boring page!`});
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
