import React from 'react';
import "./App.css";

// import Button from '@material-ui/core/button';

const Note = (props)=>{


    return <div key={props.id}>
        <h1 className="task_heading">{props.title}</h1>
        <p className="task_desc">{props.desc}</p>
    </div>
};
export default Note;