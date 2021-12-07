import React from 'react';

const CalcButton = (props) => {
    console.log('props: ', props);
    const { value, onClick = (e)=>{}, size = 4} = props;    

    return(<div className={`col-xs-${size}`}>
        <button value={value} type="button" onClick={(e)=>{onClick(e)}} className="btn">{value}</button>
    </div>);
}

export default CalcButton;