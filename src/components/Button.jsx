import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Button({
  variant = 'primary',
  children,
  className,
  ...props
}) {
  const defaultClassName = classNames(
    'rounded font-bold px-3 py-2',
    {
      'bg-blue-400 hover:bg-blue-500 text-white': variant === 'primary',
      'border border-solid border-blue-400 text-blue-400': variant === 'ghost',
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
