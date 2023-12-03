import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { Col, Container, Navbar, Row } from "react-bootstrap";
// import SignIn from "./SignIn";
// import Logout from "./Logout";
import Option from "./Option";
import "bootstrap/dist/css/bootstrap.min.css";
import gb1 from "../../images/learning.jpg";
import "../../css/home.css";

// import { signIn, logout } from "../../redux/actions/authActions";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);
    const [show, setShow] = useState(false);
    const [btn, setBtn] = useState(false);
    const [ showLogout, setShowLogout ] = useState(false);
    const [ showOption, setShowOption] = useState(false);
    // const profile = localStorage.getItem("user");
    // const user = JSON.parse(profile);

    // useEffect(() => {
    //     if(user){
    //         if(user.pretest === false){
    //             toggleShow();
    //             navigate('/pretest');
    //         }
    //     }
    // }, [])
            
    const handleLesson = (e) => {
        e.preventDefault();
        navigate('/materi');
        // if(user) {
        //     e.preventDefault();
        //     navigate('/materi');
        // }else {
        //     setShow(true);
        // }
    };

    const handleTrain = (e) => {
        e.preventDefault();
        navigate('/ikatan_kimia');
        // if(user) {
        //     e.preventDefault();
        //     navigate('/latihan')
        // }else {
        //     setShow(true);
        // }
    };

    const handleConfigure = (e) => {
        e.preventDefault();
        navigate('/konfigurasi_elektron');
        // if(user) {
        //     e.preventDefault();
        //     navigate('/konfigurasi_elektron')
        // }else {
        //     setShow(true);
        // }
    };

    const handleQuiz = (e) => {
        e.preventDefault();
        navigate('/kuis');
        // if(user) {
        //     e.preventDefault();
        //     navigate('/kuis')
        // }else {
        //     setShow(true);
        // }
    };

    const toggleTrain = () => {
        setShowOption(false);
    }

    // const toggleShow = () => {
    //     setShow(false);
    // }
    
    // const toggleModal = () => {
    //     setShowLogout(false);
    // }

    // const handleShowLogout = (e) => {
    //     e.preventDefault();
    //     setShowLogout(true);
    // }

    // const getData = (data) => {
    //     dispatch(signIn(data))
    //     .then(() => {
    //         toggleShow();
    //         window.location.reload();
    //     })
    // }

    // const handleLogout = () => {
    //     dispatch(logout())
    //     .then(() =>{
    //         toggleModal();
    //         window.location.reload();
    //     })
    // }

    return(
        <Container fluid className="home-app">
            <Navbar collapseOnSelect expand="sm" className="navbar">
                 <Container>
                     <Navbar.Brand href="/" className="brand">Moleculearn</Navbar.Brand>
                     <Navbar.Toggle />
                     <Navbar.Collapse className="justify-content-end responsive-navbar-nav">
                     <Navbar.Text>
                     <a href="" className="account"> </a>
                         {/* {user === null ? (
                            <a href="" className="account"> </a>
                        ) : (
                            <a href="" onClick={handleShowLogout} className="account">{user.fullname}</a>
                         )} */}
                     </Navbar.Text>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>
             <Row className="home-header">
                <Col className="headerimg col-lg-6 col-md-12 col-sm-12 col-12">
                    <img src={gb1} alt=""/>                   
                </Col>
                <Col className="headerbtn col-lg-6 col-md-12 col-sm-12 col-12">
                    <h3>Cara seru untuk belajar ikatan kimia!</h3>
                    <br/>
                    <button variant="light" onClick={handleLesson}>Materi</button>
                    <br/>
                    <button variant="light" onClick={() => setShowOption(true)}>Latihan</button>
                    <br/>
                    <button variant="light" onClick={handleQuiz}>Kuis</button>
                </Col>
             </Row>
             {/* <SignIn show={show} onSubmit={getData} toggleShow={toggleShow}/>
             <Logout show={showLogout} handleLogout={handleLogout} toggleModal={toggleModal} /> */}
             <Option show={showOption} toTrain={handleTrain} toConfigure={handleConfigure} toggleTrain={toggleTrain} />
        </Container>
    )
}