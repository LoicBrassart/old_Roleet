import styled from 'styled-components';

const SRoleetBar = styled.nav`
  &.RoleetBar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-content: center;

    margin: 0;
    padding: 0;

    height: 9vh;
    position: sticky;
    top: 0;
    z-index: 10;

    background-color: black;
    color: #e5e5e5;
    border-top: 2px solid #c40000;

    .logo {
      height: 100%;
      justify-content: center;
      align-items: flex-start;

      div {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
      }
      img {
        height: 30px;
      }

      h1 {
        font-weight: bold;
      }
    }

    ul {
      height: 100%;
      list-style: none;

      li {
        margin: 10px;

        img {
          max-width: 40px;
          max-height: 40px;
          border-radius: 3px;
        }
      }
    }

    a {
      color: white;

      &.active {
        border-bottom: 2px solid #c40000;
      }
    }
  }
`;

export default SRoleetBar;
