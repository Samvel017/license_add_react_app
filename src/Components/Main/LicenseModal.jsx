import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { connect } from 'react-redux';

function LicenseModal({ setModal, addLicense, id }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const addSystemHandler = () => {
    if (name !== '' && date !== '') {
      addLicense({
        system_id: id,
        licenses: name,
        expires: date,
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
          ADD LICENSE
        </Button>
      </div>
    </div>
  );
}
export default connect(null, (dispatch) => ({
  addLicense: (obj) => {
    dispatch({ type: 'ADD_LICENSE', object: obj });
  },
}))(LicenseModal);
