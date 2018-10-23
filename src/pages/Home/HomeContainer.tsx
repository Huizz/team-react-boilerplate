import { connect } from 'react-redux';
import { getLoggedInState, getUserObject, IState } from 'reducer';
import { login } from 'services/user/actions';

import Home from './Home';

// const mapStateToProps = (state: IState) => ({
//     isLoggedIn: getLoggedInState(state),
//     user: getUserObject(state),
// })

const mapStateToProps = (state: IState) => {
    console.log(state);
    return {
        isLoggedIn: getLoggedInState(state),
        user: getUserObject(state),
    }
}


const mapDispatchToProps = (dispatch: any) => ({
    login: (username: string, password: string) => dispatch(login(username, password))
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer;