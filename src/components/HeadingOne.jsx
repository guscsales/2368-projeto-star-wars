import PropTypes from 'prop-types';

export default function HeadingOne({ children }) {
  return (
    <h1
      className={`
        font-bold text-gray-900 
        text-4xl lg:text-5xl
    `}
    >
      {children}
    </h1>
  );
}

HeadingOne.propTypes = {
  children: PropTypes.node.isRequired,
};
