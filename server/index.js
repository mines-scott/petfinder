
const express = require('express')
const app = express()
const {Client} = require('pg')
const client = new Client('postgresql://test:test@mealsave.io:5432/postgres');

client.connect().then(() => {
  const port = 3001

app.get('/pets', (req, res) => {
  client.query('SELECT * FROM test_pets', (pgErr, pgRes) => {
    let ret = pgRes.rows.map(row => {
      return {
        id: row.id,
        url: row.url,
      };
    })
    res.send(JSON.stringify(ret));
  });
})

  app.listen(port, () => {console.log(`Example app listening on port ${port}`)})
})