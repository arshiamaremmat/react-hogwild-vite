import React, { useState } from "react";
import HogForm from "./components/HogForm";

function App() {
  const [hogs, setHogs] = useState([]);

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]); // Adds the new hog to the list
  };

  return (
    <div>
      <h1>HogWild</h1>
      <HogForm addHog={addHog} />
      <div>
        <h2>Hogs List:</h2>
        <ul>
          {hogs.map((hog, index) => (
            <li key={index}>
              {hog.name} - {hog.specialty} - {hog.weight} - {hog.highestMedal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




