import React, { useState } from 'react';
import Input from '@material-ui/core/input';
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Note from './Notes';
import DeleteIcon from '@material-ui/icons/Delete';

const InputField = () => {
    let [data, setData] = useState({
        input: '',
        task: '',
        tasks: [],
    });

    function inputChange(event) {
        let name = event.target.name;
        let value = event.target.value;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    function noteClicked() {
        if (data.input === '') {
            alert("Add a Task First!")
        } else {
            setData((prev) => {
                return {
                    input: '',
                    task: '',
                    tasks: [...prev.tasks, [prev.input, prev.task]]
                }
            });

        }
    };


    const Btn = (props) => {
        function delTask() {
            setData((prev) => {
                return {
                    ...prev,
                    tasks: prev.tasks.filter((ele, index) => {
                        return index !== props.id;
                    })
                };
            });
        };
        return <>
            <Button onClick={delTask} style={{ width: '30px', height: '60px', borderRadius: "50%", position: "absolute", bottom: '20px', right: '20px' }}>
                <DeleteIcon style={{ fill: 'black' }} />
            </Button>
        </>
    }

    return <>
        <div className='inputBox'>
            <label style={{ fontFamily: "'Raleway', sans-serif", padding: '10px' }}>Write Your Tasks here, lol</label>
            <div className="inputField">
                <Input value={data.input} name='input' autoComplete='off' placeholder='Title' onChange={inputChange} id='mainInput' />
                <TextField value={data.task} name='task' autoComplete='off' onChange={inputChange} rows='5' rowsMax='10' label="Description" />
                <Button onClick={noteClicked}><AddIcon /></Button>
            </div>
        </div>
        <div className="tasks">
            {data.tasks.map((ele, index) => {
                return <div key={index} className='task'>
                    <Note title={ele[0]} desc={ele[1]} key={index} id={index} />
                    <Btn id={index} />
                </div>
            })}
        </div>
    </>
};
export default InputField;