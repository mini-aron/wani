import axios from "axios";
import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Toon from "./ToonList.module.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
export default function ToonList({
  searchSwitch,
  searchKey,
  service,
  page,
  perPage,
  updateDay,
}) {
  let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  let day2 = ["월", "화", "수", "목", "금", "토", "일"];
  const [data, setData] = useState([]);
  const [switchs, setSwitchs] = useState(false);
  const [maxpage, setMaxpage] = useState(100);
  const [props, setProps] = useState({
    searchSwitch: searchSwitch,
    searchKey: searchKey,
    service: service,
    page: page,
    perPage: perPage,
    updateDay: updateDay,
  });
  const backPage = () => {
    if (props.page > 0) setProps({ ...props, page: props.page - 1 });
  };
  const nextPage = () => {
    //maxpage구현해야함
    if (props.page + 1 < maxpage) {
      setProps({ ...props, page: props.page + 1 });
    }
  };
  console.log(searchSwitch, searchKey, service, page, perPage, updateDay);
  useEffect(() => {});
  useEffect(() => {
    if (searchSwitch) {
      axios
        .get(
          `https://korea-webtoon-api.herokuapp.com/search?keyword=${searchKey}`
        )
        .then((res) => {
          setData(res.data.webtoons);
          //   changeSetSearchKey(null, false);
          setSwitchs(true);
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
          `https://korea-webtoon-api.herokuapp.com/?perPage=${props.perPage}&page=${props.page}&service=${props.service}&updateDay=${props.updateDay}`
        )
        .then((res) => {
          setData(res.data.webtoons);
          console.log(
            `https://korea-webtoon-api.herokuapp.com/?perPage=${props.perPage}&page=${props.page}&service=${props.service}&updateDay=${props.updateDay}`
          );
          setSwitchs(true);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(
          `https://korea-webtoon-api.herokuapp.com/?perPage=${
            props.perPage
          }&page=${props.page + 1}&service=${service}&updateDay=${
            props.updateDay
          }`
        )
        .then((res) => {
          console.log(res.data.webtoons[0]);
          if (res.data.webtoons[0] === undefined) {
            setMaxpage(props.page + 1);
            console.log(maxpage);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [props]);
  console.log(data);
  return (
    <>
      {searchSwitch ? null : (
        <div>
          {day.map((day) => (
            <button
              key={day}
              onClick={() => {
                setProps({ ...props, updateDay: `${day}` });
                
              }}
            >
              {day}
            </button>
          ))}
          <button
            onClick={() => {
              setProps({ ...props, updateDay: "finished" });
              
            }}
          >
            완결
          </button>
          <button onClick={()=>{
            setProps({...props,service:"naver", updateDay:"naverDaily"})
          }}>매일+</button>
        </div>
      )}
      <div className={Toon.list_box}>
        {switchs ? (
          data.map((data) => (
            <div key={data._id} className={Toon.list_innerbox}>
              <img className={Toon.list_innerbox_img} src={data.img} />
              <p>{data.title}</p>
            </div>
          ))
        ) : (
          <p>데이터 가져오는중</p>
        )}
      </div>
      {searchSwitch ? null : (
        <div className={Toon.pagination}>
          <BsArrowLeftCircle
            style={{
              color: `${props.page ? "black" : "gray"}`,
              fontSize: "2rem",
            }}
            onClick={backPage}
          />
          <p>{props.page + 1}</p>
          <BsArrowRightCircle
            style={{
              color: `${props.page + 1 < maxpage ? "black" : "gray"}`,
              fontSize: "2rem",
            }}
            onClick={nextPage}
          />
        </div>
      )}
    </>
  );
}

ToonList.defaultProps = {
  searchSwitch: false,
  searchKey: " ",
  service: "naver",
  page: 0,
  perPage: 25,
  updateDay: "mon",
};
