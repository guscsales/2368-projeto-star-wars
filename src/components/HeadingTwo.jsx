import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function HeadingTwo({ children, className, ...props }) {
  return (
    <h2
      {...props}
      className={classNames(
        `
            font-bold text-gray-900 
            text-2xl lg:text-3xl
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}

HeadingTwo.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
