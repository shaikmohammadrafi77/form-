import { useState } from "react";
import "./form.css"
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Username: " + username + "\nPassword: " + password);
  };

  return (
    <div>
      <h3>Login Form</h3>

      <input type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}/>
      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={e => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
