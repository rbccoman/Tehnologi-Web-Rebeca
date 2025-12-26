import { useState } from "react";

function StatusCard({ isLoggedIn, user }) {
  // conditional rendering prin if
  if (isLoggedIn) {
    return (
      <div style={{ border: "2px solid green", padding: 12, borderRadius: 8 }}>
        <h2>Bun venit, {user} ✅</h2>
        <p>Ești logat. Ai acces la conținut.</p>
      </div>
    );
  }

  return (
    <div style={{ border: "2px solid red", padding: 12, borderRadius: 8 }}>
      <h2>Nu ești logat ❌</h2>
      <p>Te rugăm să te autentifici ca să continui.</p>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <h1>Conditional Rendering</h1>

      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <div style={{ marginTop: 16 }}>
        <StatusCard isLoggedIn={isLoggedIn} user="Rebeca" />
      </div>

      {/* Alt exemplu: conditional rendering cu operatorul ternar */}
      <p style={{ marginTop: 16 }}>
        Status: {isLoggedIn ? "Autentificat" : "Neautentificat"}
      </p>
    </div>
  );
}
