import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import TextArea from "../../../elements/textArea/TextArea";
import { Daten } from "../Daten";
import DatePicker from "./DatePicker";
import { withRouter } from "react-router-dom";
import {
  MODAL_TYPE_CONFIRM_CANCEL,
  MODAL_TYPE_CONFIRM,
} from "../../../elements/alert/Alert";

const ActivityReport = (props) => {
  let shOwButton = props.showButton ? !props.showButton : true;

  const { daten } = props;
  const { overwrite } = props;
  const { changeDaten, proofDate, setModal } = useContext(Daten);

  const [Days, setDays] = useState({
    days: [
      {
        name: "Montag",
        writeReport: daten ? daten.days[0].writeReport : "",
      },
      {
        name: "Dienstag",
        writeReport: daten ? daten.days[1].writeReport : "",
      },

      {
        name: "Mittwoch",
        writeReport: daten ? daten.days[2].writeReport : "",
      },
      {
        name: "Donnerstag",
        writeReport: daten ? daten.days[3].writeReport : "",
      },
      {
        name: "Freitag",
        writeReport: daten ? daten.days[4].writeReport : "",
      },
    ],

    date: daten ? daten.date : "",
    dateUrl: "",
    team: daten ? daten.team : "",
  });
  const [msg, setMsg] = useState("");
  const [showSave, setShowSave] = useState(false);

  //Change the Data in Days feld
  const changeDays = (zahl, data) => {
    const currDay = Days.days[zahl];
    currDay.writeReport = data;
    const newDays = { ...Days };
    newDays.days[zahl].writeReport = data;
    setDays(newDays);
  };
  //Change the Data in Team feld
  const team = (data) => {
    Days.team = data;
    const newDays = { ...Days };
    newDays.team = data;
    setDays(newDays);
  };
  //Change the Data in Date Feld
  const dateSetter = (data) => {
    Days.date = data;
    const newDays = { ...Days };
    newDays.date = data;
    setDays(newDays);
  };

  return (
    <>
      <div className="row justify-content-between report-list">
        <div className="col-md-4   report-col"> Name</div>
        <div className="col-md-8   report-col">Mohammad Younus Jabari</div>
      </div>

      <div className="row justify-content-between report-list">
        <div className="col-md-4   report-col"> Ausbildungsabteilung</div>
        <div className="col-md-8   report-col">
          <TextArea
            as="input"
            size={1}
            disabled={props.disabled}
            value={Days.team}
            callback={(data) => {
              team(data);
            }}
          />
        </div>
      </div>

      <div className="row justify-content-between report-list">
        <div className="col-md-4   report-col"> Datum</div>
        <div className="col-md-3   report-col">
          <DatePicker
            required
            dateDisabled={props.dateDisabled}
            value={Days.date}
            callback={(data) => {
              if (!proofDate(data)) {
                setMsg("");
                setShowSave(false);
                dateSetter(data);
              } else {
                setShowSave(true);
                setMsg(
                  "Achtung! Für diese Woche hast du bereits ein Dokument angelegt"
                );
                dateSetter(data);
              }
            }}
          />{" "}
        </div>
        <div className="col-md-5   report-col"> {msg}</div>
      </div>
      <hr />
      <div className="row justify-content-around report-list">
        <div className="col-md-12   report-col-Tat">
          {" "}
          <h3>Tätigkeitsnachweis:</h3>
        </div>
      </div>

      <div className="row justify-content-around report-list">
        <div className="col-md-4   report-col">
          {" "}
          <h5>Montag</h5>
        </div>
        <div className="col-md-8   report-col">
          <TextArea
            disabled={props.disabled}
            callback={(data) => changeDays(0, data)}
            value={Days.days[0].writeReport}
            Text="Ausgeführte Arbeiten, Unterricht usw. "
          />
        </div>

        <div className="col-md-4  report-col">
          {" "}
          <h5>Dienstag</h5>
        </div>
        <div className="col-md-8   report-col">
          <TextArea
            disabled={props.disabled}
            value={Days.days[1].writeReport}
            callback={(data) => changeDays(1, data)}
          />
        </div>
        <div className="col-md-4   report-col">
          {" "}
          <h5>Mittwoch</h5>
        </div>
        <div className="col-md-8  report-col">
          <TextArea
            disabled={props.disabled}
            value={Days.days[2].writeReport}
            callback={(data) => changeDays(2, data)}
          />
        </div>
        <div className="col-md-4   report-col">
          {" "}
          <h5>Donnerstag</h5>
        </div>
        <div className="col-md-8   report-col">
          <TextArea
            disabled={props.disabled}
            value={Days.days[3].writeReport}
            callback={(data) => changeDays(3, data)}
          />
        </div>
        <div className="col-md-4   report-col">
          {" "}
          <h5>Freitag</h5>
        </div>
        <div className="col-md-8   report-col">
          <TextArea
            disabled={props.disabled}
            value={Days.days[4].writeReport}
            callback={(data) => changeDays(4, data)}
          />
        </div>

        {shOwButton === true && (
          <>
            <div className="col-md-12   report-col-btn">
              <Button
                disabled={showSave}
                variant="secondary"
                onClick={() => {
                  console.log(777);

                  if (Days.team && Days.date) {
                    const cb = (response) => {
                      if (response === true) {
                        changeDaten(Days, overwrite);
                        if (overwrite) {
                          props.history.push(`/azubi/weeks`);
                        } else {
                          props.history.push(`/azubi/week/${Days.dateUrl}`);
                        }
                      } else {
                      }
                    };
                    setModal({
                      modalShow: true,
                      onCallback: cb,
                      modalText: "Möchtest du das Dokument speichern?",
                      modalType: MODAL_TYPE_CONFIRM_CANCEL,
                    });
                  } else {
                    setModal({
                      modalShow: true,
                      modalText:
                        "Wähle bitte ein Datum aus und trage die Abteilung ein.",
                      modalType: MODAL_TYPE_CONFIRM,
                    });
                  }
                }}
              >
                Speichern
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(ActivityReport);
