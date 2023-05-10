import { useState } from "react";
import "../../App.css";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3333/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      alert("Registro concluido!");
    } else {
      alert("Registro não concluido!");
    }
  }

  return (
    <form className="register" onSubmit={handleRegister}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
