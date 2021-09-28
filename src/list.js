import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Api from './api.js';
import App from './App.js';

function List({data,itemx,index}) {
    const [set, setSet] = useState(null);
    const [setx, setSetx] = useState(null);
    delete Api[0];
  return (
<div style={{background:"#dddddd"}}>
<div style={{content: "",
  display: "flex",
  clear: "both",}}>
<img src={itemx.img} style={{width:"30%",height:"30%",borderRadius:12,padding:12}}/>
<div style={{float:"right"}}>
<h4>{itemx.title}</h4>
<p>Price : {itemx.price}</p>
<p>dis : {itemx.dis}</p>
<p>Tanants : 8</p>
</div>
<td><button style={{background:"#fff",color:"#000",width:30,height:30,fontSize:20,textAlign: "center"}} onClick={()=>{ window.location.reload();}}>X</button></td>
</div> 
<button style={{background:"green",color:"#fff",width:"10%",height:"10%",marginLeft:20}}>Add</button>
  <table>
  <tr>
    <th>S No.</th>
    <th>Name</th>
    <th>Price</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
{data.map((item,index)=>
 <tr>
    <td>{index+1}</td>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td><button style={{background:"orange",color:"#fff"}}>Edit</button></td>
    <td><button style={{background:"red",color:"#fff"}}>Remove</button></td>
  </tr>
    )}
</table>
</div>
  );
}

export default List;
