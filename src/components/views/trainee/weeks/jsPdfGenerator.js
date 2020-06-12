import jsPDF from "jspdf";
import format from "date-fns/format";
import autoTable from "jspdf-autotable";
import { addDays } from "date-fns";
const jsPdfGenerator = (week) => {
  let doc = new jsPDF("p", "pt");
  doc.setFont("courier");
  doc.setFontSize(11);
  doc.autoTable({
    body: [[""], [""]],
    theme: "plain",
  });
  doc.autoTable({
    body: [
      ["Name:", "Mohammad Younus Jabari"],
      ["Ausbildungsabteilung:", week.team],
      [
        "Datum",
        `${week.dateUrl} bis ${format(addDays(week.date, 4), "dd-MM-yyyy")}`,
      ],
      ["Tätigkeitsnachweis:"],
    ],
  });
  doc.autoTable({
    body: [[""]],
    theme: "plain",
  });

  doc.autoTable({
    styles: { fontSize: 11 },
    head: [["Tag", "Ausgeführte Arbeiten, Unterricht usw. "]],
    body: [
      ["Montag", week.days[0].writeReport],
      ["Dienstag", week.days[1].writeReport],
      ["Mittwoch", week.days[2].writeReport],
      ["Donnerstag", week.days[3].writeReport],
      ["Freitag", week.days[4].writeReport],
    ],
    theme: "grid",
  });
  doc.autoTable({
    body: [[""]],
    theme: "plain",
  });

  doc.text(
    50,
    700,
    "__________________________________________________________________________"
  );
  doc.text(50, 770, "Auszubildender");
  doc.text(250, 770, "Ausbilder");
  doc.text(380, 770, "Gesetzlicher Vertreter");

  doc.save(week.dateUrl);
};
export default jsPdfGenerator;
