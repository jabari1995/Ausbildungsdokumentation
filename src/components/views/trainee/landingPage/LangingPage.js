import React, { Component } from "react";
import { Daten } from "../Daten";

class LangingPage extends Component {
  static contextType = Daten;

  render() {
    return (
      <>
        <div className="row justify-content-between reason-berichtsheft">
          <div className="col-md-6   report-col">
            {" "}
            <h3>Wozu gibt es das Berichtsheft?</h3>
            Eine deiner Pflichten als Auszubildender ist es, ein Berichtsheft zu
            führen. In diesem dokumentierst du alles, was du während der
            Ausbildung gemacht und gelernt hast. Auf diese Weise kann
            festgestellt werden, ob du ordnungsgemäß ausgebildet wurdest. Dein
            Berichtsheft wird zwar nicht benotet, aber es dient als
            Ausbildungsnachweis für die IHK.
          </div>

          <div className="col-md-6   report-col">
            {" "}
            <h3>Wie schreibt man das Berichtsheft?</h3>
            Den Ausbildungsnachweis führst du entweder täglich oder wöchentlich.
            Die Form ist dabei nicht fest vorgeschrieben, trotzdem musst du
            einige Mindestanforderungen beachten:
            <div className="test">
              <li>
                Jedes Blatt muss mit deinem Namen, dem Ausbildungsjahr sowie dem
                Berichtszeitraum versehen sein.
              </li>{" "}
              <li>
                Du solltest nicht nur deine Tätigkeiten im Betrieb beschreiben,
                sondern auch alle Einweisungen, Schulungen und betrieblichen
                Unterricht vermerken.
              </li>
              <li>
                Die Themen des Berufsschulunterrichts müssen auch im
                Berichtsheft vermerkt werden.
              </li>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LangingPage;
