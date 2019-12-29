import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CredentialsBox = ({ onSubmit, isRegisterView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitCheckbox, setSubmitCheckbox] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    return onSubmit(email, password);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="Enter email"
            onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            placeholder="Password"
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
          />
        </Form.Group>

        {isRegisterView && (
          <Form.Group controlId="formCheckbox">
            <Form.Check
              required
              onChange={() => setSubmitCheckbox(!submitCheckbox)}
              type="checkbox"
              label="By clicking here I accept Easymeals' terms and conditions."
              value={submitCheckbox}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          {isRegisterView ? 'Submit' : 'Login'}
        </Button>
      </Form>
    </div>
  );
};

CredentialsBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isRegisterView: PropTypes.bool,
};

CredentialsBox.defaultProps = {
  isRegisterView: true,
};

export default CredentialsBox;
