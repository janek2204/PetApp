import { Button, Container, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import axios from "axios";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phonenumber: 0,
      profileimage: "",
      aboutme: "",
      preferedPets: "",
      priceperhour: 0,
      accounttype: "",
      address: {
        street: "",
        housenumber: 0,
        postcode: "",
        city: "",
      },
    },
    onSubmit: async (values) => {
      await axios.post("api/registerPetCarer/", values);
    },
  });

  console.log(formik.values);
  return (
    <Container>
      <h1>Register</h1>
      <Form>
        <Form.Input
          label="First name"
          id="firstname"
          values={formik.values.firstname}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Last name"
          id="lastname"
          values={formik.values.lastname}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Email"
          id="email"
          values={formik.values.email}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Password"
          id="password"
          values={formik.values.password}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Password Confirmation"
          id="passwordConfirmation"
          values={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Phone number"
          id="phonenumber"
          values={formik.values.phonenumber}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Profile Image"
          id="profileimage"
          values={formik.values.profileimage}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="About Me"
          id="aboutme"
          values={formik.values.aboutme}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Prefered Pets"
          id="preferedPets"
          values={formik.values.preferedPets}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Price per hour"
          id="priceperhour"
          values={formik.values.priceperhour}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Account Type"
          id="accounttype"
          values={formik.values.accounttype}
          onChange={formik.handleChange}
        ></Form.Input>
        <h4>Address</h4>
        <Form.Input
          label="Street"
          id="address.street"
          values={formik.values.address.street}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="House number"
          id="address.housenumber"
          values={formik.values.address.housenumber}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="Postcode"
          id="address.postcode"
          values={formik.values.address.postcode}
          onChange={formik.handleChange}
        ></Form.Input>
        <Form.Input
          label="City"
          id="address.city"
          values={formik.values.address.city}
          onChange={formik.handleChange}
        ></Form.Input>
      </Form>
      <Button onClick={formik.handleSubmit}>Submit</Button>
    </Container>
  );
};

export default Register;
