import React,{useEffect,useState,Component} from "react";
import DayToonList from './DaytoonListDetail';
import Day from './DaytoonList.module.css';
function DaytoonList(){

  return(
      <div>
        <h2 style={{color:"green"}}className={Day.Name}>naver</h2>
      <div className={Day.line}></div>
        <DayToonList className={Day.button} service="naver"/>
        
        <h2 className={Day.Name}>kakao</h2>
        <div className={Day.line}></div>
        <DayToonList service="kakao"/>
        
      </div>
  )
}
export default DaytoonList;