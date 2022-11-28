import { useState } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss'

const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);

  function toggleCheckboxChange(e) {
    setChecked(e.target.checked);

    if (props.onChange) {
      props.onChange(e.target.checked);
    }
  }

  return (
    <div className="checkbox">
      <label className="checkbox-label" htmlFor={props.id}>
        <input
          name={props.name}
          type="checkbox"
          checked={checked || false}
          onChange={toggleCheckboxChange}
          className="checkbox-input"
          id={props.id}
        />
        <p className="checkbox-text">
          {props.label || props.children}
        </p>
      </label>
    </div>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  id:PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])

};

CheckBox.defaultProps = {
  id:'checkbox-input',
  name: '',
  children: null,
  onChange: null,
  label: undefined
};

export default CheckBox;