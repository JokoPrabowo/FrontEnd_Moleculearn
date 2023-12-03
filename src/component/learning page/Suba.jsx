import React ,{ useState }from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/suba.css"

import gb1 from "../../images/suba1.jpg";
import gb2 from "../../images/suba2.png";

// import { Notfound } from "../landing page";
// import { updateLevel } from "../../redux/actions/authActions";

export default function Suba() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [btn, setBtn] = useState(false);
    // const profile = localStorage.getItem("user");
    // const user = JSON.parse(profile);

    const handleHome = () => {
        setBtn(true);
        // const level = 2;
        // if(user.level < level){
        //     dispatch(updateLevel({level}));
        // }
        setTimeout(() => {
            navigate('/materi');
        }, 1000);
    }
    return(
        <Container fluid className="subject-app">
            {/* {profile ? ( */}
                <div className="subject-body mx-auto col-lg-8 col-md-10 col-sm-12">
                    <div className="body-top">
                        <h1>Pengantar</h1>
                    </div>
                    <div className="body-mid row">
                        <div className="suba-mid-left col-lg-4 col-md-5 col-sm-12 row">
                            <div className="col-md-12 col-sm-6 col-6">
                                <figure className="suba-top-img">
                                    <img src={gb1} alt="" />
                                    <figcaption style={{fontSize: '12px'}}><b>Gambar 1.</b> Penampakan SiO<sub>2</sub> ukuran 100 nm
                                    <br />(sumber: ssnano.com)</figcaption>
                                </figure>
                            </div>
                            <div className="col-md-12 col-sm-6 col-6">
                                <figure className="suba-bot-img">
                                    <img src={gb2} alt="" />
                                    <figcaption style={{fontSize: '12px'}}><b>Gambar 2.</b> Gabungan molekul SiO<sub>r</sub>
                                    <br />(sumber: wikipedia.com)</figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="suba-mid-right col-lg-8 col-md-7 col-sm-12">
                            <p>
                                Pernahkah Anda bayangkan bahwa batu yang sangat besar tersusun dari butir-butir pasir yang 
                                sangat lembut yang terikat satu sama lain. Demikian pula pasir-pasir yang sangat lembut 
                                itu juga tersusun dari partikel-partikel silikon dioksida yang sangat kecil. Adapun silikon 
                                dioksida merupakan gabungan dari atom-atom silikon dan oksigen. Bagaimanakah atom-atom silikon 
                                dan oksigen tersebut bergabung satu dengan yang lain sehingga pada akhirnya menjadi batu yang 
                                berukuran raksasa.
                            </p>
                            <p>
                                Sekarang, coba bandingkan dengan garam dapur yang berwujud padatan kristal berwarna putih. 
                                Garam dapur tersusun dari gabungan antara ion-ion natrium dengan ion-ion klorida. Bagaimana 
                                ion-ion tersebut terbentuk dan kemudian bergabung satu dengan yang lainnya sehingga membentuk 
                                garam dapur?                                        
                            </p>
                            <p>
                                Mengapa batu tidak larut dalam air, sedangkan garam dapur akan larut? Semua pertanyaan tersebut 
                                dapat terjawab apabila Anda mempelajari dengan baik, apa yang dimaksud dengan <b>ikatan kimia</b>.
                            </p>
                        </div>
                    </div>
                    <div className="body-bot">
                        <button onClick={handleHome} disabled={btn}>Selesai</button>
                    </div>
                </div>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}