import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "../components/Navbar_01";
import ToonList from "../components/ToonList";
import Setbar from "../components/SettingBar";
import Page from './page.module.css';
// 네이버&카카오
// 요일별


export default function Webtoon() {

  let time = new Date(); //현재 날짜와 시간
  let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [list, setList] = useState({
    searchKey: null,
    searchSwitch: false,
  });
  const [setting,setSetting] = useState({
    service:'naver',
    updateDay:`${day[time.getDay]}`
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
      <Setbar service={setting.service} updateDay={setting.updateDay} setList={(ser,update) => {
    setList({
      service:`${ser}`,
    updateDay:`${update}`
    })
  }} />
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
