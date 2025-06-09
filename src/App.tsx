import { useAuth } from "./KeycloakProvider";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  const { preferredName, authenticated, login, logout } = useAuth();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>
        {authenticated ? `Welcome, ${preferredName}` : "Not Authenticated"}
      </h1>

      <div className="card">
        <button onClick={authenticated ? logout : login}>
          {authenticated ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}

export default App;
