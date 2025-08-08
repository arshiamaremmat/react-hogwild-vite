import React, { useState } from "react";

function HogForm({ addHog }) {
  // You can manage form state with useState if needed, here is an example:
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new hog object from the form state
    const newHog = {
      name,
      specialty,
      weight,
      greased,
      highestMedal,
      image,
    };

    // Call the addHog function passed as a prop
    addHog(newHog);

    // Optionally reset the form state after submission
    setName('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="specialty">Specialty</label>
      <input
        id="specialty"
        type="text"
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      />
      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label htmlFor="greased">Greased</label>
      <input
        id="greased"
        type="checkbox"
        checked={greased}
        onChange={(e) => setGreased(e.target.checked)}
      />
      <label htmlFor="highestMedal">Highest Medal</label>
      <input
        id="highestMedal"
        type="text"
        value={highestMedal}
        onChange={(e) => setHighestMedal(e.target.value)}
      />
      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;

