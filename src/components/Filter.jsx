import React from 'react';

const Filter = ({ handleGreasedFilter, handleSort }) => {
  return (
    <div>
      <label htmlFor="greasedOnly">Greased Only</label>
      <input
        id="greasedOnly"
        type="checkbox"
        onChange={handleGreasedFilter}
      />

      <label htmlFor="sortBy">Sort By</label>
      <select id="sortBy" onChange={handleSort}>
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
};

export default Filter;

