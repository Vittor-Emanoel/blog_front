import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3333/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:3333/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  {
    console.log("renderizou header");
  }

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {userInfo && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({userInfo?.username})</a>
          </>
        )}
        {!userInfo && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
