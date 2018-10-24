import * as React from 'react';

import Button from 'components/Button';

interface IProps {
    redux_login: (username: string, password: string) => void;
    redux_user?: any;
    redux_isLoggedIn: boolean;
    history?: any;
}

interface IState {
    password: string;
    username: string;
}

class Home extends React.Component<IProps, IState> {
    public state = {
        password: '',
        username: ''
    };

    public render = () => {

      let content = this.renderLogin();
      if(this.props.redux_isLoggedIn){
        content = this.renderProfile();
      }

      return (
        <div>
            <div>hello</div>
            {content}
        </div>
      )
    };

    private handleClick = () => {
        this.props.redux_login(this.state.username, this.state.password);
    };

    private renderProfile = () => (
        <>
            <div>Welcome, {this.props.redux_user.name}</div>;
            <Button name="Go to form" size="large" onClick={this.goToForm} />;
        </>
    );

    private renderLogin = () => (
        <>
            <input
                type="text"
                name="username"
                className="loginForm__username"
                value={this.state.username}
                onChange={this.onInputChange}
            />
            <input
                type="password"
                name="password"
                className="loginForm__password"
                value={this.state.password}
                onChange={this.onInputChange}
            />
            <Button name="Login" size="large" onClick={this.handleClick} />
        </>
    );

    private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const state = { ...this.state };
        state[event.target.name] = event.target.value;
        this.setState(state);
    };

    private goToForm = () => {
        this.props.history.push('/form');
    };
}

export default Home;
