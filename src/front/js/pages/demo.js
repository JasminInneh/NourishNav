import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Metrics from "./metrics";
import { Context } from "../store/appContext";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  return <div className="container"></div>;
};
