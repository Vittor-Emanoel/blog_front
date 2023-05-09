import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };

  async function handleRegister(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      redirect();
    } else {
      alert("erro ao fazer loggin");
    }
  }

  return (
    <form className="login" onSubmit={handleRegister}>
      <h1>Login</h1>
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
      <button>Login</button>
    </form>
  );
}
