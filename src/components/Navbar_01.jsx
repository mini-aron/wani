import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

import Nav1 from "./Navbar_01.module.css";
import miniRogo from "../img/miniRogo.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar_01({ changeSetSearchKey }) {
  const [pageCheck, setPageCheck] = useState("");
  const [search, setSearch] = useState("");
  const location = useLocation();
  useEffect(() => {
    setPageCheck(location.pathname);
    console.log(pageCheck);
  }, []);

  return (
    <div className={Nav1.MainBox}>
      <div className={Nav1.NavBox}>
        <div className={Nav1.div_01}>
          <Link to="/">
          <img
            className={Nav1.rogo}
            src={miniRogo}
            alt="이미지 로딩 실패"
          />
          </Link>
          <ul>
            <li className={Nav1.li1}><Link to="/">웹툰</Link></li>
            <li className={Nav1.li1}><Link to="/today_webtoon">오늘의 웹툰</Link></li>
          </ul>
        </div>
        <div className={Nav1.div_02}>
          <form
            className={Nav1.form1}
            onSubmit={(e) => {
              e.preventDefault();
              if (search === null || search === ' ') {
              
               console.log("search data Null send")
              }else{
                console.log("search data send")
                changeSetSearchKey(search,true)
              }
            }}
          >
            <input
              className={Nav1.input1}
              type="text"
              name="webtoonSearch"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></input>
            <button className={Nav1.button1} type="submit">
              검색!
            </button>
          </form>
        </div>
      </div>
      <div className={Nav1.line1}></div>
    </div>
  );
}
