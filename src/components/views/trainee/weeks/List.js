import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Daten } from "../Daten";
import { withRouter } from "react-router-dom";
import DocumentIcon from "../../../elements/icons/DocumentIcon";

const Liste = (props) => {
  const { weeks } = useContext(Daten);
  const changeUrl = (url) => {
    props.history.push(`week/${url}`);
  };
  weeks.sort((a, b) => b.date - a.date);
  return (
    <div className="listOfWeek">
      {weeks.map((week, index) => (
        <div key={index} className="row justify-content-between weeks-list">
          <div className="col-md-3  my-col-list">
            <DocumentIcon /> {week.team}
          </div>
          <div className="col-md-3  my-col-list">{week.dateUrl}</div>
          <div className=" col-md-2 my-col-list">
            {week.date ? (
              <Button
                block
                variant="secondary"
                onClick={() => changeUrl(week.dateUrl)}
              >
                Ansehen
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default withRouter(Liste);
//.replace(/ /g, "")
