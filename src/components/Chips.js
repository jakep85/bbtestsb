import PropTypes from 'prop-types';

function Chips({ label, color = 'blue', type = 'default', iconPosition = 'none', handleClick }) {
  let chipClass = '';
  let iconClass = ' contains-icon-';
  if (color === 'blue' && type === 'default') chipClass = 'bb-chip-blue-lg-default';
  if (color === 'neutral' && type === 'default') chipClass = 'bb-chip-neutral-lg-default';
  if (color === 'blue' && type === 'subtle') chipClass = 'bb-chip-blue-lg-subtle';
  if (color === 'neutral' && type === 'subtle') chipClass = 'bb-chip-neutral-lg-subtle';
  if (iconPosition === 'left') {
    return (
      <button onClick={handleClick} className={chipClass + iconClass + iconPosition}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6569 6L8.29289 11.294C7.90237 11.6845 7.90237 12.3176 8.29289 12.7082L13.6569 18L15 16.6579L10.3431 12.0011L15 7.34421L13.6569 6Z" />
        </svg>
        {label}
      </button>
    );
  } else if (iconPosition === 'right') {
    return (
      <button onClick={handleClick} className={chipClass + iconClass + iconPosition}>
        {label}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
        </svg>
      </button>
    );
  } else if (iconPosition === 'both') {
    return (
      <button onClick={handleClick} className={chipClass + iconClass + iconPosition}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.6569 6L8.29289 11.294C7.90237 11.6845 7.90237 12.3176 8.29289 12.7082L13.6569 18L15 16.6579L10.3431 12.0011L15 7.34421L13.6569 6Z" />
        </svg>
        {label}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3431 5.93457L15.7071 11.2285C16.0976 11.6191 16.0976 12.2522 15.7071 12.6427L10.3431 17.9346L9 16.5925L13.6569 11.9356L9 7.27878L10.3431 5.93457Z" />
        </svg>
      </button>
    );
  } else if (iconPosition === 'none') {
    return (
      <button onClick={handleClick} className={chipClass + iconClass + iconPosition}>
        {label}
      </button>
    );
  }
}

Chips.propTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'neutral']),
  type: PropTypes.oneOf(['default', 'subtle']),
  iconPosition: PropTypes.oneOf(['none', 'left', 'right', 'both']),
  handleClick: PropTypes.func,
};

export default Chips;
