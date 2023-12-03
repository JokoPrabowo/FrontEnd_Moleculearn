import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/quiz.css"
import { Notfound } from "../landing page";

import { getQuestion } from "../../redux/actions/questionActions";
import { saveScore } from "../../redux/actions/scoreActions";
import { updateData } from "../../redux/actions/authActions";

export default function Quiz() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions } = useSelector((state) => state.questions);
    const [isLoading, setIsLoading] = useState(true);
    const [disable, setDisable] = useState(true);
    const [question, setQuestion] = useState(0);
    const [point, setPoint] = useState(0);
    const [btn, setBtn] = useState([false], [false], [false], [false], [false]);
    const [color, setColor] = useState([false], [false], [false], [false], [false], [false], [false], [false], [false], [false]);
    const [transform, setTransform] = useState([false], [false], [false], [false], [false], [false], [false], [false], [false], [true]);
    const [isFinish, setFinish] = useState(false);
    // const profile = localStorage.getItem("user");
    // const user = JSON.parse(profile);

    const handlerDisable = (num) => {
        const newBtn = [...btn];
        setDisable(false);
        switch(num) {
            case 0:
                newBtn[1] = true;
                newBtn[2] = true;
                newBtn[3] = true;
                break;
            case 1:
                newBtn[0] = true;
                newBtn[2] = true;
                newBtn[3] = true;
                break;
            case 2:
                newBtn[0] = true;
                newBtn[1] = true;
                newBtn[3] = true;
                break;
            case 3:
                newBtn[0] = true;
                newBtn[1] = true;
                newBtn[2] = true;
                break;
            default:
                newBtn[0] = false;
                newBtn[1] = false;
                newBtn[2] = false;
                newBtn[3] = false;
        }
        setBtn(newBtn);
    }

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                await dispatch(getQuestion());
            }catch(e){
                console.log(e)
            }finally{
                setIsLoading(false)
            }
        }
        getData();

    }, []);

    const handleAnswer = (value) => {
        const newColor = [...color];
        const newTransform = [...transform];
        newTransform[question] = true;
        if (questions.data[question].answer === value){            
            newColor[question] = true;
            setPoint(point+10);
        } else {
            newColor[question] = false;
        }
        setColor(newColor);
        setTransform(newTransform);
    }

    const handleNext = (num) => {
        handlerDisable(4);
        setDisable(true);
        const length = questions.data.length;
        if((question + 1) < length){
            setQuestion(question + 1);
        }else{
            setFinish(true);
        }
    }

    const handleHome = (e) => {
        e.preventDefault();
        navigate('/')
    }

    const handlePoint = () => {
        if(point < 50){
            return (
                <>
                    <h1 style={{color: "#FF2400"}}>{point}!</h1>
                    <h3>Kegagalan adalah awal dari keberhasilan, ayo terus mencoba!</h3>
                    <h5>Masih banyak hal yang perlu kamu pelajari!</h5>
                </>
            )
        }else if((point > 50) && (point < 70)){
            return (
                <>
                    <h1 style={{color: "#ffc107"}}>{point}!</h1>
                    <h3>Kamu telah melakukannya dengan baik, ayo terus mencoba!</h3>
                    <h5>Kamu perlu belajar lebih banyak lagi!</h5>
                </>
            )
        }else if ((point >= 70) && (point < 100)){
            return(
                <>
                    <h1 style={{color: "#32CD32"}}>{point}!</h1>
                    <h3>Kerja bagus, kamu menyelesaikan kuis dengan baik!</h3>
                    <h5>Belajarlah lagi untuk mendapatkan nilai sempurna!</h5>
                </>
            )
        }else{
            return(
                <>
                    <h1 style={{color: "#0F52BA"}}>{point}!</h1>
                    <h3>Selamat, kamu telah menyelesaikan kuis dengan nilai sempurna!</h3>
                    <h5>Terus latih dirimu agar kamu tidak lupa!</h5>
                </>
            )
        }
    }


    const handleSubmitScore = (score) => {
        const newBtn = [...btn];
        newBtn[4] = true;
        setBtn(newBtn);
        // console.log(user);
        // if(user.pretest === false){
        //     dispatch(updateData())
        // }
        // dispatch(saveScore({score}));
        setTimeout(() => {
            navigate('/');
        },1000);
    }
    return(
        <Container fluid className="quiz-app">
            {/* {profile ? ( */}
                <>
                    {isFinish ? (
                        <Card className="result-card">
                            <Card.Body className="result-body">
                                {handlePoint()}
                                <button disabled={btn[4]} onClick={() => handleSubmitScore(point)}>Selesai</button>
                            </Card.Body>
                        </Card>
                    ) : (  
                        <>
                            <button className="close btn-close" onClick={handleHome}></button>
                            <div className="quiz-body">
                                <div className="quiz-body-top">
                                    <Row className="score-point">
                                        <Col style={{ borderRadius: "20px 0 0 20px", backgroundColor: color[0] ? "#32CD32" : "#FF2400",
                                                    transform: transform[0] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                            <a href="#1" style={{color: "transparent"}}>1</a>
                                        </Col>
                                        <Col style={{backgroundColor: color[1] ? "#32CD32" : "#FF2400",
                                                    transform: transform[1] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[2] ? "#32CD32" : "#FF2400",
                                                    transform: transform[2] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[3] ? "#32CD32" : "#FF2400",
                                                    transform: transform[3] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[4] ? "#32CD32" : "#FF2400",
                                                    transform: transform[4] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[5] ? "#32CD32" : "#FF2400",
                                                    transform: transform[5] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[6] ? "#32CD32" : "#FF2400",
                                                    transform: transform[6] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[7] ? "#32CD32" : "#FF2400",
                                                    transform: transform[7] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{backgroundColor: color[8] ? "#32CD32" : "#FF2400",
                                                    transform: transform[8] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                        <Col style={{ borderRadius: "0 20px 20px 0", backgroundColor: color[9] ? "#32CD32" : "#FF2400",
                                                    transform: transform[9] ? "scaleX(1)" : "scaleX(0)"}} className="value">
                                        </Col>
                                    </Row>    
                                </div>
                                <div className="quiz-body-mid">
                                    <Card className="quiz-card">
                                        <Card.Body className="quiz-card-body">
                                            {isLoading ? (
                                                <Card.Text>
                                                    Harap tunggu...
                                                </Card.Text>
                                            ) : (
                                                <Card.Text>
                                                    {questions.data[question].question}
                                                </Card.Text>
                                            )}
                                        </Card.Body>
                                            {isLoading ? (
                                                <Row>
                                                    <Col className="choices col-6">
                                                        <button>a. dalam proses...</button>
                                                    </Col>
                                                    <Col className="choices col-6">
                                                        <button>c. dalam proses...</button>
                                                    </Col>
                                                </Row>
                                            ) : (
                                                <Row>                        
                                                    <Col className="choices col-6" >
                                                        <button disabled={btn[0]} onClick={() => {
                                                            handleAnswer(questions.data[question].a);
                                                            handlerDisable(0);
                                                        }}>
                                                            {questions.data[question].a}
                                                        </button>            
                                                    </Col>
                                                    <Col className="choices col-6" >                                
                                                        <button disabled={btn[2]} onClick={() => {
                                                            handleAnswer(questions.data[question].c);
                                                            handlerDisable(2);
                                                        }}>
                                                            {questions.data[question].c}
                                                        </button>
                                                    </Col>
                                                </Row>
                                            )}
                                            {isLoading ? (
                                                <Row>
                                                    <Col className="choices col-6">
                                                        <button>b. dalam proses...</button>
                                                    </Col>
                                                    <Col className="choices col-6">
                                                        <button>d. dalam proses...</button>
                                                    </Col>
                                                </Row>
                                            ) : (
                                                <Row>
                                                    <Col className="choices col-6" >                                
                                                        <button disabled={btn[1]} onClick={() => {
                                                            handleAnswer(questions.data[question].b);
                                                            handlerDisable(1);
                                                        }}>
                                                            {questions.data[question].b}
                                                        </button>
                                                    </Col>
                                                    <Col className="choices col-6" >                                
                                                        <button disabled={btn[3]} onClick={() => {
                                                            handleAnswer(questions.data[question].d);
                                                            handlerDisable(3);
                                                        }}>
                                                            {questions.data[question].d}
                                                        </button>
                                                    </Col>
                                                </Row>
                                            )}
                                    </Card>
                                </div>
                                <div className="quiz-body-bot">
                                    <button className="next-btn" disabled={disable} onClick={handleNext}>Lanjutkan</button>
                                </div>
                            </div>
                        </>
                    )}
                </>
            {/* ) : (
                <Notfound/>
            )} */}
        </Container>
    )
}