import React,{useState,useEffect} from "react";
import Navbar from "../components/Navbar_01";
import DayToonList from '../components/DaytoonList';
import ToonList from '../components/ToonList';

export default function Today() {
  const [list, setList] = useState({
    searchKey: null,
    searchSwitch: false,
  });

  return (
    <>
      <Navbar
        changeSetSearchKey={(key, value) => {
          setList({ searchKey: `${key}`, searchSwitch: `${value}` });
          console.log("change search key in Navbar_1");
        }}
      />
      {list.searchKey
      ?<ToonList
      searchSwitch={list.searchSwitch}
      searchKey={list.searchKey}
      changeSetSearchKey={(key, value) => {
        setList({ searchKey: `${key}`, searchSwitch: `${value}` });
        console.log("change search key in toonlist");
      }}/>
      :<DayToonList/>
      }
      
    </>
  );
}
