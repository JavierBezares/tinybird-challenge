export async function fetchData(query) {
  const url = 'https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json';
  const token = 'p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c';
  const finalQuery = query ? query : 'SELECT * FROM _ LIMIT 30';
  try {
    // Make a GET request using fetch and await the response
    const response = await fetch(`${url}?token=${token}&q=${encodeURIComponent(finalQuery)}`);
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response data as JSON
    const data = await response.json();

    // Use the data after the request is completed
    console.log('Data received:', data);

    // Return the data for use in other parts of the code
    return data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during fetch:', error);
  }
}