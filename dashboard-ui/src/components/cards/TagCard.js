import React from 'react';
import classes from './card.module.scss';

function TagCard(props) {
    const {tags} = props;
    return (
        <div className={classes.tagContainer}>
            {tags.map((tag)=><span key={tag} className={classes.tag}>{tag}</span>)}
        </div>
    );
}

export default TagCard;