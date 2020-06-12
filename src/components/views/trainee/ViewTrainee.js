import React, { useContext } from "react";
import ViewWeeks from "./weeks/ViewWeeks";
import { Switch, Route } from "react-router-dom";
import ViewWriteReport from "./writeReport/ViewWriteReport";
import Navbar from "../../elements/header/Navbar";
import LandingPage from "./landingPage/LangingPage";
import Logout from "../../elements/logout/Logout";
import HomeIcon from "../../elements/icons/HomeIcon";
import ViewOneWeek from "../../views/trainee/weeks/ViewOneWeek";
import Footer from "../../elements/footer/Footer";
import { Daten } from "./Daten";
import Alert from "../../elements/alert/Alert";

function ViewTrainee() {
  const { modal, setModal } = useContext(Daten);
  return (
    <>
      <Navbar
        Home="HOME"
        Wochen="ÜBERSICHT"
        Berichtsheft="BERICHTSHEFT ANLEGEN"
        LogoLink="/azubi"
        logout={<Logout />}
        icon={<HomeIcon />}
      />
      <div className="banner"></div>
      <div className="contentContainer">
        <div className="container my-container">
          <Alert
            {...modal}
            cb={() => {
              setModal({ modalShow: false });
            }}
          />

          <Switch>
            <Route exact path="/azubi" component={LandingPage} />
            <Route exact path="/azubi/weeks" component={ViewWeeks} />
            <Route exact path="/azubi/weeks/new" component={ViewWriteReport} />
            <Route path="/azubi/week/:id" component={ViewOneWeek} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewTrainee;
