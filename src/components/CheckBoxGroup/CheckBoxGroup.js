import React from 'react';
import CheckBox from "./../CheckBox/CheckBox";
 
// const CheckBoxGroup = () => (
//   <div className={styles.CheckBoxGroup}>
//     CheckBoxGroup Component
//   </div>
// );

// CheckBoxGroup.propTypes = {};

// CheckBoxGroup.defaultProps = {};

// export default CheckBoxGroup;


export default ({ options, ...props }) => (
  <div
    className="ant-checkbox-group"
    style={{   marginRight: 10 }}
  >
    {options.map(label => (
      <CheckBox
        key={label}
        label={label}
        disabled={props.disabled}
        handleChange={props.handleChange}
        value={props[label]}
      />
    ))}
  </div>
);