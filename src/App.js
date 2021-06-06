import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./components/Footer";
import HistoryPage from "./pages/HistoryPage";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/history">
            <HistoryPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
