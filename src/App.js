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
          const { id, title, desc, image } = country;
          return <Card key={id} title={title} desc={desc} image={image} />;
        })}
      </div>
    </>
  );
}

export default App;
