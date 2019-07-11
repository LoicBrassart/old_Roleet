import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { api } from "../conf";
import "./styles/Scenarii.scss";
import Title from "../components/Title";
import Scenario from "../components/Scenario";

const Scenarii = ({ loggedUserData, isLoggedIn }) => {
  // Replaces state
  const [scenariiData, setScenariiData] = useState([]);

  // Replaces componentDidMount and componentDidUpdate
  useEffect(() => {
    api
      .get("/scenario")
      .then(({ data }) => {
        setScenariiData(data);
      })
      .catch(err => {
        console.log("couldn't fetch: " + err);
      });
  }, []); // <- This empty array disables automatic updates

  return (
    <div className="Scenarii">
      <Title label="Scenarii" />
      <div>
        <main>
          {scenariiData.map((scenario, i) => {
            let locked;
            // If I'm not logged in, every Scenario is locked ;
            if (!isLoggedIn) locked = true;
            // If I'm logged in, the Scenario is locked if my id isn't among the
            // "readers" of said Scenario
            else {
              locked = scenario.readers.indexOf(loggedUserData._id) === -1;
            }
            return <Scenario key={i} scenData={scenario} locked={locked} />;
          })}
        </main>
      </div>
    </div>
  );
};
const mapStateToProps = store => ({
  loggedUserToken: store.user.token,
  loggedUserData: store.user.data,
  isLoggedIn: store.user.isLoggedIn
});
export default connect(mapStateToProps)(Scenarii);
