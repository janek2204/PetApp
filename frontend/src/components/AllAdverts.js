import { Container } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";

const AllAdverts = () => {
  // const [allAdverts, setAllAdverts] = useState();

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await axios.get("/api/petCarers");
  //     setAllAdverts(data)
  //   };
  //   getData();
  // }, []);

  return (
    <Container>
      <h1>AllAdverts</h1>
    </Container>
  );
};

export default AllAdverts;
