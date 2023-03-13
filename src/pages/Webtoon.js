import React, { useEffect } from "react";
import { useState } from "react";

import Navbar from "../components/Navbar_01";
import ToonList from "../components/ToonList";
import Setbar from "../components/SettingBar";
import Page from "./page.module.css";
// 네이버&카카오
// 요일별

export default function Webtoon() {
  let time = new Date(); //현재 날짜와 시간
  let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [list, setList] = useState({
    searchKey: null,
    searchSwitch: false,
  });
  const [setting, setSetting] = useState({
    service: "naver",
    updateDay: `${day[time.getDay() - 1]}`,
    sW:false
  });
 

  return (
    <div>
      <Navbar
        changeSetSearchKey={(key, value) => {
          setList({ searchKey: `${key}`, searchSwitch: `${value}` });
        }}
      />
      {console.log(list)}
      
      <ToonList
        searchSwitch={list.searchSwitch}
        searchKey={list.searchKey}
        service={setting.service}
        updateDay={setting.updateDay}
        settingSW={setting.sW}
        changeSetSearchKey={(key, value) => {
          setList({ searchKey: `${key}`, searchSwitch: `${value}` });
        }}
        settingFun={()=>{
          setSetting({...setting,settingSW:false})
        }}
      />
    </div>
  );
}
