/**
 *
 * SearchComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SearchComponent(props) {
  return (
    <div className="mt-5 bg-white form-group">
      <div className="input-group">
        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter State Name" value={props.text} onChange={props.handleChange}/>
        <div className="input-group-append">
          <div className="input-group-text" onClick={props.onSubmitSearch}>Search</div>
        </div>
      </div>
    </div>
  );
}

SearchComponent.propTypes = {};

export default SearchComponent;
