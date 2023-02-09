import React, { Component } from 'react'
const TextFields =(props)=>{
return ( <div className="grid">
<div>
<input className='padAll' id='name' type="text" onChange={props.inputChange} placeholder='Name' />
<p>{props.err.name&&props.err.name}</p>
</div>
<div>
<input className='padAll' id='email' type="email" onChange={props.inputChange} placeholder='Email' />
<p>{props.err.email&&props.err.email}</p>
</div>
<div>
<input className='padAll' id='mobile' type="number" onChange={props.inputChange} placeholder='Mobile' />
<p>{props.err.mobile&&props.err.mobile}</p>
</div>
<div>
<input className='padAll' id='pan' type="text" onChange={props.inputChange} placeholder='pan' /> 
<p>{props.err.pan&&props.err.pan}</p>
</div>
<button onClick={props.addRow}>ADD ROW</button>
</div>)
}

export default TextFields;