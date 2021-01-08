import React from "react";
import { Checkbox } from "antd";

export default ({  label, value, handleChange }) => (
  <Checkbox
    style={{ display: "inline-block" ,marginLeft:0   }}
    label={label}
    checked={value}
    onChange={handleChange}
  >
    {label}
  </Checkbox>
);
