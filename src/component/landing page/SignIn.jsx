import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SignIn(props) {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        navigate('/daftar');
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ username, password });
    }

    return(
        <Container >
            <Modal show={props.show} onHide={props.toggleShow} centered>
                <Modal.Header>
                    <Modal.Title>Masuk</Modal.Title>
                    <Button className="close btn-close" onClick={props.toggleShow}></Button>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nama pengguna</Form.Label>
                                <Form.Control
                                    type="username"
                                    placeholder="Nama pengguna"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                <Form.Label>Kata sandi</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Kata sandi"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" onClick={handleSignUp} style={{ fontWeight: "bold"}}>
                            Buat Akun
                        </Button> 
                        <Button variant="warning" type="submit" style={{ fontWeight: "bold"}}>
                            Masuk
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>        
        </Container>
    );

}