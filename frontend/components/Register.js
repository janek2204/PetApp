import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";



const Register = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/petCarers");
      console.log(data);
    };
    getData();
  }, []);
  
  return()
}

export default Register