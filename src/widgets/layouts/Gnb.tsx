// Gnb.jsx
import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "./commonContext";

const BRAND_LIST = {
  ORGA: "orga",
  PULMUONE: "pulmuone",
  GREENJUICE: "greenjuice",
};

const DISPLAY_ID = {
  greenjuice: ["GJ", "New", "Event", "Guide"],
};

function Gnb() {
  const { gnbData, mallName, goToUrl } = useContext(CommonContext);

  return (
    <nav className={`gnb-container ${mallName}`}>
      <ul>
        {gnbData &&
          gnbData.map((gnb, idx) => (
            <li key={`gnb-${idx}`}>
              <a href={goToUrl(gnb.linkUrlPc, idx)}>{gnb.titleName}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
}

export default Gnb;
