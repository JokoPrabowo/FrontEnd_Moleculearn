import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css";
import "../../css/subd.css";
import { Notfound } from "../landing page";

export default function Summary() {
    const navigate = useNavigate();
    const [btn, setBtn] = useState(false);
    // const profile = localStorage.getItem("user");

    const handleNext = () => {
        setBtn(true);
        setTimeout(() =>{
            navigate('/materi');
        }, 1000);
    }
    return(
        <Container fluid className="subject-app">
            {/* {profile ? ( */}
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="body-top">
                        <h1>Rangkuman</h1>
                    </div>
                    <div className="body-mid">
                        <div className="subd-body">
                            <ul>
                                <li>Atom-atom akan stabil apabila konfigurasi elektron terluarnya dua (duplet) atau delapan (oktet), seperti konfigurasi elektron atom-atom gas mulia yang stabil.</li>
                                <li>Untuk mencapai kestabilan, atom-atom yang energi ionisasinya rendah akan melepaskan elektron, sedangkan atom-atom yang afinitas elektronnya tinggi akan mengikat elektron.</li>
                                <li>Atom-atom yang sukar melepas elektron atau mempunyai energi ionisasi yang tinggi dan atom yang sukar menarik elektron atau mempunyai afinitas elektron yang rendah mempunyai kecenderungan untuk membentuk pasangan elektron yang dipakai bersama.</li>
                                <li>Ikatan ionik terjadi karena adanya gaya tarik-menarik elektrostatis antara lon positif dengan ion negatif.</li>
                                <li>Senyawa ionik membentuk kristal yang besar dari beberapa ion positif dan beberapa lon negatif dengan struktur tertentu.</li>
                                <li>Sifat senyawa lonik: kristalnya keras tetapi rapuh, mempunyai titik lebur dan titik didih yang tinggi, mudah larut di dalam air, serta dapat menghantarkan arus listrik (dalam keadaan cair dan larutan).</li>
                                <li>Ikatan kovalen merupakan ikatan yang terjadi karena pemakaian bersama. pasangan elektron.</li>
                                <li>Rumus titik elektron (struktur Lewis) merupakan tanda atorm yang di sekelilingnya terdapat tanda titik, silang, atau bulatan kecil yang menggambarkan elektron valensi atom yang berikatan.</li>
                                <li>Ikatan kovalen tunggal adalah ikatan kovalen yang melibatkan sepasang elektron untuk dipakai bersama.</li>
                                <li>Ikatan kovalen rangkap dua adalah ikatan kovalen yang melibatkan dua pasang elektron yang dipakai bersama.</li>
                                <li>Ikatan kovalen rangkap tiga adalah ikatan kovalen yang melibatkan tiga pasang elektron yang dipakai bersama.</li>
                                <li>Ikatan kovalen koordinasi adalah ikatan kovalen di mana pasangan elektron yang digunakan berasal dari salah satu atom yang berikatan.</li>
                                <li>Bentuk molekul menggambarkan kedudukan atom-atom di dalam suatu molekul Pasangan elektron ikatan adalah pasangan elektron yang digunakan bersama oleh dua atom yang berikatan.</li>
                                <li>Pasangan elektron bebas adalah pasangan elektron yang tidak digunakan bersama oleh kedua atom yang berikatan.</li>
                            </ul>  
                        </div>
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