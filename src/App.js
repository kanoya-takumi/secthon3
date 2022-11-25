import React from "react";
import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UseProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}
