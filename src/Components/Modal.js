import React, { useState } from 'react';
import './Modal.css';

function Modal({ flagVal, setarr, arr, currEle }) {
    let [taskName, setTaskName] = useState('');
    let [priority, setPriority] = useState('');
    let [date, setDate] = useState('');
    
    console.log(priority);
    console.log(currEle.id - 1);

    function keyGenerator() {
        let str = 'abcdefghijklmnopqrstuvwxyz';
        let res = '';
        for (let i = 0; i < 7; i++) {
          res += str.charAt(Math.random() * 5);
        }
        return res;
      }

    function editFnc() {

        let new_arr = arr;
        let idx = -1;
        for (let i = 0; i < new_arr.length; i++) {
            if (new_arr[i].id === currEle.id) {
                console.log("arr id",new_arr[i].id ,"currele id",currEle.id);
                idx = i;
                // setCurr(i);
                break;
            }
        }
        console.log("idx is",idx,"curr is",currEle.id);
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
            }
        }
        else {
            // new_arr.splice(idx, 1);
            //  idx = curr !== -1?curr:idx;
            if (taskName.length > 12) {
                alert("TaskName : Maximum 12 characters allowed");
                return
            }
            else if (taskName === '' || priority === '' || date === '') {
                alert("Please fill all the fields before clicking the Edit Task button");
                return
            }
            else {
                new_arr.splice(idx, 1);
                new_arr.push({ id: keyGenerator(), Name: taskName, Priority: priority, Date: date })
                setarr(new_arr);
                flagVal(false);
            }
        }
        // flagVal(false);

    }



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




