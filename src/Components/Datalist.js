import React,{ useEffect, useState } from 'react';
import './Datalist.css';
import { FaEdit, FaTimes } from "react-icons/fa";

function Datalist({ status, arr,setArr, setCurrEle }) {

  let [deleteStat,setDeleteStat] = useState(false);

  // function to generate unique key for each elements
  function keyGenerator() {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';
    for (let i = 0; i < 7; i++) {
      res += str.charAt(Math.random() * 5);
    }
    return res;
  }
  // here useEffect used for re-rendering the component after deleting an element.
  useEffect(()=>{
    setDeleteStat(false);
  },[deleteStat]);
 
  // function to delete the selected element 
  function deleteItem(Id){
    let new_arr = arr;
    let idx=-1;
    for(let i = 0; i < new_arr.length; i++){
      if(new_arr[i].id === Id){
        idx = i;
        break;
      }
    }
    new_arr.splice(idx,1);
    setArr(new_arr);
    setDeleteStat(true);
  }

  return (
    <div className='displayArea'>
      <div className='left'>
        <h1>Not Started</h1>
        <div className='list'>
          {arr.map((obj) => {
            if (obj.Priority === 'notStarted') {
              return (<div key={keyGenerator()} className='item notStart'>
                <p>{obj.Name}</p>
                <p>{obj.Date}</p>
                <div className='icons'>
                  <span onClick={() => {
                    status(true);
                    setCurrEle(obj);
                  }} className='icon'><FaEdit /></span>
                  <span className='icon' onClick={()=>deleteItem(obj.id)}><FaTimes /></span>
                </div>
              </div>)
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className='mid'>
        <h1>In Progress</h1>
        <div className='list'>
          {arr.map((obj) => {
            if (obj.Priority === 'inProgress') {
              return (<div key={keyGenerator()} className='item inProgress'>
                <p>{obj.Name}</p>
                <p>{obj.Date}</p>
                <div className='icons'>
                  <span onClick={() => {
                    status(true);
                    setCurrEle(obj);
                  }} className='icon'><FaEdit /></span>
                  <span className='icon' onClick={()=>deleteItem(obj.id)}><FaTimes /></span>
                </div>
              </div>)
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className='right'>
        <h1>Completed</h1>
        <div className='list'>
          {arr.map((obj) => {
            if (obj.Priority === 'completed') {
              return (<div key={keyGenerator()} className='item completed'>
                <p>{obj.Name}</p>
                <p>{obj.Date}</p>
                <div className='icons'>
                  <span onClick={() => {
                    status(true);
                    setCurrEle(obj);
                  }} className='icon'><FaEdit /></span>
                  <span className='icon' onClick={()=>deleteItem(obj.id)}><FaTimes /></span>
                </div>
              </div>)
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Datalist;




