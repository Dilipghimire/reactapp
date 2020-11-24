import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const PopUpModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const checkAndPopUP = () => {
    props.searchValue();
    toggle();
  };

  return (
    <div>
      <Button onClick={checkAndPopUP}>{props.buttonText}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.modalTitle}</ModalHeader>
        <ModalBody>{props.modalBodyText} </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            {!props.checkforValue ? "Yes" : "Ok"}
          </Button>
          {!props.checkforValue && (
            <Button color="secondary" onClick={toggle}>
              No
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PopUpModal;
