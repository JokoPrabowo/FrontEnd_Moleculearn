import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subb.css";

import { Notfound } from "../landing page";
import gb1 from "../../images/atom.png";

export default function Subb() {
    const navigate = useNavigate();
    const profile = localStorage.getItem("user");

    const handleNext = () => {
        navigate('/materi/atom_stabil_&_tidak_stabil/2');
    }

    return(
        <Container fluid className="subject-app">
            {profile ? (
                <>
                    <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Atom Stabil dan Atom Tidak Stabil</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subb-mid-top">
                            <p>
                                Di antara unsur-unsur di alam, hanya gas mulia saja yang ada dalam keadaan bebas sebagai atom. 
                                Sementara itu, unsur-unsur yang lain berada dalam keadaan bergabung dengan atom lain, baik 
                                dengan atom-atom yang sama/sejenis maupun dengan atom dari unsur yang lain.
                            </p>
                            <h5>Konfigurasi Elektron Atom Stabil dan Tidak Stabil</h5>
                        </div>
                        <div className="subb-mid-bot row">
                            <div className="subb-bot-left col-lg-6 col-md-6 col-sm-12 col-12
                                            d-flex justify-content-center align-items-center">
                                <div className="subb-table">
                                    <p>Perhatihan konfigurasi elektron dari atom-atom menurut model atom Neils Bohr berikut</p>
                                    <img src={gb1} alt="" />    
                                    <p>
                                        Atom-atom yang tidak stabil akan menjadi stabil dengan cara meniru konfigurasi elektron 
                                        dari atom-atom gas mulia yang stabil. Ada dua cara sebagai berikut.
                                    </p>
                                </div>
                            </div>
                            <div className="subb-bot-right col-lg-6 col-md-6 col-sm-12 col-12
                                            d-flex justify-content-center align-items-center">
                                <div>
                                    <ol>
                                        <li>
                                            Mengurangi jumlah elektron dengan melepaskan elektron atau menambah jumlah elektron
                                            dengan menarik elektron dari atom lain.
                                            <ul>
                                                <li>
                                                    Untuk mendapatkan kestabilan tersebut, atom-atom yang mempunyai energi ionisasi 
                                                    rendah cenderung akan melepaskan elektron, sedangkan atom-atom yang mempunyai 
                                                    afinitas elektron besar akan mengikat elektron.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Memanfaatkan elektron valensi secara bersama-sama dengan atom lain (mungkin atom dari 
                                            unsur yang sama atau atom dari unsur yang berbeda).
                                            <ul>
                                                <li>
                                                    Elektron yang digunakan bersama-sama akan membentuk pasangan elektron.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-bot">                    
                        <button onClick={handleNext}>Lanjutkan</button>
                    </div>
                </div>
                </>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}