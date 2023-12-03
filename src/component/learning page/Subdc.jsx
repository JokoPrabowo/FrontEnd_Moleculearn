import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import { Notfound } from "../landing page";

export default function Subdc() {
    const navigate = useNavigate();
    const [btn, setBtn] = useState(true);
    // const profile = localStorage.getItem("user");

    useEffect(() =>{
        setTimeout(() => {
            setBtn(false)
        }, 3000)
    },[]);

    const handleNext = () => {
        navigate('/materi/ikatan_kovalen/5');
    }
    return (
        <Container fluid className="subject-app">
            {/* {profile ? ( */}
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Kovalen</h1>
                    </div>
                    <div className="body-mid d-flex justify-content-center align-items-center">
                        <ReactPlayer url="https://youtu.be/r3vgArr4gkQ"/>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext} disabled={btn}>Lanjutkan</button>
                    </div>
                </div>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}