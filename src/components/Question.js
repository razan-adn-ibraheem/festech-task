import React from 'react';

export const Question = (props) => {
    console.log(props);
    const { text, options}= props;

    return (
        <div >
            <p> {text}</p>
            
            
        </div>
            


    );
};