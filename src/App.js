import './App.css';
import Newsapi from "./Newsapi"
import News from "./News"
import React, { components } from "react";
// const [name,setName] = useState([]);
function App() {
  return (
    <div className="App">
      <h1>Let's make a News app 👌</h1>
      <Newsapi/>
      {/* <News/> */}
    </div>
  );
}

export default App;
