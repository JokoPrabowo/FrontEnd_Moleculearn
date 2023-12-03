import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function Option(props) {

    return(
        <Modal            
            show={props.show}
            onHide={props.toggleTrain}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Latihan
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button
                variant="warning"
                onClick={props.toConfigure}
                style={{width: "100%", marginBottom: "10px"}}
                >Konfigurasi elektron</Button>
                <Button
                variant="warning"
                style={{width: "100%"}}
                onClick={props.toTrain}
                >Ikatan kimia</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button
                style={{backgroundColor: "black", border: "none", fontWeight: "bold"}}
                onClick={props.toggleTrain}
                >Tutup</Button>
            </Modal.Footer>
        </Modal>
  );
}