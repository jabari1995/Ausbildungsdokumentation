import React from "react";
import { Modal, Button } from "react-bootstrap";
export const MODAL_TYPE_CONFIRM = "MODAL_TYPE_CONFIRM";
export const MODAL_TYPE_CONFIRM_CANCEL = "MODAL_TYPE_CONFIRM_CANCEL";
function MyVerticallyCenteredModal({
  show,
  onHide,
  modalType,
  alertText,
  onCallback,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Achtung!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Info</h4> */}
        <p>{alertText}</p>
      </Modal.Body>
      <Modal.Footer>
        {modalType !== MODAL_TYPE_CONFIRM && (
          <>
            <Button
              onClick={() => {
                if (onCallback) {
                  onCallback(true);
                }
                onHide("MODAL_HIDE");
              }}
            >
              Ja
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                if (onCallback) {
                  onCallback(false);
                }
                onHide("MODAL_HIDE");
              }}
            >
              Nein
            </Button>
          </>
        )}
        {/* <Button
          variant="secondary"
          onClick={() => {
            if (onCallback) {
              onCallback(false);
            }
            onHide("MODAL_HIDE");
          }}
        >
          Schließen
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function Alert(props) {
  return (
    <>
      <MyVerticallyCenteredModal
        alertText={props.modalText}
        modalType={props.modalType}
        show={props.modalShow}
        onHide={() => props.cb()}
        onCallback={props.onCallback}
      />
    </>
  );
}

export default Alert;
