import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function Logout(props) {

    return(
        <Modal            
            show={props.show}
            onHide={props.toggleModal}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Keluar
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Anda yakin ingin keluar?
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                style={{backgroundColor: "black", border: "none", fontWeight: "bold"}}
                onClick={props.toggleModal}
                >Tidak</Button>
                <Button 
                style={{backgroundColor: "#ffc107", border: "none", fontWeight: "bold"}}
                onClick={props.handleLogout}
                >Ya</Button>
            </Modal.Footer>
        </Modal>
  );
}