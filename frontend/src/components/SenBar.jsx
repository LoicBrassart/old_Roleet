import React from 'react';
import cogoToast from 'cogo-toast';
import SSenBar from './styles/SenBar';

class SenBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: props.token,
      data: props.data,
      isLoggedIn: props.isLoggedIn,
    };
  }

  logout() {
    //this.props.dispatch(userActions.USER_LOGOUT);
    cogoToast.success('Déconnecté', { position: 'bottom-right' });
  }

  render() {
    return (
      <SSenBar className='SenBar flexer'>
        <div>Senvisage</div>
        {this.props.isLoggedIn ? (
          <button
            onClick={() => {
              this.logout();
            }}
          >
            Déconnexion
          </button>
        ) : (
          <button
          // onClick={() => {
          //   this.props.dispatch({
          //     ...modalActions.MODAL_OPEN,
          //     name: 'login',
          //   });
          // }}
          >
            Connexion
          </button>
        )}
      </SSenBar>
    );
  }
}
export default SenBar;
