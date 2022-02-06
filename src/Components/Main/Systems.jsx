import React from 'react';
import System from './System';

export default function Systems({ data }) {
  return (
    <div className="systems">
      {data.systems.map((el, index) => {
        return (
          <System
            key={index}
            name={el.system_name}
            id={el.id}
            date={el.created_date}
            activeLicenses={el.active_licenses}
          />
        );
      })}
    </div>
  );
}
