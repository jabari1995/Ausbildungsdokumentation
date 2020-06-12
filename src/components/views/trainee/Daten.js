import React, { createContext, useState, useEffect } from "react";
import { dateToUrl } from "../../utils/DateFunctions";
import { addDays } from "date-fns";

export const Daten = createContext();
let newWeeks = null;

const devData = [
  {
    days: [
      { name: "Montag", writeReport: "•	JSX (JavaScript XML)" },
      { name: "Dienstag", writeReport: "•	Grundlagen State und Props  " },
      {
        name: "Mittwoch",
        writeReport: "•	Zulassen von Benutzereingaben (z.b in einem Textfeld)",
      },
      { name: "Donnerstag", writeReport: "•	Express Rout" },
      {
        name: "Freitag",
        writeReport: "•	Rest zwischen Front und Backend einsetzen ",
      },
    ],
    date: addDays(new Date(), -4),
    dateUrl: "",
    team: "Bauer Xcel",
  },
  {
    days: [
      { name: "Montag", writeReport: "•	Npm (Node Package Manager)" },
      {
        name: "Dienstag",
        writeReport:
          "•	Frameworks, Editoren und technische Besonderheiten von JavaScript",
      },
      {
        name: "Mittwoch",
        writeReport: "•	Bundling und Dokumentation von JavaScript",
      },
      {
        name: "Donnerstag",
        writeReport:
          "•	Entwicklungsgeschichte und Einsatzzwecke von JavaScript ",
      },
      { name: "Freitag", writeReport: "•	Node.Js Module" },
    ],
    date: addDays(new Date(), -11),
    dateUrl: "",
    team: "Microsoft Entwicklung",
  },
  {
    days: [
      { name: "Montag", writeReport: "•	SQL express Installation   " },
      {
        name: "Dienstag",
        writeReport:
          "•	Abfragen in einer Datenbank (Create, Insert, Update, Select, Where, Between, Join, Group by, Alter und Delete)",
      },
      { name: "Mittwoch", writeReport: "•	Grundlagen Report Builder " },
      { name: "Donnerstag", writeReport: "•	Bereitstellung der Reports" },
      { name: "Freitag", writeReport: "•	SQL Users Berechtigungen" },
    ],
    date: addDays(new Date(), -18),
    dateUrl: "",
    team: "SQL Datenbank",
  },
  {
    days: [
      { name: "Montag", writeReport: "•	Primitive Datentypen" },
      { name: "Dienstag", writeReport: "•	Parameterübergabe (Call by Value)" },
      { name: "Mittwoch", writeReport: "•	Klassenvariablen (Static)" },
      { name: "Donnerstag", writeReport: "•	Abstrakte Klassen/ Methoden" },
      { name: "Freitag", writeReport: "•	Properties Datei erstellen " },
    ],
    date: addDays(new Date(), -25),
    dateUrl: "",
    team: "Java",
  },
];

const prepareWeek = (week) => {
  week.dateUrl = dateToUrl(week.date); //dateToUrl is a function to change the format of Date
  return week;
};

export function requuestGetData() {
  return new Promise((resolve, reject) => {
    let dev = true;
    if (dev) {
      setTimeout(() => {
        resolve(devData.map(prepareWeek));
      }, 3000);
    }
  });
}
export function updateData(newData) {
  return new Promise((resolve, reject) => {
    let dev = true;
    if (dev) {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }
  });
}
const DatenProvider = (props) => {
  const [weeks, setWeeks] = useState([]);
  const [initialised, setInitiaalised] = useState(false);
  const [modal, setModal] = useState({
    modalShow: false,
    onCallback: undefined,
    modalText: "",
    modalType: "",
  });

  useEffect(() => {
    setWeeks([...props.data]);
  }, [props.data]);
  useEffect(() => {
    if (initialised) {
      updateData(weeks).then((ok) => {
        if (!ok) {
          console.log("Error Udate Request");
        }
      });
    }
  }, [weeks]);

  //function for delete a week
  //dateUrl = e.x. 22-2-2020
  const deleteOneWeek = (dateUrl) => {
    newWeeks = weeks.filter((item) => {
      if (item.dateUrl !== dateUrl) {
        return item;
      }
    });
    setWeeks(newWeeks);
  };

  //function for overwrite or write a week
  //data is a week-object
  //if overwrite is true, the week should be overwrite, otherwise add new week
  const changeDaten = (data, overwrite) => {
    setInitiaalised(true);
    const preparedWeek = prepareWeek(data);
    let editedWeek = null;
    if (overwrite) {
      newWeeks = weeks.filter((item) => {
        if (item.dateUrl !== preparedWeek.dateUrl) {
          return item;
        } else {
          editedWeek = preparedWeek;
        }
      });
      newWeeks.push(editedWeek);
      setWeeks(newWeeks);
    } else {
      if (weeks.length > 0) {
        setWeeks([...weeks, prepareWeek(data)]);
      } else {
        setWeeks([...weeks, prepareWeek(data)]);
      }
    }
  };

  const getDayByURlDate = (dateStr) => {
    let oneWeek = "";
    weeks.forEach((week) => {
      if (week.dateUrl === dateStr) {
        oneWeek = week;
      }
    });
    return oneWeek;
  };

  //bei eingabe des Datums prüft, ob das eingegebene Datum schon gespeichert ist
  const proofDate = (date) => {
    let dateExist = false;
    const preparedDatum = dateToUrl(date);
    weeks.forEach((week) => {
      if (week.dateUrl === preparedDatum) {
        dateExist = true;
      }
    });
    return dateExist;
  };

  return (
    <Daten.Provider
      value={{
        weeks,
        changeDaten,
        getDayByURlDate,
        deleteOneWeek,
        proofDate,
        modal,
        setModal,
      }}
    >
      {props.children}
    </Daten.Provider>
  );
};

export default DatenProvider;
