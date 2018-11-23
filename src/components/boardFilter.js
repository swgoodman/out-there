import React from 'react'

const boardFilter = ({  boards, onChangeBoard }) => {
  const boardOptions = boards.map(board => <option key={board.boardId} value={board.boardName}>{board.boardName}</option>);



  return(
    <div>
      <h3>Pick a Board:</h3>
      <div className="field">
        <select name="type" id="type" onChange={onChangeBoard}>
          {boardOptions}
        </select>
      </div>
    </div>
  )
};

export default boardFilter;
