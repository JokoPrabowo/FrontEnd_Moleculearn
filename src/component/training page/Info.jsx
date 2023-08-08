import React from "react";
import {  Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/train.css"

export default function Info(props) {
  return (
    <Modal
      show={props.show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {props.true ? (
        <>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Benar!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.item[0].image} alt="" style={{width: "100%"}}/>
            </Modal.Body>
        </>
      ) : (
        <>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Salah!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Jumlah masing-masing atom kurang tepat</h5>
            </Modal.Body>
        </>
      ) }
      <Modal.Footer>
        <button className="close-btn" onClick={props.onHide}>Kembali</button>
        <button className="train-next" onClick={props.getData}>Lanjutkan</button>
      </Modal.Footer>
    </Modal>
  );
}
