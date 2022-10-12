import "./App.css";
import Card from "./components/cards/Card";
import Navbar from "./components/navbar/Navbar";
import { data } from "./helper/data.js";

function App() {
  return (
    <>
      <Navbar />
      <h1>Popular Tour Places</h1>
      <div className="container">
        {data.map((country) => {
          return <Card key={country.id} {...country} />;
        })}
      </div>
    </>
  );
}

export default App;
