import "./websitedata.css";
import jQuery from "jquery";
import plus from "../assets/plus-sign-svgrepo-com.svg";
import React, { useState } from "react";
import Form from "./form";
import FormGa4 from "./formga4";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Websitedata = () => {
  const [isShownga4, setIsShownga4] = useState(false);
  const [isShowngua, setIsShownua] = useState(false);
  const [add, setAdd] = useState(true);
  const handleClickGa4 = (event) => {
    setIsShownga4(isShownga4 + 1);
    if (isShownga4 == 2) {
      setAdd(false);
    }
  };
  const handleClickUa = (event) => {
    setIsShownua(isShowngua + 1);
    if (isShowngua == 2) {
      setAdd(false);
    }
  };

  return (
    <div className="wrapper">
      {isShownga4 > 0 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <FormGa4 />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShownga4 > 1 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <FormGa4 />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShownga4 > 2 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <FormGa4 />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShownga4 > 3 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <FormGa4 />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShowngua > 0 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <Form />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShowngua > 1 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <Form />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShowngua > 2 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <Form />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {isShowngua > 3 && (
        <div id="form">
          {" "}
          <GoogleOAuthProvider clientId="328533374442-m8iju91mq7ss118pui8jj6qs1dk4tpqs.apps.googleusercontent.com">
            <Form />{" "}
          </GoogleOAuthProvider>{" "}
        </div>
      )}
      {add && (
        <div id="addwid">
          <button id="search-button" onClick={handleClickUa}>
            <h1>UA</h1>
            <img src={plus} id="plusIco" />
          </button>
          <button id="search-button" onClick={handleClickGa4}>
            <h1>GA4</h1>
            <img src={plus} id="plusIco" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Websitedata;
