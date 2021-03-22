import React, { Component } from 'react'

class ClassClickButton extends Component {
    clickHandler(){
        console.log("This class button has been clicked");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>This is Class Button</button>
            </div>
        )
    }
}

export default ClassClickButton
