import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Card } from "react-bootstrap";
import "../../css/signUp.css"
import "bootstrap/dist/css/bootstrap.min.css";

import { signUp } from "../../redux/actions/authActions"

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [border, setBorder] = useState(true);

    useEffect(() => {
        if(repeatPassword !== password){
            setBorder(false)
        }else {
            setBorder(true);
        }
    }, [password, repeatPassword]);

    useEffect(() =>{
        if((status !== "FAIL") && (status !== null)){
            navigate('/');
        }
    }, [status]); 

    const handleSubmit = () =>{
        dispatch(signUp({fullname, username, password}));
    }
    

    useEffect(() =>{
        console.log()
    })
    return(
        <Container fluid className="signup-app">
            <Card className="signup-card">
                <Card.Body>
                    <h1 className="mb-4">Buat akun</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama lengkap</Form.Label>
                            <Form.Control                        
                                style={{border: "2px solid grey"}}
                                type="text"
                                placeholder="Joko Prabowo"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama pengguna</Form.Label>
                            <Form.Control                        
                                style={{border: "2px solid grey"}}
                                type="username"
                                placeholder="jprabowo"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kata sandi</Form.Label>
                            <Form.Control
                                style={{border: "2px solid grey"}}
                                type="password"
                                placeholder="Kata sandi"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Ulangi kata sandi</Form.Label>
                            <Form.Control
                                style={{border: border ? "2px solid grey" : "2px solid red"}}
                                type="password"
                                placeholder="Kata sandi"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                        </Form.Group>        
                    </Form>
                    <div className="signup-footer">
                        <Button variant="warning" className="createbtn" onClick={handleSubmit}>
                            Buat akun
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    )
}