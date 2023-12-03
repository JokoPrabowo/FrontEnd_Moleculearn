import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import gb1 from "../../images/polar.png";
import { Notfound } from "../landing page";

export default function Subdd() {
    const navigate = useNavigate();
    // const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/ikatan_kovalen/6');
    }
    return(
        <Container fluid className="subject-app">
            {/* {profile ? ( */}
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Kovalen</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subd-body">
                            <ol start="3">
                                <b><li className="mb-1">Senyawa Kovalen Polar dan Nonpolar</li></b>
                                <p>
                                    Senyawa polar (Indonesia: kutub) artinya senyawa yang mempunyai kutub muatan 
                                    listrik negatif dan positif. Oleh karena senyawa ionik terbentuk dari ion positif 
                                    dan negatif, pasti merupakan senyawa polar.
                                </p>
                                <p>
                                    Perbedaan kelektronegatifan tidak serta merta menjadikan molekulnya polar. Oleh 
                                    karena, apabila bentuk molekulnya simetris sehingga menyebabkan kutub negatif atau 
                                    kutub positif berada di tengah-tengah molekul, maka molekulnya menjadi nonpolar.
                                </p>
                                <figure className="subdd-img">
                                    <img src={gb1} alt=""/>
                                    <figcaption style={{textAlign: "center", fontSize: "12px"}}><b>Gambar 4.</b> Ikatan kovalen polar
                                    <br />(sumber: britannica.com)</figcaption>
                                </figure>
                            </ol>
                        </div>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext}>Lanjutkan</button>
                    </div>
                </div>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}