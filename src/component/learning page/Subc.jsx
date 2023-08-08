import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subc.css";
import gb1 from "../../images/subc1.png";
import { Notfound } from "../landing page";

export default function Subc() {
    const navigate = useNavigate();
    const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/ikatan_ionik/2');
    }
    return(
        <Container fluid className="subject-app">
            {profile ? (
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Ionik</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subc-body">
                            <div className="subc-top">
                                <h5 className="mb-3"><b>Terbentuknya ikatan ionik</b></h5>
                                <p>
                                    Ikatan ionik terjadi karena atom-atom tidak stabil bergabung melalui gaya tarik-menarik 
                                    elektrostatis antara ion positif dengan ion negatif yang terbentuk oleh atom-atom tersebut 
                                    dalam mencapai kestabilannya.
                                </p>                        
                            </div>                        
                            <div className="subc-bot">
                                <figure>
                                    <img src={gb1} alt="" />
                                    <figcaption style={{fontSize: "12px", textAlign: "center"}}><b>Gambar 1.</b> Ikatan ionik NaCl
                                    <br />(sumber: britannica.com)</figcaption>
                                </figure>
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