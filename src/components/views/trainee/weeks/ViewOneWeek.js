import React, { useContext, useState } from "react";
import ActivityReport from "../writeReport/activityReport";
import { Daten } from "../Daten";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { MODAL_TYPE_CONFIRM_CANCEL } from "../../../elements/alert/Alert";
import jsPdfGenerator from "./jsPdfGenerator";

const ViewOneWeek = (props) => {
  const { getDayByURlDate, deleteOneWeek, setModal } = useContext(Daten);
  const [disable, setDisable] = useState({ disabled: true });
  const [showButton, setShowButton] = useState(true);
  const bearbitenBtn = disable.disabled
    ? "Bearbeiten"
    : "Bearbeitung abschließen";
  const oneWeek = getDayByURlDate(props.match.params.id);

  return (
    <>
      <h3 className="titel">Berichtsheft:</h3>

      <ActivityReport
        overwrite={true}
        daten={oneWeek}
        disabled={disable.disabled}
        dateDisabled={true}
        showButton={showButton}
      />
      <div className="row justify-content-between report-list">
        <div className="col-md-4   report-col">
          {" "}
          <Button
            className="bearbeiten-btn"
            onClick={() => {
              setDisable({ disabled: !disable.disabled });
              setShowButton(!showButton);
            }}
            variant="secondary"
          >
            {bearbitenBtn}
          </Button>
        </div>
        <div className="col-md-4   report-col">
          <Button onClick={() => jsPdfGenerator(oneWeek)} variant="secondary">
            Herunterladen
          </Button>
        </div>
        <div className="col-md-4   report-col">
          {disable.disabled === false && ( //==
            <Button
              onClick={() => {
                const cb = (response) => {
                  if (response === true) {
                    //==
                    deleteOneWeek(oneWeek.dateUrl);
                    props.history.push(`/azubi/weeks`);
                  } else {
                  }
                };
                setModal({
                  modalShow: true,
                  onCallback: cb,
                  modalText: "Möchtest du das Dokument wirklich löschen?",
                  modalType: MODAL_TYPE_CONFIRM_CANCEL,
                });
              }}
              variant="secondary"
            >
              Löschen
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default withRouter(ViewOneWeek);
