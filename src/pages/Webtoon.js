import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "../components/Navbar_01";
import ToonList from "../components/ToonList";
// 네이버&카카오
// 요일별

export default function Webtoon() {
  const [list, setList] = useState({
    searchKey: null,
    searchSwitch: false,
  });

  return (
    <div>
      <Navbar
        changeSetSearchKey={(key, value) => {
          setList({ searchKey: `${key}`, searchSwitch: `${value}` });
          console.log("change search key in Navbar_1");
        }}
      />
      {console.log(list)}
      <ToonList
        searchSwitch={list.searchSwitch}
        searchKey={list.searchKey}
        changeSetSearchKey={(key, value) => {
          setList({ searchKey: `${key}`, searchSwitch: `${value}` });
          console.log("change search key in toonlist");
        }}
      />
    </div>
  );
}
