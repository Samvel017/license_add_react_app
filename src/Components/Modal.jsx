import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { connect } from 'react-redux';

function Modal({ setModal, addSystem,data }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const addSystemHandler = () => {
    if (name !== '' && date !== '') {
      let randomId = require('random-id') 
      let len  = 5
      let pattern = 'aA0'
      let id = randomId(len,pattern)
      console.log(id);
      addSystem({
        system_name: name,
        id: id,
        created_date: date,
        active_licenses: 0,
      });
      setModal((prev) => !prev);
    }
  };
  return (
    <div className="modal">
      <div className="close_modal" onClick={() => setModal((prev) => !prev)}>
        X
      </div>
      <div className="modal_content">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Date"
          variant="standard"
          type={'date'}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Button variant="contained" onClick={addSystemHandler}>
          ADD SYSTEM
        </Button>
      </div>
    </div>
  );
}
export default connect(null, (dispatch) => ({
  addSystem: (obj) => {
    dispatch({ type: 'ADD_SYSTEM', object: obj });
  },
}))(Modal);
