import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextFields from './components/TextFields';

function App() {
  const [data,setData] = useState([])
  const [todo,setTodo] = useState([])
  const [err,setErr] = useState([{name:"",email:"",mobile:"",pan:""}]) 
  const [allElement,setElement]=useState([])

  const inputChange=(e,i)=>{
    console.log(i);
    const id=e.target.id
    const val=e.target.value
    let dupli=[...data]
    let duplliobj={...dupli[i?i:0],[id]:val}
    console.log(duplliobj,dupli);
    dupli[i?i:0]=duplliobj;
      setData(dupli)
      // console.log(data);
    }
    const save=(e,i)=>{
      if(data.length){

      
      for (let index = 0; index < data.length+1; index++) {
        const element = data[index];

        if(Object.keys(element).length!==0&&element.name&&element.email&&element.mobile&&element.pan){
          setTodo((prev)=>[...prev,...data])
          setErr([{name:"",email:"",mobile:"",pan:""}])    
        }else{
          let error=[...err]
        error[index]={
          name:!element.name&&"Name cannot be empty",
          email:!element.email&&"Email cannot be empty",
          mobile:!element.mobile&&"Mobile cannot be empty",
          pan:!element.pan&&"Pan cannot be empty"}
         setErr(error)
         console.log(err,error);
        }  
      }
    }else{
        let error=[...err]
        error[0]={
          name:"Name cannot be empty",
          email:"Email cannot be empty",
          mobile:"Mobile cannot be empty",
          pan:"Pan cannot be empty"}
         setErr(error)
      }
         
      e.preventDefault()   
  }

  const addRow=()=>{
   setElement((prev)=>[...prev,prev.length+1])
   setData((prev)=>{
    return [...prev,{}]
   })
   setErr((prev)=>{
    return [...prev,{}]
   })
  }

  return (
    <div className="App">
  <TextFields
  inputChange={inputChange}
  err={err[0]}
  addRow={addRow}
  />
  {allElement.length?allElement.map(({Duplicate},i)=> <TextFields
  key={i}
  inputChange={(e)=>inputChange(e,i+1)}
  err={err[i+1]}
  addRow={addRow}
  />):""}
      <button onClick={(e)=>save(e,allElement.map(({Duplicate},i)=>i+1))} className='mrgTop' >SAVE</button>
      <div className='flex'> 
      <table >
            <thead >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Pan</th>
              </tr>
            </thead>
        {todo.length>0&&todo.map((e)=><tr>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.mobile}</td>
          <td>{e.pan}</td>
        </tr>
        )
}
          
          </table>
        
      </div>
    </div>
  );
}

export default App;
