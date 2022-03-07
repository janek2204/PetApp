import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";



const AllAdverts = () => {

  const [allAdverts, setAllAdverts] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/petCarers");
      setAllAdverts(data)
    };
    getData();
  }, []);

  return(
   
  )
}

export default AllAdverts