import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => (
  <button
    className={`button
      ${props.mode}
      ${props.primary ? 'primary' : 'secondary'}
      ${props.className}
    `}
    disabled={props.disabled}
    type="button"
    onClick={props.onClick}
  >
    {props.children}
    {props.label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  primary: PropTypes.bool,
  mode: PropTypes.oneOf(['outlined', 'contained', 'text']),
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  label: '',
  primary: true,
  children: undefined,
  className: undefined,
  mode: 'contained',
  onClick: undefined,
};

export default Button;
