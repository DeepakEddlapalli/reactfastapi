import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    try {
      const response = await fetch(
        "http://localhost:8001/api/message"
      );

      const data = await response.json();

      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to FastAPI");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>React + FastAPI</h1>

      <p>Frontend: React + Nginx</p>
      <p>Backend: FastAPI + Uvicorn</p>

      <button onClick={callBackend}>
        Call FastAPI
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
