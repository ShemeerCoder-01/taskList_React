import React, { useState } from 'react';
import './Modal.css';

function Modal({ flagVal, setarr, arr, currEle, setCurrEle }) {
    let [taskName, setTaskName] = useState('');
    let [priority, setPriority] = useState('');
    let [date, setDate] = useState('');


    // function to generate unique id for each array elements 
    function keyGenerator() {
        let str = 'abcdefghijklmnopqrstuvwxyz';
        let res = '';
        for (let i = 0; i < 7; i++) {
            res += str.charAt(Math.random() * 5);
        }
        return res;
    }

    // edit function edits priority and re render the component
    function editFnc() {

        let new_arr = arr;
        let idx = -1;
        for (let i = 0; i < new_arr.length; i++) {
            if (new_arr[i].id === currEle.id) {
                idx = i;
                break;
            }
        }

        // checking weather idx is -1 or changed. if it is still -1 there is no such ele in array.
        // so add it as a new element to the array.
        if (idx === -1) {
            if (taskName.length > 12) {
                alert("TaskName : Maximum 12 characters allowed");
                return;
            }
            else if (taskName === '' || priority === '' || date === '') {
                alert("Please fill all the fields before clicking the Edit Task button");
                return;
            }
            else {
                new_arr.push({ id: keyGenerator(), Name: taskName, Priority: priority, Date: date });
                setarr(new_arr);
                flagVal(false);
                setCurrEle('');
            }
        }
        // if the idx is not equal to -1 there is an ele exist in tha array.So delete the ele first and 
        // add the changed ele as new ele to the array
        else {

            new_arr.splice(idx, 1);
            new_arr.push({ id: keyGenerator(), Name: currEle.Name, Priority: priority, Date: currEle.Date })
            setarr(new_arr);
            flagVal(false);
            setCurrEle('');

        }


    }


    // this function adds new ele to the array after conditional checks
    function clickHandler() {
        if (taskName === '' || priority === '' || date === '') {
            alert("Please fill all the fields before clicking the Add Task button");
            return;
        }
        else if (taskName.length > 12) {
            alert("TaskName : Maximum 12 characters allowed");
            return;
        }
        else {
            setarr([...arr, { id: keyGenerator(), Name: taskName, Priority: priority, Date: date }]);
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

                    <input value={currEle.Name !== '' ? currEle.Name : taskName} onChange={(e) => setTaskName(e.target.value)} type='text' placeholder='Task Name' />
                    <select onChange={(e) => setPriority(e.target.value)}>
                        <option value=''>Priority</option>
                        <option value='notStarted'>Not Started</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                    <input value={currEle.Date !== '' ? currEle.Date : date} onChange={(e) => setDate(e.target.value)} type='date' />
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




