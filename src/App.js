import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TextFields from './components/TextFields';

function App() {
  const [data,setData] = useState([{}])
  const [isClicked,SetClicked] = useState(false)
  const [todo,setTodo] = useState([])
  const [err,setErr] = useState([{name:false,email:false,mobile:false,pan:false}]) 
  const [allElement,setElement]=useState([{Row:TextFields}])
  
   let errorCheck=(element,index)=>{
     setErr(err.map((errData,i)=>{
      console.log(errData);
      if(i==index){
        return {
          name:element.name?false:true,
          email:element.email&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.email)?false:true,
          mobile:element.mobile?false:true,
          pan:element.pan?false:true,
        }
      }else{
        return errData
      }
    }))
    
     return element.name&&element.email&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.email)&&element.mobile&&element.pan;
    }
   let clearError=(index)=>{
    setData(data.map((inputData,i)=>{
      if(i==index){
      setErr(err.map((errData,i)=>{
        if(i==index){
          return {
            name:false,
            email:false,
            mobile:false,
            pan:false
          }
        }else{
          return errData
        }
      }))}
     }))
    }
    let clearField=(index)=>{
      setData(data.map((inputData,i)=>{
        if(i==index){
          return {
            name:"",
            email:"",
            mobile:"",
            pan:""
          }
        }else{
          return inputData
        }
      }))
    }
    const save=(e)=>{  
     data.forEach((element,index) => {
       if(errorCheck(element,index)){
         setTodo((prev)=>[...prev,element])
         clearError(index)
         clearField(index)         
         console.log(todo); 
     }
      
    });
    e.preventDefault()
    }
      


  const addRow=()=>{
    setElement((prev)=>[...prev,{Row:TextFields}])
    setData((prev)=>{
      return [...prev,{}]
    })
    setErr((prev)=>{
      return [...prev,{}]
    })
  }

  return (
    <div className="App">
 
  {allElement.length?allElement.map(({Row},i)=> <Row
  value={data[i]}
  key={i}
  inputChange={(e)=>{
    const id=e.target.id
    const val=e.target.value
    let dupli=[...data]
    let duplliobj={...dupli[i],[id]:val}
    dupli[i]=duplliobj;
      setData(dupli)

    }}
  err={err[i]}
  addRow={addRow}
  />):""}
      <button onClick={save} className='mrgTop' >SAVE</button>
      <div className='flex'> 
     { todo.length!==0?<table >
            <thead >
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Pan</th>
              </tr>
            </thead>
      {todo.map((e)=>
        Object.keys(e).length!==0?<tr>
          <td>{e.name}</td>
          <td>{e.email}</td>
          <td>{e.mobile}</td>
          <td>{e.pan}</td>
        </tr>:""
        )}

          
          </table>:<h1> No data Found</h1>}
        
      </div>
    </div>
  );
      }


export default App;
