import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import gb1 from "../../images/kovalen.png";
import gb2 from "../../images/rangkap.png";
import { Notfound } from "../landing page";

export default function Subd() {
    const navigate = useNavigate();
    const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/ikatan_kovalen/2');
    }
    return(
        <Container fluid className="subject-app">
            {profile ? (
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Kovalen</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subd-body row">
                            <div className="subd-left col-lg-6 col-md-6 col-sm-12">
                                <ol style={{paddingLeft: "0"}}>
                                    <b><li>Terbentuknya Ikatan Kovalen</li></b>
                                    <p>
                                        Ikatan kovalen terjadi apabila atom-atom tidak stabil bergabung dengan menggunakan pasangan 
                                        elektron secara bersama-sama. Untuk memahami, perhatikan gambar berikut.
                                    </p>
                                    <figure className="subd-img">
                                        <img src={gb1} alt="" />
                                        <figcaption style={{textAlign: "center", fontSize: "12px"}}><b>Gambar 1.</b> Ikatan kovalen
                                        <br />(sumber: britannica.com)</figcaption>
                                    </figure>
                                </ol>
                            </div>
                            <div className="subd-right col-lg-6 col-md-6 col-sm-12">
                                <ol style={{paddingLeft: "0"}}>
                                    <p>
                                        Pasangan elektron bersama disebut juga pasangan elektron Ikatan dan digambarkan dengan garis. Jumlah 
                                        pasangan elektron Ikatan memberikan informasi jumlah ikatan dalam suatu molekul kovalen.
                                    </p>
                                    <p>
                                        Pada molekul hidrogen (H<sub>2</sub>) terdapat sepasang elektron Ikatan (satu tangan Ikatan) dan disebut sebagai 
                                        ikatan kovalen tunggal.
                                    </p>
                                    <p>
                                        Pada molekul oksigen (0<sub>2</sub>) terdapat dua pasang elektron ikatan dan disebut ikatan kovalen rangkap dua, 
                                        dan pada molekul nitrogen (N<sub>2</sub>) terdapat tiga pasang elektron ikatan dan disebut dengan ikatan kovalen 
                                        rangkap tiga.
                                    </p>
                                    <figure className="subd-img">
                                        <img src={gb2} alt="" />
                                        <figcaption style={{textAlign: "center", fontSize: "12px"}}><b>Gambar 2.</b> Notasi ikatan kovalen tunggal, rangkap 2, dan rangkap 3
                                        <br />(sumber: epanrita.com)</figcaption>
                                    </figure>
                                </ol>
                            </div>
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