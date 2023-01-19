import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledStatistics,
  Title,
  StyledList,
  StyledItem,
} from './Statistics.styled';

const getRandomHexColor = () => {
  const colors = ['#F0432E', '#F736CB', '#913DE0', '#3647F7', '#34B1ED'];
  return colors[Math.floor((Math.random() * 100) % 5)];
};

const Statistics = ({ stats, title }) => {
  return (
    <StyledStatistics>
      {title && <Title>{title}</Title>}
      <StyledList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StyledItem key={id} color={getRandomHexColor()}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage + '%'}</span>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledStatistics>
  );
};

export default Statistics;

Statistics.defaultProps = {
  stats: [],
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};