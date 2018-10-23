import { connect } from 'react-redux';
import { IState } from 'services/reducer';
import { login } from 'services/user/user.actions';

import Home from './Home';

const mapStateToProps = (state: IState) => ({
    isLoggedIn: state.user.isLoggedIn,
    user: state.user.user,
})

const mapDispatchToProps = (dispatch: any) => ({
    login: (username: string, password: string) => dispatch(login(username, password))
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;