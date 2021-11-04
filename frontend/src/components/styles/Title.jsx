import styled from 'styled-components';

const STitle = styled.h1`
  &.Title {
    background-color: rgba(0, 0, 0, 0.5);
    width: 600px;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    align-content: flex-start;

    img {
      height: 100%;
      width: auto;

      &.left {
        transform: rotate(-90deg);
      }
      &.right {
        transform: rotate(90deg);
      }
      &.bottom {
        transform: rotate(180deg);
      }
    }

    h1 {
      margin-left: 50px;
      height: 100%;
    }
  }
`;
export default STitle;
