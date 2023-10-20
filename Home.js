import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://653176e34d4c2e3f333d09e5.mockapi.io';

    // Fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/skiing-locations">Skiing Locations</Nav.Link>
          <Nav.Link as={Link} to="/skiing-tips">Skiing Tips</Nav.Link>
        </Nav>
      </Navbar>

      <h2>Welcome to Skiing Central</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
          // You can render other details from your API here
        ))}
      </ul>

    </div>
  );
}

export default Home;

