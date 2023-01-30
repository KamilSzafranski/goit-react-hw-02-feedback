import styled from 'styled-components';

export const HeaderStatistics = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const StatsText = styled.p`
  fonst-size: 14px;
  color: black;
`;

export const Box = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
`;

s;
