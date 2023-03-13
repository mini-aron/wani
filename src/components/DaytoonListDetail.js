import React, { useEffect, useState, Component } from "react";
import Day from "./DaytoonListDetail.module.css";
import Toon from "./ToonList.module.css";
import axios from "axios";
import { BsArrowRightCircle , BsArrowLeftCircle} from "react-icons/bs";



function DaytoonListDetail({ service, page }) {
  let time = new Date(); //현재 날짜와 시간
  let day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const [data, setData] = useState([]);
  const [switchs, setSwitch] = useState(false);
  const [props, setProps] = useState({
    service: service,
    page: 0,
    perPage: 5,
    updateDay: day[time.getDay()],
  });
  const nextPage = () => {
    if(props.page<4)
    setProps({...props,page:(props.page+1)})
  };
  const backPage = () => {
    if(props.page>0)
    setProps({...props,page:(props.page-1)})
  };
 


  useEffect(() => {
    axios
      .get(
        `https://korea-webtoon-api.herokuapp.com/?perPage=${props.perPage}&page=${props.page}&service=${props.service}&updateDay=${props.updateDay}`
      )
      .then((res) => {
        setData(res.data.webtoons);
        setSwitch(true);
        console.log(`https://korea-webtoon-api.herokuapp.com/?perPage=${props.perPage}&page=${props.page}&service=${props.service}&updateDay=${props.updateDay}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.page]);

  return (
    <div className={Toon.list_box}>
    <BsArrowLeftCircle style={{color:`${props.page?"black":"gray"}`,fontSize:"2rem"}} onClick={backPage}/>
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
    <BsArrowRightCircle style={{color:`${props.page<4?"black":"gray"}`,fontSize:"2rem"}} onClick={nextPage}/>
    </div>
  );
}

export default DaytoonListDetail;
