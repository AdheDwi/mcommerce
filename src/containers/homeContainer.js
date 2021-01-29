import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const HomeContainer = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailErr, setEmailErr] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");

  // const setLogin = () => {
  //   if (email.length < 1) {
  //     setEmailErr("Email tidak boleh kosong");
  //   }
  //   if (password.length < 1) {
  //     setPasswordErr("Password tidak boleh kosong");
  //   }
  //   if (email.length > 0 && password.length > 0) {
  //     setEmailErr("");
  //     setPasswordErr("");
  //     console.log({ email, password });
  //   }
  // };

  // const responseFacebook = (response) => {
  //   console.log(response);
  // };

  // const responseGoogle = (response) => {
  //   console.log(response);
  // };

  console.log("dataProduct", props.dataProduct);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <p>Ini Home</p>
      {/* <Card className="card-login">
        <h2 className="title-login">Login</h2>
        <FormGroup className="form-login">
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            invalid={emailErr.length > 0}
          />
          {emailErr.length > 0 && <FormFeedback>{emailErr}</FormFeedback>}
        </FormGroup>
        <FormGroup className="form-login">
          <Label for="password">Password</Label>
          <Input
            invalid={passwordErr.length > 0}
            type="password"
            name="password"
            id="password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordErr.length > 0 && <FormFeedback>{passwordErr}</FormFeedback>}
        </FormGroup>
        <Button
          className="mt-3 button-primary"
          block
          onClick={() => setLogin()}
        >
          Submit
        </Button>

        <p className="mt-4 mb-3">atau</p>
        <div className="facebook-button-wrap">
          <FacebookLogin
            cssClass="btn btn-block button-facebook"
            appId="" //APP ID NOT CREATED YET
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div>

        <GoogleLogin
          className="btn btn-block"
          clientId="" //CLIENTID NOT CREATED YET
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </Card> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataProduct: state.product.dataProduct,
});

export default connect(mapStateToProps)(HomeContainer);
