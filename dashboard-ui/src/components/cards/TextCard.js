import React from 'react';
import classes from './card.module.scss';

function TextCard(props) {
    const {text}=props
    return (
        <div className={classes.textContaier}>
           {text} 
        </div>
    );
}

export default TextCard;