import logo from './logo.svg';
import './App.css';
import LoggedOn from './Components/LoggedOn'
import LoggetOutfrom from './Components/LoggetOut'

function App() {
  const loggedIn =true

  const names=["John","Doe","Jane"]
  const namecount =names.length;
  return (
    <div className="App">
    {
      // if (loggedIn) {
      //   return <p>Welcome back!</p>;
      // } else {
      //   return <p>Please log in.</p>;
      // }
     
     }
     { loggedIn && <LoggedOn/>}
     {!loggedIn && <LoggetOutfrom/>}
      {namecount>0 && names.map((name,index)=> <p key={index}>{name}</p>)}
      {namecount===0 && <p>No Names</p>}
      {
        // namecount>0 ? ():():ternary operator
        namecount>0?(names.map((name,index)=> <p key={index}>{name}</p>)):(<p>None Proveded</p>)
      }
     
    </div>
  );
}

export default App;
