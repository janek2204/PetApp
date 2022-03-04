import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/petCarers");
      console.log(data);
    };
    getData();
  }, []);

  return (
    <Container>
      <h1>Hi!</h1>
    </Container>
  );
}

export default App;
