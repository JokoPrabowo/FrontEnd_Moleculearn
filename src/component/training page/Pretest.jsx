import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/pretest.css"
import { Notfound } from "../landing page";

export default function Pretest() {
    const navigate = useNavigate();
    // const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/kuis');
    }
    return(
        <Container fluid className="pretest-app">
            {/* {profile ? ( */}
                <Card className="pretest-card">
                    <Card.Body className="pretest-body">
                        <h1 style={{color: "#0F52BA"}}>Selamat datang!</h1>
                        <h3>Sebelum kamu menggunakan website ini untuk belajar, kamu harus mengerjakan tes terlebih dahulu</h3>
                        <h5>Hal ini dilakukan untuk mengetahui sudah sejauh mana kamu sudah memahami materi ikatan kimia</h5>
                        <button onClick={handleNext}>Lanjutkan</button>
                    </Card.Body>
                </Card>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}