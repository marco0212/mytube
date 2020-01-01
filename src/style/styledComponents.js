import styled from "styled-components";

export const Container = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  min-width: 1200px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`;
export const SectionBox = styled.section`
  background-color: #fff;
  box-shadow: ${props => props.theme.boxShadow};
  ${props => {
    if (Array.isArray(props.column)) {
      return `grid-column-start : ${props.column[0]}; grid-column-end : ${props.column[1]}`;
    } else {
      return `grid-column : ${props.column}`;
    }
  }}
  ${props => {
    if (Array.isArray(props.row)) {
      return `grid-row-start : ${props.row[0]}; grid-row-end : ${props.row[1]}`;
    } else {
      return `grid-row : ${props.row}`;
    }
  }}
`;
export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.lightGreyColor};
`;
export const SectionTitle = styled.h3`
  font-size: ${props => props.theme.bigTextSize};
  font-weight: 500;
  line-height: 30px;
`;
export const VideoList = styled.ul`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;
