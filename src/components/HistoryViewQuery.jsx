/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import networkIcon from '../static/flux_capacitor.png';

const epochTheme = createMuiTheme({ palette: { primary: { main: '#20909f' } } });

const HistoryViewQuery = ({ timelineObj, onClick, active }) => {
  const { type, id, name, isNetwork } = timelineObj;
  const typeAbbrevs = { Query: 'Q', Mutation: 'M', 'Manual Fetch': 'MF' };
  return (
    <div
      className={`query-card ${active && 'active-query'}`}
      onClick={onClick}
      active={active}
      id={id}
    >
      <div className="query-card-text">
        <div>{`${id}: ${name}`}</div>
        {isNetwork && <img src={networkIcon} alt="network" className="network-icon" />}
        <ThemeProvider theme={epochTheme}>
          <div className="button-switcher-container">
            <div className="button-switcher">
              <div className="time-stamp">
                <p>No Time</p>
              </div>
              <div className="jump-button">
                <p>Jump</p>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

HistoryViewQuery.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  timelineObj: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default HistoryViewQuery;
