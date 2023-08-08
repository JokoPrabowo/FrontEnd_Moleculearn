import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import { Notfound } from "../landing page";

import { updateLevel } from "../../redux/actions/authActions";

export default function Subdf() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [btn, setBtn] = useState(false);
    const profile = localStorage.getItem("user");
    const user = JSON.parse(profile);

    const handleNext = () => {
        setBtn(true);
        const level = 5;
        if(user.level < 5){
            dispatch(updateLevel({level}));
        }
        setTimeout(() =>{
            navigate('/materi');
        }, 2000);
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
                            <ol start="4">
                                <b><li>Sifat Senyawa Kovalen</li></b>
                                <span>Beberapa sifat senyawa kovalen adalah sebagai berikut.</span>
                                <ol type="a">
                                    <li>Umumnya mempunyai titik didih dan titik lebur yang rendah.</li>
                                    <li>Dalam keadaan murni, tidak menghantar listrik.</li>
                                    <li>Larutan senyawa kovalen polar dalam air dapat menghantar listrik.</li>
                                    <li>Dapat membentuk molekul raksasa.</li>
                                </ol>
                            </ol>                       
                        </div>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext} disabled={btn}>Lanjutkan</button>
                    </div>
                </div>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}