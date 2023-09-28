import PropTypes from 'prop-types';

export default function Select({ options, ...props }) {
  return (
    <select {...props} className="select select-bordered w-full max-w-xs">
      {options.map(({ label, value, ...option }) => (
        <option key={value} value={value} {...option}>
          {label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
};
