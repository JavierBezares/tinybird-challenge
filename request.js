export async function fetchData(query) {
  const url = 'https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json';
  const token = 'p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';
  const finalQuery = query ? query : 'SELECT * FROM _ LIMIT 10000';
  try {
    const response = await fetch(`${url}?token=${token}&q=${encodeURIComponent(finalQuery)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data received:', data);

    console.log("** TABLE **")
    console.table(data.data)
    // console.log("** Query columns **")
    for (let column of data.meta) {
        //console.log(`${column.name} -> ${column.type}`)
    }

    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
  }
}