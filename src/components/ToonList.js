import axios from 'axios'
import React, { Component } from 'react'
import { useState } from "react";
import { useEffect } from "react";

import Toon from "./ToonList.module.css";



export default function ToonList({searchSwitch,searchKey,service,page,perPage,updateDay}){
    const [data,setData] = useState();
    const [switchs,setSwitchs] = useState(false);
    useEffect(()=>{
       if(searchSwitch&&searchKey===" "&&searchKey){
        axios.get(`https://korea-webtoon-api.herokuapp.com/search?keyword=${searchKey}`)
        .then((res)=>{
            setData(res.data.webtoons)
            setSwitchs(true)
            console.log("검색성공")
        })
        .then((err) =>{
            console.log(err)
        })
       }else{
        axios.get(`https://korea-webtoon-api.herokuapp.com/?perPage=${perPage}&page=${page}&service=${service}&updateDay=${updateDay}`)
        .then((res)=>{
       
            setData(res.data.webtoons)
            setSwitchs(true)
            console.log(`https://korea-webtoon-api.herokuapp.com/?perPage=${perPage}&page=${page}&service=${service}&updateDay=${updateDay}`);
        
        })
        .then((err)=>{
            console.log(err)
       })
       }
    },[])
  
    return (
        <>
      <div className={Toon.list_box}>{
        switchs?
        data.map(data => (
            
            <div key={data._id} className={Toon.list_innerbox}>
                <img src={data.img}/> 
                <p>{data.title}</p>
            </div>
            
        ))
        :
        <p>데이터 가져오는중</p>
        }</div>{data&&console.log(data.length)}
        </>
    )
}

ToonList.defaultProps = {
    searchSwitch: false,
    searchKey:" ",
    service :"naver",
    page:1,
    perPage:25,
    updateDay:"mon"
}