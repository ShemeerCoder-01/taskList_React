import React, { useState } from 'react';
import './App.css';
import './Components/Modal';
import Modal from './Components/Modal';
import Datalist from './Components/Datalist';


function App() {
  let [flag, setFlag] = useState(false);
  let [arr,setArr] = useState([]);
  // let [notstartArr,setNotstartArr] = useState([]);
  // let [progressArr,setProgressArr] = useState([]);
  // let [completedArr,setcompletedArr] = useState([]);
  let [currEle,setCurrEle] = useState('');

  console.log("arr is",arr);
  
  // console.log("start",notstartArr);
  // console.log("prog",progressArr);
  // console.log("comp",completedArr);

  return (
    <div>
      <button onClick={() => { setFlag(!flag) }} className='btn'>Cick Here</button>
      {flag ? <Modal currEle={currEle} flagVal={setFlag} arr={arr} setarr={setArr}></Modal> : null}
      <Datalist setCurrEle={setCurrEle} status={setFlag} arr={arr} setArr={setArr}></Datalist>
    </div>
  );
}

export default App;
