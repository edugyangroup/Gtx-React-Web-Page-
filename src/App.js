import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Api from './api.js'
function App() {
  const [data,setData]=useState(Api)
  const [tanatns,setTanats]=useState([]);
  const [listx,setListx]=useState(null);
  const [show, setShow] = useState(false);
  const [dindex,setDindex] = useState(0);
  const [mshow,setMshow] = useState(false);
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [type, setType]  = useState("add");
  const [indexg,setIndexg] =useState(1234)
         
         const reload=()=>{
          setShow(false);
          }

         const list=(i,t)=>{
          setShow(true);
          setListx(t);
          setTanats(t.tanatns);
          setDindex(i)
         }
        const del=(index)=>{
          tanatns.splice(index, 1);
          setTanats([...tanatns]);
        }
        const add=(x,index)=>{
          if (type=="edit") {
          alert("Edited Sucsefully!");
          tanatns[index].name=name;
          tanatns[index].price=price;
          setTanats([...tanatns]);
          }else{
          alert("add Sucsefully!");
          tanatns.push({name:name,price:price});
          setTanats([...tanatns]);
        }
      }
      const show1=(index)=>{
        setMshow(true);
      }
      const edit=(index,name,price)=>{
        setIndexg(index);
        setType("edit");
        setName(name);
        setPrice(price);
        show1(true);
      }
  return (
<>
    {show==false &&(
    <div class="row">
    {data.map((item,index)=>
    <div class="column">
        <div class="card">
        <img src={item.img} alt="Avatar" style={{width:"100%"}} />
          <h3>{item.title}</h3>
          <p>Price : ₹ {item.price}</p>
          <p>{item.dis}</p>
          <div class="btn-con">
        <button style={{background:"skyblue",color:"#fff"}} onClick={()=>{list(index,item)}}>Display</button>
        </div>
        </div>
      </div>
      )}
    </div>)}


    {mshow==true &&(
      <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </label>
            <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </label>
        <button style={{background:"green",color:"#fff",width:"10%",height:"10%",marginLeft:20}} onClick={()=>{ add(type,indexg);}}>Add Now</button>
        </div>

      )}

{/*List of Tenants*/}

            {show==true &&(<div style={{background:"#dddddd"}}>
              <div style={{content: "",display: "flex",clear: "both",}}>
                <img src={listx.img} style={{width:"30%",height:"30%",borderRadius:12,padding:12}}/>
                  <div style={{float:"right"}}>
                    <h4>{listx.title}</h4>
                    <p>Price : {listx.price}</p>
                    <p>dis : {listx.dis}</p>
                    <p>Tanants : 8</p>
                  </div>
                  <button style={{background:"#fff",color:"#000",width:30,height:30,fontSize:20,textAlign: "center"}} onClick={()=>{ reload();}}>X</button>
              </div> 
                  <button style={{background:"green",color:"#fff",width:"10%",height:"10%",marginLeft:20}} onClick={()=>{ show1();}}>Add</button>
                    <table>
                      <tr>
                        <th>S No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                      {tanatns.map((item,index)=>
                       <tr>
                          <td>{index+1}</td>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                          <td><button style={{background:"orange",color:"#fff"}} onClick={()=>{ edit(index,item.name,item.price);}}>Edit</button></td>
                          <td><button style={{background:"red",color:"#fff"}} onClick={()=>{ del(index);}}>Remove</button></td>
                        </tr>
                          )}
                  </table>
            </div>
            )}
</>
  );
}

export default App;
