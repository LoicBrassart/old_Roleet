import styled from 'styled-components';

const SScenario = styled.article`
  &.Scenario {
    margin: 40px;
    background-color: rgba(50, 50, 50, 0.8);

    header {
      padding: 20px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      background-color: #222222;

      h2 {
        width: 70%;
      }
      p {
        width: 30%;
        text-align: right;
      }
    }
    > p {
      padding: 20px;
      text-align: justify;
    }
  }
`;
export default SScenario;
