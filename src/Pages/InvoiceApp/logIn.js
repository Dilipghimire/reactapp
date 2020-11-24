import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const LogIn = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="Admin Email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="Password"
          placeholder="password....."
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default LogIn;
