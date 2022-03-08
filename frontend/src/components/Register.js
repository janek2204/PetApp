import { Button, Container, Form, Header } from "semantic-ui-react";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = ({ setRegisteringResponse }) => {
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phonenumber: "",
      profileimage: "",
      aboutme: "",
      preferedPets: "",
      priceperhour: "",
      accounttype: "",
      address: {
        street: "",
        housenumber: "",
        postcode: "",
        city: "",
      },
    },
    onSubmit: async (values) => {
      try {
        await axios
          .post("api/registerPetCarer/", values)
          .then((response) => setRegisteringResponse(response.data.message));
        navigate("/login");
      } catch (err) {
        return setError(err.response.data.errors);
      }
    },
  });

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          label={
            error.firstname ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.firstname.message}
              </Header.Subheader>
            ) : (
              "First name"
            )
          }
          id="firstname"
          values={formik.values.firstname}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.lastname ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.lastname.message}
              </Header.Subheader>
            ) : (
              "Last name"
            )
          }
          id="lastname"
          values={formik.values.lastname}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.email ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.email.message}
              </Header.Subheader>
            ) : (
              "Email"
            )
          }
          id="email"
          values={formik.values.email}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.password ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.password.message}
              </Header.Subheader>
            ) : (
              "Password"
            )
          }
          id="password"
          values={formik.values.password}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.password ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.password.message}
              </Header.Subheader>
            ) : (
              "Password Confirmation"
            )
          }
          id="passwordConfirmation"
          values={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.phonenumber ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.phonenumber.message}
              </Header.Subheader>
            ) : (
              "Your phone number"
            )
          }
          id="phonenumber"
          values={formik.values.phonenumber}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.profileimage ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.profileimage.message}
              </Header.Subheader>
            ) : (
              "Profile Image"
            )
          }
          id="profileimage"
          values={formik.values.profileimage}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.aboutme ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.aboutme.message}
              </Header.Subheader>
            ) : (
              "About Me"
            )
          }
          id="aboutme"
          values={formik.values.aboutme}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.preferedPets ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.preferedPets.message}
              </Header.Subheader>
            ) : (
              "Prefered Pets"
            )
          }
          id="preferedPets"
          values={formik.values.preferedPets}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.priceperhour ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.priceperhour.message}
              </Header.Subheader>
            ) : (
              "Price per hour"
            )
          }
          id="priceperhour"
          values={formik.values.priceperhour}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error.accounttype ? (
              <Header.Subheader style={{ color: "red" }}>
                {error.accounttype.message}
              </Header.Subheader>
            ) : (
              "Account type"
            )
          }
          id="accounttype"
          values={formik.values.accounttype}
          onChange={formik.handleChange}
        ></Form.Input>

        <Header>Address</Header>
        <Form.Input
          label={
            error["address.street"] ? (
              <Header.Subheader style={{ color: "red" }}>
                {error["address.street"].message}
              </Header.Subheader>
            ) : (
              "Street"
            )
          }
          id="address.street"
          values={formik.values.address.street}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error["address.housenumber"] ? (
              <Header.Subheader style={{ color: "red" }}>
                {error["address.housenumber"].message}
              </Header.Subheader>
            ) : (
              "House number"
            )
          }
          id="address.housenumber"
          values={formik.values.address.housenumber}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error["address.postcode"] ? (
              <Header.Subheader style={{ color: "red" }}>
                {error["address.postcode"].message}
              </Header.Subheader>
            ) : (
              "Postcode"
            )
          }
          id="address.postcode"
          values={formik.values.address.postcode}
          onChange={formik.handleChange}
        ></Form.Input>

        <Form.Input
          label={
            error["address.city"] ? (
              <Header.Subheader style={{ color: "red" }}>
                {error["address.city"].message}
              </Header.Subheader>
            ) : (
              "City"
            )
          }
          id="address.city"
          values={formik.values.address.city}
          onChange={formik.handleChange}
        ></Form.Input>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
