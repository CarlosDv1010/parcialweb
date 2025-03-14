import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import loginUser from '../services/authService';
import Top from './Top';
import Bottom from './Bottom';



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
    <div className="container-fluid" style={{ minHeight: '100vh' }}>
      <div className="align-items-center col-xs-1 text-center">
        <Top></Top>
        <div className="align-items-center col-xs-1 text-center justify-content-center bg-light">
            <h2 className="mb-4">Inicio de sesión</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="" controlId="formEmail">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                  // No se ve todo el placeholder                  
                  type="text"
                  placeholder="Poner test@test.com y Password:123456"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              {/* Mensaje de error */}
              {errorMsg && (
                <Alert variant="danger">
                  {errorMsg}
                </Alert>
              )}

              <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary" type="submit">
                  Ingresar
                </Button>
              </div>
              <div className="mt-3 d-flex justify-content-between align-items-center">
                {/* Boton de cancelar */}
                <Button variant="danger" onClick={() => navigate('/')}>
                  Cancelar
                </Button>
              </div>
            </Form>
        </div>
      </div>
        <Bottom></Bottom>
    </div>
  );
}

export default Login;
