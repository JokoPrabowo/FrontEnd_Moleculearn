import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/configuration.css"
import { Notfound } from "../landing page";

import { getAtom } from "../../redux/actions/atomActions";

export default function Configuration() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [k, setK] = useState('0');
    const [l, setL] = useState('0');
    const [m, setM] = useState('0');
    const [n, setN] = useState('0');
    const [o, setO] = useState('0');
    const [p, setP] = useState('0');
    const profile = localStorage.getItem("user");
    const { atom } = useSelector((state) => state.atom);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            setIsLoading(true);
            await dispatch(getAtom());
        }catch(e){
            // console.log(e)
        }finally{
            setIsLoading(false)
        }
    }

    const equalsCheck = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }

    const handleAnswer = () => {
        const newAtoms = [parseInt(k), parseInt(l), parseInt(m), parseInt(n), parseInt(o), parseInt(p)]
        const ansAtom = [atom[0].k, atom[0].l, atom[0].m, atom[0].n, atom[0].o, atom[0].p]
        if(equalsCheck(newAtoms, ansAtom)){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Benar!",
                showConfirmButton: false,
                timer: 1500,
              });
              getData();
              setK(0);
              setL(0);
              setM(0);
              setN(0);
              setO(0);
              setP(0);
        }else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Salah!",
                showConfirmButton: false,
                timer: 1500,
              });
        }

    }
    return(
        <Container fluid className="config-app">
            {profile ? (
                <>
                    <button className="close btn-close" onClick={() => navigate('/')}></button>
                    <Card className="config-card">
                        Tentukan konfigurasi elektron atom berikut!
                        <Card.Body className="config-body">
                            {isLoading? (
                                <h1 ><sub style={{fontWeight: "normal", fontSize: "16px"}}>00</sub>Xx :</h1>    
                            ) : (
                                <h1 ><sub style={{fontWeight: "normal", fontSize: "16px"}}>{atom[0].z}</sub>{atom[0].x} :</h1>
                            )}
                            <div className="input-form">
                                <input maxLength="1" value={k} onChange={(e) => setK(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                                <input maxLength="1" value={l} onChange={(e) => setL(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                                <input maxLength="2" value={m} onChange={(e) => setM(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                                <input maxLength="2" value={n} onChange={(e) => setN(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                                <input maxLength="2" value={o} onChange={(e) => setO(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                                <input maxLength="2" value={p} onChange={(e) => setP(e.target.value)} 
                                        onKeyPress={(event) => { 
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }}}/>
                            </div>
                        </Card.Body>
                        <Card.Footer className="config-footer">
                            <button className="config-btn" onClick={() => handleAnswer()}>Periksa</button>
                        </Card.Footer>
                    </Card>
                </>
            ) : (
                <Notfound/>
            )}
        </Container>
    )
}