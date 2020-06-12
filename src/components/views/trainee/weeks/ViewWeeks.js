import React, { useContext } from "react";
import Liste from "./List";
import { Daten } from "../Daten";

function ViewWeeks() {
  const { weeks } = useContext(Daten);
  return (
    <>
      <div className="übersicht-übersicht">
        <h3 className="titel">
          {weeks.length < 1
            ? "Lege dein Berichtsheft an"
            : ` Deine Berichtshefte:`}
        </h3>
        <Liste />
      </div>
    </>
  );
}

export default ViewWeeks;
