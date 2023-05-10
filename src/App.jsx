import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { UserContextProvider } from "./contexts/UserContext";

//Styles

import "./App.css";

//Pages

import CreatePost from "./pages/CreatePost";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
