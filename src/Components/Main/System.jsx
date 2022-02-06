import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { connect } from 'react-redux';
import LicenseModal from './LicenseModal';

function System({ name, id, date, data, deleteSystem,deleteLicense }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="system">
      {modal ? <LicenseModal id={id} setModal={setModal} /> : null}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="license_info">
            <div className="license">
              <span>Name: {name}</span>
              <span>ID: {id}</span>
              <span>Date: {date}</span>
              <span>
                Active Licenses:{' '}
                {data.subsystems.filter((el) => el.system_id === id).length}
              </span>
            </div>
            <div className="license_buttons">
              <button
                className="add_license"
                onClick={() => {
                  setModal(true);
                }}
              >
                ADD LICENSE
              </button>
              <button className='delete_license' onClick={() => deleteSystem(id)}>DELETE</button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {data.subsystems
            .filter((el) => el.system_id === id)
            .map((elem, index) => {
              return (
                <div className="sub_systems" key={index}>
                  <div className="sub_info">
                  <span>License Name: {elem.licenses}</span>
                  <span>Expires: {elem.expires}</span>
                  </div>
                  <button className='delete_button' onClick={()=>deleteLicense(elem)}>DELETE</button>
                </div>
              );
            })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default connect(
  (state) => ({
    data: state.data,
  }),
  (dispatch) => ({
    deleteSystem: (id) => {
      dispatch({ type: 'DELETE_SYSTEM', id: id });
    },
    deleteLicense: (license)=>{
      dispatch({type: 'DELETE_LICENSE', license: license})
    }
  })
)(System);
