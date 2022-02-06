import React, { useState } from 'react';

export default function Nav({tabs}) {
  const [active, setActive] = useState('Offline Activation');
  return <div className='nav'>
    {tabs.map((el, index)=>{
       return <button className={active === el.title ? 'active' : ''} onClick={()=> setActive(el.title)} key={index}>{el.title}</button>
    })}
  </div>;
}
