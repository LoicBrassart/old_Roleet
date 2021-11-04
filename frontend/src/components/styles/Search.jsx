import styled from 'styled-components';

const SSearch = styled.div`
  &.Search {
    display: flex;
    > input {
      border: 0;
      border-radius: 10px;
    }
    > .searchResults {
      position: absolute;
      top: 100%;
      background-color: white;
      display: flex;
      > section {
        flex-grow: 1;
        flex-basis: 0;
        min-width: 150px;
        color: black;
        a {
          color: black;
        }
        ul li:hover {
          background-color: #c40000;
        }
      }
    }
    .NoResult {
      color: gray;
      text-align: center;
      h5 {
        font-size: 2em;
        width: 100%;
        margin: 20px 0px;
      }
    }
  }
`;
export default SSearch;
