import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  BUTTON_STYLE, TEXT, INPUT_TYPES, CONTROL_ID,
} from '../../constants';

const CredentialsBox = ({ onSubmit, isRegisterView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitCheckbox, setSubmitCheckbox] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    return onSubmit(email, password);
  }

  const { CREDENTIAL: { ID, VARIANT, TYPE } } = BUTTON_STYLE;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId={CONTROL_ID.EMAIL}>
          <Form.Label>{TEXT.EMAIL_ADDRESS}</Form.Label>
          <Form.Control
            value={email}
            type={INPUT_TYPES.EMAIL}
            placeholder={TEXT.PLACEHOLDER_EMAIL}
            onChange={({ currentTarget }) => setEmail(currentTarget.value)}
          />
        </Form.Group>

        <Form.Group controlId={CONTROL_ID.FORM_PASSWORD}>
          <Form.Label>{TEXT.PASSWORD}</Form.Label>
          <Form.Control
            value={password}
            type={INPUT_TYPES.PASSWORD}
            placeholder={TEXT.PLACEHOLDER_PASSWORD}
            onChange={({ currentTarget }) => setPassword(currentTarget.value)}
          />
        </Form.Group>

        {isRegisterView && (
          <Form.Group controlId={CONTROL_ID.FORM_BASIC_CHECKBOX}>
            <Form.Check
              required
              onChange={() => setSubmitCheckbox(!submitCheckbox)}
              type={INPUT_TYPES.CHECKBOX}
              label={TEXT.LABEL_ACCEPT_TERMS}
              value={submitCheckbox}
            />
          </Form.Group>
        )}

        <Button id={ID} variant={VARIANT} type={TYPE} onClick={handleSubmit}>
          {isRegisterView ? TEXT.REGISTER : TEXT.LOGIN}
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
