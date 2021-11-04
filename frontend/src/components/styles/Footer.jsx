import styled from 'styled-components';

const SFooter = styled.footer`
  &.Footer {
    min-height: 30vh;

    background-color: #151515;
    color: #e5e5e5;
    border-top: 2px solid #c40000;

    nav {
      margin: 30px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;

      h3 {
        font-weight: bold;
      }
    }
    p {
      margin: 30px;
      text-align: center;
    }
  }
`;
export default SFooter;
