import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subb.css";

import { updateLevel } from "../../redux/actions/authActions";
import { Notfound } from "../landing page";

export default function Subba() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(true);
    const profile = localStorage.getItem("user");
    const user = JSON.parse(profile);

    useEffect(() =>{
        setTimeout(() => {
            setBtn(false)
        }, 3000)
    },[]);

    const handleNext = () => {
        setBtn(true);
        const level = 3;
        if(user.level < level){
            dispatch(updateLevel({level}));
        }
        setTimeout(() =>{
            navigate('/materi');
        }, 2000);
    }
    return (
        <Container fluid className="subject-app">
            {profile ? (
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Atom Stabil dan Atom Tidak Stabil</h1>
                    </div>
                    <div className="body-mid d-flex justify-content-center align-items-center">
                        <ReactPlayer url="https://youtu.be/Qbb9tElf5Tg"/>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext} disabled={btn}>Selesai</button>
                    </div>
                </div>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}