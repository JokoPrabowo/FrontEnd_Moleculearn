import React, { useState, useEffect }from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/learn.css"

import { Notfound } from "../landing page";

export default function Learn() {
    const navigate = useNavigate();
    const [show,setShow] = useState([false], [false], [false], [false], [false]);
    const [disable, setDisable] = useState([false], [false], [false], [false], [false]);
    const profile = localStorage.getItem("user");
    const user = JSON.parse(profile);

    useEffect(() => {
        const checkLvl = () => {
            if(user){
                const newDisable = [...disable];
                switch(user.level){
                    case 1:
                        newDisable[0] = false;
                        newDisable[1] = true;
                        newDisable[2] = true;
                        newDisable[3] = true;
                        newDisable[4] = true;
                        break;
                    case 2:
                        newDisable[0] = false;
                        newDisable[1] = false;
                        newDisable[2] = true;
                        newDisable[3] = true;
                        newDisable[4] = true;
                        break;
                    case 3:
                        newDisable[0] = false;
                        newDisable[1] = false;
                        newDisable[2] = false;
                        newDisable[3] = true;
                        newDisable[4] = true;
                        break;
                    case 4:
                        newDisable[0] = false;
                        newDisable[1] = false;
                        newDisable[2] = false;
                        newDisable[3] = false;
                        newDisable[4] = true;
                        break;
                    case 5:
                        newDisable[0] = false;
                        newDisable[1] = false;
                        newDisable[2] = false;
                        newDisable[3] = false;
                        newDisable[4] = false;
                        break;
                    default:
                        newDisable[0] = true;
                        newDisable[1] = true;
                        newDisable[2] = true;
                        newDisable[3] = true;
                        newDisable[4] = true;
                }
                setDisable(newDisable);
            }
        }
        checkLvl();
        console.log(user);
    }, [])

    const handleShow = (num) => {
        const newShow = [...show];
        switch(num) {
            case 0:
                if(newShow[0]){
                    newShow[0] = false;                
                    break;
                }
                newShow[0] = true;
                newShow[1] = false;
                newShow[2] = false;
                newShow[3] = false;
                newShow[4] = false;
                break;
            case 1:
                if(newShow[1]){
                    newShow[1] = false;                
                    break;
                }
                newShow[0] = false;
                newShow[1] = true;
                newShow[2] = false;
                newShow[3] = false;
                newShow[4] = false;
                break;
            case 2:
                if(newShow[2]){
                    newShow[2] = false;                
                    break;
                }
                newShow[0] = false;
                newShow[1] = false;
                newShow[2] = true;
                newShow[3] = false;
                newShow[4] = false;
                break;
            case 3:
                if(newShow[3]){
                    newShow[3] = false;                
                    break;
                }
                newShow[0] = false;
                newShow[1] = false;
                newShow[2] = false;
                newShow[3] = true;
                newShow[4] = false;                
                break;
            case 4:
                if(newShow[4]){
                    newShow[4] = false;                
                    break;
                }
                newShow[0] = false;
                newShow[1] = false;
                newShow[2] = false;
                newShow[3] = false;
                newShow[4] = true;                
                break;
            default:
                newShow[0] = false;
                newShow[1] = false;
                newShow[2] = false;
                newShow[3] = false;
                newShow[4] = false;
        }
        setShow(newShow);
    }

    const handleHome = (e) => {
        e.preventDefault();
        navigate('/')
    }

    const handleLink = (link) =>{
        navigate(link);
    }

    return(
        <Container fluid className="learn-app">
            {profile ? (
                <>
                    <button className="close btn-close" onClick={handleHome}></button>
                    <div className="learn-body">
                        <div className="header-body">
                            <button disabled={true} className="header-btn">Daftar materi</button>
                        </div>
                        <div className="main-body" >
                            <Card className="rowcard rowleft">
                                <Card.Title>                        
                                    <button className="toggle-btn" onClick={() => handleShow(0)} disabled={disable[0]}>1</button>
                                </Card.Title>                        
                                <Card.Body className="learn-card-left" style={{ transform: show[0] ? "scale(1, 1)" : "scale(0, 0)"}}>
                                    <div className="card-banner">
                                        <h5>Pengantar</h5>
                                    </div>
                                    <button onClick={() => handleLink('./pengantar')} className="start-btn">Mulai</button>
                                </Card.Body>
                            </Card>
                            <Card className="rowcard rowright">                    
                                <Card.Body className="learn-card-right" style={{ transform: show[1] ? "scale(1, 1)" : "scale(0, 0)"}}>
                                    <button onClick={() => handleLink('./atom_stabil_&_tidak_stabil/1')} className="start-btn">Mulai</button>
                                    <div className="card-banner">
                                        <h5>Atom Stabil dan Atom Tidak Stabil</h5>
                                    </div>                            
                                </Card.Body>
                                <Card.Title>
                                    <button className="toggle-btn" onClick={() => handleShow(1)} disabled={disable[1]}>2</button>    
                                </Card.Title>                        
                            </Card>                    
                            <Card className="rowcard rowleft">
                                <Card.Title>
                                    <button className="toggle-btn" onClick={() => handleShow(2)} disabled={disable[2]}>3</button>                            
                                </Card.Title>                                
                                <Card.Body className="learn-card-left" style={{ transform: show[2] ? "scale(1, 1)" : "scale(0, 0)"}}>
                                    <div className="card-banner">
                                        <h5>Ikatan Ionik</h5>
                                    </div>
                                    <button className="start-btn" onClick={() => handleLink('./ikatan_ionik/1')}>Mulai</button>                            
                                </Card.Body>
                            </Card>                    
                            <Card className="rowcard rowright">                                
                                <Card.Body className="learn-card-right" style={{ transform: show[3] ? "scale(1, 1)" : "scale(0, 0)"}}>
                                    <button onClick={() => handleLink('./ikatan_kovalen/1')} className="start-btn">Mulai</button>
                                    <div className="card-banner">
                                        <h5>Ikatan Kovalen</h5>
                                    </div>                            
                                </Card.Body>
                                <Card.Title>
                                    <button className="toggle-btn" onClick={() => handleShow(3)} disabled={disable[3]}>4</button>                            
                                </Card.Title>                        
                            </Card>                    
                            <Card className="rowcard rowleft">
                                <Card.Title>
                                    <button className="toggle-btn" onClick={() => handleShow(4)} disabled={disable[4]}>5</button>                            
                                </Card.Title>                                
                                <Card.Body className="learn-card-left" style={{ transform: show[4] ? "scale(1, 1)" : "scale(0, 0)"}}>
                                    <div className="card-banner">
                                        <h5>Rangkuman</h5>
                                    </div>
                                    <button onClick={() => handleLink('./rangkuman')} className="start-btn">Mulai</button>                                                                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </>
            ) : (
                <Notfound/>               
            )}
        </Container>
    )
}