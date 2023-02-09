import React, { Component } from 'react'
const TextFields =(props)=>{
return ( <div className="grid">
<div>
<input className={`padAll ${props.err.name?"error":""}`} id='name' type="text" value={props.value?props.value.name:""} onChange={props.inputChange} placeholder='Name' />
</div>
<div>
<input className={`padAll ${props.err.email?"error":""}`} id='email' type="email" value={props.value?props.value.email:""} onChange={props.inputChange} placeholder='Email' />
</div>
<div>
<input className={`padAll ${props.err.mobile?"error":""}`} id='mobile' type="number" value={props.value?props.value.mobile:""} onChange={props.inputChange} placeholder='Mobile' />
</div>
<div>
<input className={`padAll ${props.err.pan?"error":""}`} id='pan' type="text" value={props.value?props.value.pan:""} onChange={props.inputChange} placeholder='Pan' /> 
</div>
<button onClick={props.addRow}>ADD ROW</button>
</div>)
}

export default TextFields;