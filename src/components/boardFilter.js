import React from 'react'

const boardFilter = ({ onChangeType }) => (
  <div>
    <h3>Pick a Board:</h3>
    <div className="field">
      <select name="type" id="type" onChange={onChangeType}>
        <option value="all">All</option>
        <option value="cat">Cats</option>
        <option value="dog">Dogs</option>
        <option value="micropig">Micropigs</option>
      </select>
    </div>
  </div>
);

export default boardFilter;
