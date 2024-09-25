/*
const result = fetch(`${url}?q=${encodeURIComponent(query)}`, {
  headers: {
    Authorization: 'Bearer p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c'
  }
}) 
  .then(r => r.json())
  .then(r => r)
  .catch(e => e.toString())

if (!result.data) {
  console.error(`there is a problem running the query: ${result}`);
} else {
  console.table(result.data)
  console.log("** Query columns **")
  for (let column of result.meta) {
    console.log(`${column.name} -> ${column.type}`)
  }
}
  */


const url = 'https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json';
const token = 'p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';
const query = 'SELECT * FROM _ LIMIT 30';

fetch(`${url}?token=${token}&q=${encodeURIComponent(query)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(result => {
    console.log('Response data:', result);
    console.table(result.data)
    console.log("** Query columns **")
    for (let column of result.meta) {
        console.log(`${column.name} -> ${column.type}`)
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });