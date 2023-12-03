import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subc.css";
import { Notfound } from "../landing page";

import { updateLevel } from "../../redux/actions/authActions";

export default function Subcb() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(true);
    // const profile = localStorage.getItem("user");
    // const user = JSON.parse(profile);

    useEffect(() =>{
        setTimeout(() => {
            setBtn(false)
        }, 3000)
    },[]);

    const handleNext = () => {
        setBtn(true);
        // const level = 4;
        // if(user.level < level){
        //     dispatch(updateLevel({level}));
        // }
        setTimeout(() =>{
            navigate('/materi');
        }, 1000);
    }
    return (
        <Container fluid className="subject-app">
            {/* {profile ? ( */}
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Ikatan Ionik</h1>
                    </div>
                    <div className="body-mid d-flex justify-content-center align-items-center">
                        <ReactPlayer url="https://youtu.be/I3XFWCJ-W7Y"/>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext} disabled={btn}>Selesai</button>
                    </div>
                </div>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}