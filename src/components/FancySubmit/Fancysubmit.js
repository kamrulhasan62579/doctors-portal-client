import React from 'react';
import "./FancySubmit.css"

const Fancysubmit = (props) => {
    return (
         <div className="buttonSubmit">
            <div class="wrap">
            {
                props.children
            }
            </div>
        </div>
    );
};

export default Fancysubmit;