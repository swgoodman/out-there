import React from 'react'

const boardFilter = ({  boards, onChangeType }) => {
  const boardOptions = boards.map(board => <option key={board.id} value={board.boardName}>{board.boardName}</option>);



  return(
    <div>
      <h3>Pick a Board:</h3>
      <div className="field">
        <select name="type" id="type" onChange={onChangeType}>
          {boardOptions}
        </select>
      </div>
    </div>
  )
};

export default boardFilter;
