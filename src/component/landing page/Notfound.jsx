import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/pretest.css"

export default function Notfound() {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/');
    }
    return(
        <Container fluid className="pretest-app">
            <Card className="pretest-card">
                <Card.Body className="pretest-body">
                    <h1 style={{color: "#0F52BA"}}>Ditangguhkan!</h1>
                    <h3>Kamu perlu masuk menggunakan akun untuk mengakses halaman ini!</h3>
                    <h5>Buat akun baru jika kamu tidak memilikinya!</h5>
                    <button onClick={handleNext}>Lanjutkan</button>
                </Card.Body>
            </Card>
        </Container>
    )
}