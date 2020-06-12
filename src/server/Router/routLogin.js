const stream = require("stream");

const express = require("express");
// const { MongoClient, ObjectID } = require("mongodb");

const router = express.Router();

router.get("/export/:id", async (req, res) => {
  console.log("daten: ", req.params.id);
  let Client;
  try {
    client = await MongoClient.connect(url);
    const dbd = client.db(wochen);
    const col = await dbd.collection("wochen");
    const {
      data: { wochenData },
    } = await col.findOne({ _id: new ObjectID(req.params.id) });
    const result = wochenData;

    console.log(JSON.stringify(result));
    const data = Object.keys(result)
      .filter((day) => day !== "startDatum" && day !== "endDatum")
      .flatMap((day) => {
        const value = result[day];

        return [
          {
            h3: day,
          },
          {
            p: value.replace(/<.*?>/g, ""),
          },
        ];
      });

    const markdown = json2md([
      { h1: "Taetigkeitsnachweis" },
      { h2: "Zeitraum:" + result.startDatum + " - " + result.endDatum },
      ...data,
    ]);

    // res.end(markdown);

    markdownpdf()
      .from.string(markdown)
      .to.buffer(function (er, pdf) {
        const readStream = new stream.PassThrough();
        readStream.end(pdf);

        res.set("Content-disposition", "attachment; filename=" + "export.pdf");
        res.set("Content-Type", "application/pdf");
        res.set("Content-Length", pdf.length);

        readStream.pipe(res);
      });
  } catch (err) {
    console.log(err.stack);
  }
});

// const url = "mongodb://localhost:27017";
// const dbName = "anmeldung";
// const wochen = "wochenDatenbank";

// (async () => {
//   client = await MongoClient.connect(url);
//   const db = client.db(dbName);
//   col = await db.collection("usertable");
// })();

// async function getUser(Name, Pass) {
//   const result = await col.find({ Name, Pass }).toArray();

//   if (result.length === 1) {
//     return result[0];
//   }
// }

// router.post("/login", async (req, res) => {
//   const result = await getUser(req.body.benutzername, req.body.Password);

//   if (result) {
//     if (result.name !== "Ausbilder") {
//       res.cookie("mysession", result._id, { maxAge: 900000, httpOnly: false });

//       res.redirect(302, "http://localhost:3000/azubi");
//     } else {
//       res.cookie("Ausbilder", result._id, { maxAge: 900000, httpOnly: false });
//       res.redirect(302, "http://localhost:3000/ausbilder");
//     }
//   } else {
//     res.redirect(302, "http://localhost:3000/ErrorPage");
//   }
// });

// router.post("/logout", async (req, res) => {
//   // console.log("req.body: ", req.body);

//   res.clearCookie("mysession");
//   res.clearCookie("Ausbilder");
//   res.redirect(302, "http://localhost:3000");
// });

// router.get("/daten", async (req, res) => {
//   let foundCookie = "mysession=j%3A%22" + req.cookies.mysession + "%22";
//   // console.log("daten: ", req.cookies.mysession);
//   // console.log("new test: ", test);

//   try {
//     const dbd = client.db(wochen);
//     const col = await dbd.collection("wochen");
//     const result = await col.find({ "data.userID": foundCookie }).toArray();
//     // const result = await col.find().toArray();
//     res.json(result);
//   } catch (err) {
//     console.log(err.stack);
//   }
// });

// router.post("/daten", async (req, res) => {
//   console.log("date: ", req.body);
//   try {
//     const dbd = client.db(wochen);

//     const response = await dbd.collection("wochen").insertOne(req.body);

//     console.log(response.insertedId);
//     res.json(response.insertedId);
//   } catch (err) {
//     console.log(err.stack);
//     res.status(500);
//     res.json({ error: "problem saving data" });
//   }
// });

module.exports = router;
