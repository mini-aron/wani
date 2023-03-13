import React,{useEffect,useState,Component} from "react";
import DayToonList from './DaytoonListDetail';
import Day from "./DaytoonList.module.css";
function DaytoonList(){

  return(
      <div>
        <h2 style={{color:"green"}}>naver</h2>
        <DayToonList service="naver"/>
        <h2>kakao</h2>
        <DayToonList service="kakao"/>
      </div>
  )
}
export default DaytoonList;