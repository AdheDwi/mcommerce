import React, { useState } from "react";
import {
  Card,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const setLogin = () => {
    if (email.length < 1) {
      setEmailErr("Email tidak boleh kosong");
    }
    if (password.length < 1) {
      setPasswordErr("Password tidak boleh kosong");
    }
    if (email.length > 0 && password.length > 0) {
      setEmailErr("");
      setPasswordErr("");
      console.log({ email, password });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="card-login">
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
      </Card>
    </div>
  );
};

export default Login;