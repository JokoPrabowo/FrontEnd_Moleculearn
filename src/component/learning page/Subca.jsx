import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subc.css";
import { Notfound } from "../landing page";

export default function Subca() {
    const navigate = useNavigate();
    const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/ikatan_ionik/3');
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
                            <h5 className="mb-3"><b>Sifat Senyawa Ionik</b></h5>
                            <ol type="a">
                                <b><li>Kristalnya keras tetapi rapuh</li></b>
                                <p>                            
                                    Apabila senyawa ionik dipukul akan terjadi pergeseran posisi ion positif dan ion negatif yang 
                                    semula berselang-seling menjadi berhadapan langsung. Hal tersebut mengakibatkan ion positif 
                                    bertemu muka dengan ion positif dan terjadi tolak-menolak.
                                </p>
                                <b><li>Mempunyai titik lebur dan titik didih yang tinggi</li></b>
                                <p>
                                    Secara umum, senyawa ionik mempunyai titik lebur dan titik didih yang tinggi. Oleh karena, 
                                    ikatan ionik relatif kuat dari gaya elektrostatik yang ditimbulkan antara ion positif dan ion negatif.
                                </p>
                                <b><li>Mudah larut di dalam air</li></b>
                                <p>
                                    Pada saat kristal senyawa ionik dimasukkan dalam air, molekul-molekul air akan menyusup di antara ion positif 
                                    dan ion negatif sehingga gaya tarik- menarik elektrostatik dari ion positif dan ion negatif akan melemah dan 
                                    akhirnya terpecah.
                                </p>
                                <b><li>Dalam keadaan cair dan larutan, dapat menghantar arus listrik</li></b>
                                <p>
                                    Dalam keadaan cair dan larutan, senyawa ionik dapat menghantar listrik karena ion-ionnya dapat bergerak secara 
                                    bebas. Akan tetapi dalam keadaan padat tidak menghantar listrik karena ion- ionnya tidak dapat bergerak.
                                </p>
                            </ol>                                            
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