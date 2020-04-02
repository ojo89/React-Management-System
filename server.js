const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image': 'https://placeimg.com/64/64/1',
          'name': 'ab',
          'birthday': '200420',
          'gender': 'boy',
          'job': 'student'
        },
        {
          'id': 2,
          'image': 'https://placeimg.com/64/64/2',
          'name': 'test',
          'birthday': '200320',
          'gender': 'man',
          'job': 'teacher'
        },
        {
          'id': 3,
          'image': 'https://placeimg.com/64/64/3',
          'name': 'polestar',
          'birthday': '200321',
          'gender': 'girl',
          'job': 'banker'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));