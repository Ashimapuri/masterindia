import { useEffect, useState } from 'react';
import './App.css';
import CodeSnip from './CodeSnip';
import data1 from './data.json';
// import { BrowserRouter as Router} from "react-router-dom";
//   import {Link} from "react-router-dom";


function App() {
  const [search, setSearch]=useState ('');
  const [data, setData]=useState(data1);
 

  const handleSubmit=()=>{
    setSearch(data1.current.value);
  }

  const filter=(search)=>{
    if (search==='') setData(data1);
    else{
    const newarr=data1.filter((item)=>item.name.includes(search));
    setData(newarr);}
  }

  useEffect(()=>{
    filter(search);
  }
  ,[search])
  
  return (
    <div class='container'>
      <input className="search" type="text"  placeholder="Search"/>
      
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <div className="sidenav">
  <a href="#">Express.listen</a>
  <a href="#">Express.get</a>
  <a href="#">Response.send</a>
  <a href="#">Express.use</a>
</div>
    <div className="container1">
      {data.length!==0 && data.map((item )=> 
      <CodeSnip key={item.id} name={item.name} code={item.body}/>)}
    </div>
    <div className="sidenav1">
      <p>Popular in JavaScript</p>
  <a href="#">mkdirp</a>
  <a href="#">rimraf</a>
  <a href="#">fs-extra</a>
  <a href="#">superagent</a>
  <a href="#">path</a>
  <a href="#">readable-stream</a>
  <a href="#">through2</a>
  <a href="#">mocha</a>
  {/* <Router>
    <ul>
        <li>
        <Link to="https://www.tabnine.com/code/javascript/functions/express/Express/listen">Express.listen</Link>
        </li>
        </ul>
        </Router> */}
</div>
    </div>
    
  );
}

export default App;
