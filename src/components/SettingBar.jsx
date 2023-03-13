import React, { useEffect, useState } from "react";
import Set from "./SettingList.module.css";

export default function SettingLists({ service, updateDay, setList }) {
  let day = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
  ];
  let day2 = ["월", "화", "수", "목", "금", "토", "일"];
  const [setting,setSetting] = useState({
    service:'naver',
    updateDay:'mon'
  })

  return (
    <div>
      {day.map((day) => (
        <button key={day} onClick={()=> {
          setSetting({...setting,updateDay:`${day}`})
          setList(setting.service,`${day}`);
        }}>{day}</button>
      ))}
      <button onClick={()=> {
        setSetting({...setting,updateDay:"finished"})
        setList(setting.service,setting.updateDay);
      }}>완결</button>
      <button>매일+</button>
    </div>
  );
}
