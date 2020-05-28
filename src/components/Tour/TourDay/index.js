import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styles';

const TourDay = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false);
  const handleClick = () => {
    setInfo((open) => !open);
  };
  return (
    <Container>
      <h4>
        {day}
        <button className="btn" type="button" onClick={handleClick}>
          {showInfo ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </Container>
  );
};

export default TourDay;

TourDay.propTypes = {
  day: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
