import React from 'react';
import classes from './card.module.scss';

function OptionCard(props) {
    const {options} =props;

    return (
        <ul className={classes.list}>
            {options.map((option)=>(
                <li>{option}</li>
            ))}
        </ul>
    );
}

export default OptionCard;