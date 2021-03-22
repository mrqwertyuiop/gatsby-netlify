import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("button clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>This is Function CLick Button</button>
        </div>
    )
}

export default FunctionClick
