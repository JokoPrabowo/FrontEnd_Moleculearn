import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import gb1 from "../../images/koordiasi.png";
import { Notfound } from "../landing page";

export default function Subdb() {
    const navigate = useNavigate();
    const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/ikatan_kovalen/4');
    }
    return(
        <Container fluid className="subject-app">
            {profile ? (
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Kovalen</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subd-body">
                            <ol start="2">
                                <b><li className="mb-1">Ikatan Kovalen Koordinasi</li></b>
                                <p>
                                    Pada ikatan kovalen sebelumnya, pasangan elektron yang digunakan bersama untuk berikatan 
                                    berasal dari dua atom yang saling berikatan. Pada ikatan kovalen koordinasi, pasangan elektron 
                                    yang digunakan dalam pembentukan ikatan kovalen berasal dari salah satu atom yang berikatan. 
                                    Perhatikan bagaimana terbentuknya ikatan pada senyawa SO<sub>3</sub> berikut.
                                </p>
                            </ol>
                            <figure className="subdb-img">
                                <img src={gb1} alt="" />
                                <figcaption style={{textAlign: "center", fontSize: "12px"}}><b>Gambar 3.</b> Ikatan kovalen koordinasi
                                <br />(sumber: roboguru.ruangguru.com)</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext}>Lanjutkan</button>
                    </div>
                </div>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}