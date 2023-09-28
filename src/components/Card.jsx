import PropTypes from 'prop-types';

export default function Card({ title, children }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {title && <h2 className="card-title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
};
