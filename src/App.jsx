import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [ip, setIp] = useState("");
  useEffect(() => {
    async function getIp() {
      const resp = await axios.get("http://localhost:3080/api/");
      console.log(resp.data);
      setIp(resp.data);
    }
    getIp();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <div className="leftside">
          <img src="./image-removebg-preview (1).png" alt="" className="logo" />
        </div>
        <div className="rightside">
          <h2 className="label">STORE</h2>
          <h2 className="label">TOUR</h2>
        </div>
      </div>
      <div className="center">
        <img src="./mikey.jpg" alt="" className="mikey" />
        <h1 className="ip">{ip}</h1>
      </div>
    </div>
  );
}

export default App;
