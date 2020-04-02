import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const res = await axios.post("api/signup", { username: userInput });
      setInfo(res.data);
    } catch (e) {}
  };
  return (
    <div className="App">
      <header className="App-header">
        Welcome {info}
        <form onSubmit={handleSubmit}>
          <input
            value={userInput}
            autoComplete="off"
            type="text"
            name="userText"
            placeholder="Type to start"
            onChange={event => setUserInput(event.target.value)}
            autoFocus
          />
          <br />
          <label style={{ fontSize: 20 }}>*Press enter to submit</label>
        </form>
        <label style={{ fontSize: 20, marginTop: 60 }}>
          This example sends the input text to the back end and the back end returns it to the
          client. Its just to test that the wiring of the front end and back end with the proxy is
          working
        </label>
      </header>
    </div>
  );
}

export default App;
