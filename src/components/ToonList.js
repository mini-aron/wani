import axios from "axios";
import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";

import Toon from "./ToonList.module.css";

export default function ToonList({
  searchSwitch,
  searchKey,
  service,
  page,
  perPage,
  updateDay,
  changeSetSearchKey,
}) {
  const [data, setData] = useState([]);
  const [switchs, setSwitchs] = useState(false);
  console.log(`searchSwitch:${searchSwitch}, switchs:${switchs}`);
  useEffect(() => {
    if (searchSwitch) {
      axios
        .get(
          `https://korea-webtoon-api.herokuapp.com/search?keyword=${searchKey}`
        )
        .then((res) => {
          setData(res.data.webtoons);
        //   changeSetSearchKey(null, false);
          console.log("검색성공");
        })
        .catch((err) => {
          console.log(err);
        });
    } else console.log("검색아님");
  }, [searchKey]);

  useEffect(() => {
    if (!searchSwitch) {
      axios
        .get(
          `https://korea-webtoon-api.herokuapp.com/?perPage=${perPage}&page=${page}&service=${service}&updateDay=${updateDay}`
        )
        .then((res) => {
          setData(res.data.webtoons);
          setSwitchs(true);
          
        })
        .catch((err) => {
          console.log(err);
        });

      
    }
  }, []);
  console.log(data);
  return (
    <>
      <div className={Toon.list_box}>
        {switchs ? (
          data.map((data) => (
            <div key={data._id} className={Toon.list_innerbox}>
              <img  className={Toon.list_innerbox_img} src={data.img} />
              <p>{data.title}</p>
            </div>
          ))
        ) : (
          <p>데이터 가져오는중</p>
        )}
      </div>
      <div>
        <button className={`${Toon.button} ${Toon.back_button}`}></button>
        <div>{page}</div>
        <button className={`${Toon.button} ${Toon.next_button}`}></button>
      </div>
    </>
  );
}

ToonList.defaultProps = {
  searchSwitch: false,
  searchKey: " ",
  service: "naver",
  page: 1,
  perPage: 25,
  updateDay: "mon",
};
