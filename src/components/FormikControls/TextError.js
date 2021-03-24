import React from 'react';
function TextError(props){
    const { label, name, ...rest}= props;
    return(
        <div className="error">
            {props.children}
        </div>
    )
}

export default TextError;