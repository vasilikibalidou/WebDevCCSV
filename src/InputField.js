import React from 'react';

class InputFields extends React.Component{
    render(){
        var {inputField, onChange, name} = this.props
        return(
            <div>
                <input type="number" value={inputField} id={name} onChange={(e)=>onChange(name,e.target.value)}/>
            </div>
        )
    }
}

export default InputFields