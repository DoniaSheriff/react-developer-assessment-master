/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CheckBox from "./../CheckBox/CheckBox";

export default ({ options, ...props }) => {
  return (
    <div
      className="ant-checkbox-group"
      style={{
        marginRight: 10}}

    >
      {options.map(label => (
        <CheckBox
          key={label}
          label={label}
          disabled={props.disabled}
          handleChange={props.handleChange}
          value={props[label]} />
      ))}
    </div>
  );
};