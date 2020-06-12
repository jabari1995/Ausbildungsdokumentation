import React, { useEffect, useState } from "react";
import ViewHome from "./components/views/home/ViewHome";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ViewTrainee from "./components/views/trainee/ViewTrainee";
import DatenProvider, {
  requuestGetData,
} from "./components/views/trainee/Daten";

function App() {
  return (
    <div>
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={ViewHome} />
            <Route path="/azubi" component={ViewAppData} />
          </Switch>
        </Router>
      </>
    </div>
  );
}

function ViewAppData() {
  const [weeks, setWeeks] = useState([]);
  const [complete, setComplete] = useState(false);
  useEffect(() => {
    requuestGetData().then((result) => {
      setWeeks(result);
      setComplete(true);
    });
  }, []);
  return (
    <div>
      {!complete && (
        <>
          <div className="app-preloader">
            <div className="spinner-border m-10" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="loading">Loading</div>
          </div>
        </>
      )}
      {complete && (
        <>
          <DatenProvider data={weeks} complete={complete}>
            <Router>
              <ViewTrainee />
            </Router>
          </DatenProvider>
        </>
      )}
    </div>
  );
}

export default App;
