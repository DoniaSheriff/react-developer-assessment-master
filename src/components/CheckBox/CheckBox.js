// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './CheckBox.module.css';

// const CheckBox = () => (
//   <div className={styles.CheckBox}>
//     CheckBox Component
//   </div>
// );

// CheckBox.propTypes = {};

// CheckBox.defaultProps = {};

// export default CheckBox;
import React from "react";
import { Checkbox } from "antd";

export default ({ disabled, label, value, handleChange }) => (
  <Checkbox
    style={{ display: "inline-block" ,marginLeft:0   }}
    disabled={disabled || false}
    label={label}
    checked={value}
    onChange={handleChange}
  >
    {label}
  </Checkbox>
);
