import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import "./Signinform.css";

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      mobilenumber: "",
      email: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      mobilenumber: Yup.string()
        .required("Mobile number is required")
        .matches(/^\d+$/, "Mobile number must be numeric")
        .length(10, "Mobile number must be exactly 10 digits"),
      email: Yup.string()
        .required("Email is required")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Invalid email format"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      pincode: Yup.string()
        .required("Pincode is required")
        .length(6, "Pincode must be exactly 6 digits"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://cloudibackend.sanjaysanju.tech/api/create",
          values
        );
        if (response.status === 201) {
          Swal.fire({
            title: "Good job!",
            text: "User has been successfully added!",
            icon: "success",
          });
          resetForm();
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong!",
            icon: "error",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Oops!",
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
      }
    },
  });

  return (
    <Container fluid className="signinform">
      <Form onSubmit={formik.handleSubmit}>
        <h5 className="detailsheading">Fill the details below :</h5>

        <Row className="firstrw">
          <Col xs={12} md={8}>
            <FormLabel className="labelsty">
              Name <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="nameinp"
              placeholder="Enter Your Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </Col>
        </Row>

        <Row className="secondrw">
          <Col xs={12} md={5}>
            <FormLabel className="labelsty">
              Mobile Number{" "}
              <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              type="tel"
              pattern="[0-9]*"
              name="mobilenumber"
              value={formik.values.mobilenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="namemob"
              maxLength={10}
              placeholder="Enter Your Mobile number"
            />
            {formik.touched.mobilenumber && formik.errors.mobilenumber ? (
              <div className="error">{formik.errors.mobilenumber}</div>
            ) : null}
          </Col>
          <Col md={1}></Col>
          <Col xs={12} md={5}>
            <FormLabel className="labelemail">
              Email <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="nameemail"
              placeholder="Enter Your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error2">{formik.errors.email}</div>
            ) : null}
          </Col>
        </Row>

        <Row className="thirdrw">
          <Col xs={12} md={5}>
            <FormLabel className="labelsty">
              Country <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="namemob"
              placeholder="Enter Your Country"
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="error">{formik.errors.country}</div>
            ) : null}
          </Col>
          <Col md={1}></Col>

          <Col xs={12} md={5}>
            <FormLabel className="labelemail">
              State <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="nameemail"
              placeholder="Enter Your State"
            />
            {formik.touched.state && formik.errors.state ? (
              <div className="error2">{formik.errors.state}</div>
            ) : null}
          </Col>
        </Row>

        <Row className="fourthrw">
          <Col xs={12} md={5}>
            <FormLabel className="labelsty">
              City <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="namemob"
              placeholder="Enter Your City"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
            ) : null}
          </Col>
          <Col md={1}></Col>

          <Col xs={12} md={5}>
            <FormLabel className="labelemail">
              Pincode <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="pincode"
              value={formik.values.pincode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="nameemail"
              placeholder="Enter Your Pincode"
              required={6}
              maxLength={6}
              minLength={6}
            />
            {formik.touched.pincode && formik.errors.pincode ? (
              <div className="error2">{formik.errors.pincode}</div>
            ) : null}
          </Col>
        </Row>

        <Row className="fifthrw">
          <Col xs={12} md={8}>
            <FormLabel className="labeladd">
              Address <span style={{ color: "rgba(203, 27, 91, 1)" }}>*</span>
            </FormLabel>
            <FormControl
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="nameadd"
              placeholder="Enter Your Address"
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="error">{formik.errors.address}</div>
            ) : null}
          </Col>
        </Row>

        <Row>
          <h6 className="privacypolicy">
            <span style={{ color: "rgba(121, 121, 121, 1)" }}>
              By clicking submit, I agree to
            </span>{" "}
            Terms and Conditions & Privacy Policy
          </h6>
        </Row>

        <Row className="seventhrw">
          <Col xs={12} md={8}>
            <button type="submit" className="submitbut">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SigninForm;
