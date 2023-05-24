import React, {  useState } from 'react';
import './Modal.css';

function Modal({ flagVal,setarr,arr,currEle}) {
    let [taskName, setTaskName] = useState('');
    let [priority, setPriority] = useState('');
    let [date, setDate] = useState('');
    // let [currPriority, setCurrPriority] = useState(currEle.Priority);
    // console.log(currPriority);
    console.log(priority);
    console.log(currEle.id - 1);

    function editFnc(){
        
        let new_arr = arr;
        let idx=-1;
        for(let i = 0; i < new_arr.length; i++){
            if(new_arr[i].id === currEle.id){
                idx = i;
                break;
            }
        }
        if(idx === -1){
            new_arr.push({ id: new_arr.length + 1, Name: taskName, Priority: priority, Date: date });
            setarr(new_arr);
        }
        else{
        new_arr.splice(idx,1);
        new_arr.push({ id: new_arr.length + 1, Name: taskName, Priority: priority, Date: date })
        setarr(new_arr);
        }
        flagVal(false);
        
    }

   

    function clickHandler(){
        if(taskName === '' || priority === '' || date === ''){
            alert("Please fill all the fields before clicking the Add Task button");
            return;
        }
        else if(taskName.length > 13){
            alert("TaskName : Maximum 12 characters allowed");
            return;
        }
        else{
        setarr([...arr,{ id: arr.length + 1, Name: taskName, Priority: priority, Date: date }]);
        flagVal(false);
        }
    }


    return (
        <div className='main'>
            <div className='inputArea'>
                <div className='header'>
                    <h1 className='heading'>To-Do List</h1>
                    <i onClick={() => flagVal(false)} className='fa fa-times'></i>
                </div>

                <hr />
                <div className='form'>
                    
                    <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type='text' placeholder='Task Name' />
                    <select onChange={(e) => setPriority(e.target.value)}>
                        <option value=''>Priority</option>
                        <option value='notStarted'>Not Started</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                    <input value={date} onChange={(e) => setDate(e.target.value)} type='date' />
                    <div className='btns'>
                    <button onClick={clickHandler}>Add Task</button>
                    <button onClick={editFnc}>Edit Task</button>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Modal;




  