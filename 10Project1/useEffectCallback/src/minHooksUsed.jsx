import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const lengthRef = React.createRef();
  const numberCheckboxRef = React.createRef();
  const charCheckboxRef = React.createRef();

  const generatePassword = () => {
    const length = parseInt(lengthRef.current.value);
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberCheckboxRef.current.checked) str += "0123456789";
    if (charCheckboxRef.current.checked) str += "!@#$%^&*-_+=[]{}~`";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", backgroundColor: "#333", color: "#f4f4f4", borderRadius: "8px" }}>
      <h1>Password Generator</h1>
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <input
          type="text"
          value={password}
          readOnly
          style={{ width: "70%", padding: "5px" }}
        />
        <button onClick={copyToClipboard} style={{ padding: "5px 10px" }}>
          Copy
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <label>
          Length: <span>{lengthRef.current?.value || 8}</span>
        </label>
        <input ref={lengthRef} type="range" min="6" max="100" defaultValue="8" />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          <input ref={numberCheckboxRef} type="checkbox" />
          Include Numbers
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          <input ref={charCheckboxRef} type="checkbox" />
          Include Characters
        </label>
      </div>
      <button onClick={generatePassword} style={{ padding: "5px 10px" }}>
        Generate Password
      </button>
    </div>
  );
}

export default App;
