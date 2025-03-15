import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import loginUser from '../services/authService';
import Bottom from './Bottom';
import { FormattedMessage } from 'react-intl';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const role = await loginUser(email, password);
      navigate('/home', { state: { role } });
    } catch (error) {
      setErrorMsg('Error de autenticación. Revise sus credenciales.');
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid text-center p-4">
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
          <FormattedMessage id="login.title" defaultMessage="Adopta un Robot con Robot Lovers!" />
        </h1>
        <img
          src="/assets/homeImage.png"
          alt="Robots banner"
          className="img-fluid"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="container d-flex flex-column align-items-center py-5 flex-grow-1">
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333' }}>
          <FormattedMessage id="login.subtitle" defaultMessage="Inicio de sesión" />
        </h2>
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mt-4">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>
                <FormattedMessage id="login.username" defaultMessage="Nombre de usuario" />
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>
                <FormattedMessage id="login.password" defaultMessage="Contraseña" />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
            <div className="d-flex justify-content-around mt-4">
              <Button variant="primary" type="submit">
                <FormattedMessage id="login.submit" defaultMessage="Ingresar" />
              </Button>
              <Button variant="danger" onClick={() => navigate('/')}>
                <FormattedMessage id="login.cancel" defaultMessage="Cancelar" />
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

export default Login;
