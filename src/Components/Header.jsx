import React, { useState } from 'react';
import { connect } from 'react-redux';
import './header.scss';
import Modal from './Modal';
function Header({ pageInfo }) {
  const [active, setActive] = useState('free_license');
  const [modal, setModal] = useState(false);
  return (
    <div className="header">
      <div className="page_title">{pageInfo.page_title}</div>
      <div className="page_right">
        <div className="page_status">
          {pageInfo.plans.map((el, index) => {
            return (
              <div
                className={active === el.slug ? 'active status' : 'status'}
                style={{ width: '55px', cursor: 'pointer' }}
                key={index}
                onClick={() => setActive(el.slug)}
              >
                <svg
                  id="eIab5Eco30S1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 56 48"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                >
                  <g
                    id="eIab5Eco30S2"
                    transform="matrix(1 0 0 0.999999 0 0.000024)"
                  >
                    <path
                      id="eIab5Eco30S3"
                      d="M0,0L24,5.034827L48,-0.000001L48,33.230008L24,47.999999L0,33.230008L0,0Z"
                      transform="matrix(1 0 0 1 4 -0.000023)"
                      fill={
                        index === 0
                          ? 'rgb(73,152,97)'
                          : index === 1
                          ? 'rgb(89,139,141)'
                          : 'rgb(218,148,34)'
                      }
                      stroke={
                        index === 0
                          ? 'rgb(73,152,97)'
                          : index === 1
                          ? 'rgb(89,139,141)'
                          : 'rgb(218,148,34)'
                      }
                      strokeWidth="0.096"
                    />
                  </g>
                  <rect
                    id="eIab5Eco30S4"
                    width="48"
                    height="18.965153"
                    rx="0"
                    ry="0"
                    transform="matrix(1.166667 0 0 1 -0.000008 10.034846)"
                    fill="rgb(0,0,0)"
                    stroke="none"
                    strokeWidth="0"
                  />
                  <text
                    id="eIab5Eco30S5"
                    dx="0"
                    dy="0"
                    fontFamily='"Roboto"'
                    fontSize="2.6"
                    transform="matrix(1 0 0 1 15.859375 24.331721)"
                    fill="rgb(214,221,222)"
                    stroke="none"
                    strokeWidth="0"
                  >
                    <tspan
                      id="eIab5Eco30S6"
                      x="0"
                      y="0"
                      fontFamily="Roboto"
                      fontSize="14"
                      fill="rgb(214,221,222)"
                      stroke="none"
                      strokeWidth="0"
                    >
                      {el.name}
                    </tspan>
                  </text>
                </svg>
              </div>
            );
          })}
        </div>
        <div className="upgrade_button">
          <button
            onClick={() => {
              setModal((prev) => {
                return !prev;
              });
            }}
          >
            UPGRADE NOW
          </button>
        </div>
      </div>
      {modal ? <Modal setModal={setModal}/> : null}
    </div>
  );
}

export default connect(
  (state) => ({
    pageInfo: state.pageInfo,
    data: state.data,
  }),
  null
)(Header);
