import React from 'react';

const Button = (props) => {
    console.log(props.style);
    return(<button className={"btn btn-"+props.style} type={props.type} onClick={props.action}>{props.title}</button>)
}

export default Button;