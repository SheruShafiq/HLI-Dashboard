import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React from "react";
import { useState } from "react";
import "./formcss.css";

function App() {
  let reponseGlobal;
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        console.log(response.access_token);
        const res = await axios.post(
          `https://content-analyticsdata.googleapis.com/v1beta/properties/307948141:runRealtimeReport?alt=json`,

          {
            metrics: [{ name: "activeUsers" }],
          },
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        if (res.data.rows["0"].metricValues["0"].value == null) {
          res.data.rows["0"].metricValues["0"].value = 0;
        }
        reponseGlobal = response;

        setactiveUsers(res.data.rows["0"].metricValues["0"].value);
        setloggedin(true);
        const interval = setInterval(function () {
          fetch();
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    },
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });

  async function fetch() {
    try {
      const res = await axios.post(
        `https://content-analyticsdata.googleapis.com/v1beta/properties/${gaID}:runRealtimeReport?alt=json`,

        {
          metrics: [{ name: "activeUsers" }],
        },
        {
          headers: {
            Authorization: `Bearer ${reponseGlobal.access_token}`,
          },
        }
      );
      if (res.data.rows["0"].metricValues["0"].value == null) {
        res.data.rows["0"].metricValues["0"].value = 0;
      }
      setactiveUsers(res.data.rows["0"].metricValues["0"].value);
      console.log(res.data.rows["0"].metricValues["0"].value);
    } catch (err) {
      console.log("something died");
    }
  }

  const [gaID, setgaId] = useState("");
  const [activeUsers, setactiveUsers] = useState("");
  const [name, setName] = useState("");
  const [loggedin, setloggedin] = useState("");

  return (
    <div className="form">
      {!loggedin && (
        <div className="Appheader">
          <input
            placeholder="GA4 ID"
            name="gaID"
            type="gaID"
            onChange={(event) => setgaId(event.target.value)}
            value={gaID}
            className="inputFields"
          />
          <input
            placeholder="Project Name (any)"
            name="name"
            type="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
            className="inputFields"
          />
          <button id="submit" onClick={login}>
            Continue with google
          </button>
        </div>
      )}
      {loggedin && (
        <div id="results">
          <p>{name}</p>

          <p id="total">{activeUsers}</p>
        </div>
      )}
    </div>
  );
}
export default App;
