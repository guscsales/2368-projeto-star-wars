import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}) {
  const defaultClassName = classNames(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-ghost': variant === 'ghost',
    },
    className
  );

  return (
    <button {...props} className={defaultClassName}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
