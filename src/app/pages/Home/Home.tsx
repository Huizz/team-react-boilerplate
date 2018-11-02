import * as React from 'react';

import Login from './children/Home.Login';
import Profile from './children/Home.Profile';

interface IProps {
    redux_login: (username: string, password: string) => void;
    redux_user?: any;
    redux_isLoggedIn: boolean;
    history?: any;
}


class Home extends React.Component<IProps, any> {

    public render = () => {

      let content = <Login login={this.onLoginClick} />;
      if(this.props.redux_isLoggedIn){
        content = <Profile username={this.props.redux_user.name} goToAction={this.onGoToFormClick}/>;
      }

      return (
        <div>
            <div>hello</div>
            {content}
        </div>
      )
    };

    private onLoginClick = (username: string, password: string) => {
        this.props.redux_login(username, password);
    };

    private onGoToFormClick = () => {
        this.props.history.push('/client/form');
    }

}

export default Home;
