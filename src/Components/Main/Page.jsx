import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';
import Nav from './Nav';
import './page.scss'
function Page({pageInfo, data}) {
  return <div className='page'>
    <Nav tabs={pageInfo.tabs}/>
    <Main data={data}/>
  </div>;
}

export default connect((state)=>({
  pageInfo: state.pageInfo,
  data: state.data
}))(Page)