import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/train.css"
import { Notfound } from "../landing page";

import Info from "./Info";

import { getCompound } from "../../redux/actions/compoundActions";

export default function Train() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [atom1, setAtom1] = useState();
    const [atom2, setAtom2] = useState();
    const [item, setItem] = useState(false);
    const { compound } = useSelector((state) => state.compound);
    const profile = localStorage.getItem("user");

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                await dispatch(getCompound());
            }catch(e){
                console.log(e)
            }finally{
                setIsLoading(false)
            }
        }
        getData();

    }, []);

    const handleClose = (e) => {
        setModal(false);
    }

    const handleModal = () => {
        dispatch(getCompound())
        setAtom1();
        setAtom2();
        setModal(false);
    }
    const handleShow = () => {
        setModal(true);
        if((compound[0].n1 === atom1) && (compound[0].n2 === atom2)){
            setItem(true);
        }else{
            setItem(false);
        }
    }

    return(
        <Container fluid className="train-app">
            {profile ? (
                <>
                    <button className="close btn-close" onClick={() => navigate('/')}></button>
                    <Card className="train-card col-lg-7 col-md-9 col-sm-12 col-12">
                        <Card.Body>
                            <h5>Tentukan jumlah atom yang sesuai untuk senyawa berikut!</h5>
                            <div className="train-molecule">
                                {isLoading ? (
                                    <>
                                        <div className="train-head row">
                                            <div className="col-4">
                                                <h1>{atom1}...</h1>
                                            </div>
                                            <div className="col-4">
                                                <h1>+</h1>
                                            </div>
                                            <div className="col-4">
                                                <h1>{atom2}...</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Nomor atom : ...</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Nomor atom : ...</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="train-head row">
                                            <div className="col-4">
                                                <h1>{atom1}{compound[0].x1}</h1>
                                            </div>
                                            <div className="col-4">
                                                <h1>+</h1>
                                            </div>
                                            <div className="col-4">
                                                <h1>{atom2}{compound[0].x2}</h1>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <span>Nomor atom : {compound[0].z1}</span>
                                            </div>
                                            <div className="col-6">
                                                <span>Nomor atom : {compound[0].z2}</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="train-body">
                                    <div className="train-main row">
                                        <div className="train-btn col-6">
                                            <button onClick={() => setAtom1(1)}>1</button>
                                            <button onClick={() => setAtom1(2)}>2</button>
                                            <button onClick={() => setAtom1(3)}>3</button>
                                            <button onClick={() => setAtom1(4)}>4</button>
                                            <button onClick={() => setAtom1(5)}>5</button>
                                            <button onClick={() => setAtom1(6)}>6</button>
                                        </div>
                                        <div className="train-btn col-6">
                                            <button onClick={() => setAtom2(1)}>1</button>
                                            <button onClick={() => setAtom2(2)}>2</button>
                                            <button onClick={() => setAtom2(3)}>3</button>
                                            <button onClick={() => setAtom2(4)}>4</button>
                                            <button onClick={() => setAtom2(5)}>5</button>
                                            <button onClick={() => setAtom2(6)}>6</button>
        
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="train-next" onClick={handleShow}>Terapkan</button>
                        </Card.Body>
                    </Card>
                    <Info show={modal} item={compound} true={item} getData={handleModal} onHide={handleClose}/>
                </>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}