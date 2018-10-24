import * as React from 'react';

import Button from 'components/Button';

interface IProps {
    redux_login: (username: string, password: string) => void;
    redux_user?: any;
    redux_isLoggedIn: boolean;
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

    public render = () => (
        <div>
            <div>hello</div>
            {this.renderContent()}
        </div>
    );

    private handleClick = () => {
        this.props.redux_login(this.state.username, this.state.password);
    };

    private renderContent = () => {
        if (this.props.redux_isLoggedIn) {
            return <div>Welcome, {this.props.redux_user.name}</div>;
        } else {
            return (
                <div>
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
                    <Button
                        name="Login"
                        size="large"
                        onClick={this.handleClick}
                    />
                </div>
            );
        }
    };

    private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const state = { ...this.state };
        state[event.target.name] = event.target.value;
        this.setState(state);
    };
}

export default Home;
