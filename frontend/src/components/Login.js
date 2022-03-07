import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";

const Login = () => {
  const [error, setError] = useState([]);
  const [loginResponse, setLoginResponse] = useState([]);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await axios
          .post("api/loginPetCarer/", values)
          .then((response) => setTokenToLocalStorage(response.data.token));

        navigate("/profile");
      } catch (err) {
        return setError(err.response);
      }
    },
  });

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem("token", token);
  };

  useEffect(() => {
    setError([]);
  }, []);
  console.log(loginResponse);
  return (
    <Container>
      <Header as="h1">Login</Header>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          label="Email"
          onChange={formik.handleChange}
          values={formik.values.email}
          id="email"
        />
        <Form.Input
          label="Password"
          onChange={formik.handleChange}
          values={formik.values.password}
          id="password"
        />
        {error.length != 0 && (
          <Header.Subheader style={{ color: "red" }}>
            Check your email and password and try again!
          </Header.Subheader>
        )}
        <Button type="submit">Log-in</Button>
      </Form>
    </Container>
  );
};

export default Login;
