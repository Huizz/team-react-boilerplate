import * as React from 'react';

import Button from 'components/Button';

interface IProps {
  login: (username: string, password: string) => void,
  user: any,
  isLoggedIn: boolean,
}

interface IState {
  password: string,
  username: string
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      password: '',
      username: ''
    }
  }

  public render = () => (
    <div>
      <div>hello</div>
      {this.renderContent()}
    </div>
  );

  private handleClick = () => {
    this.props.login(this.state.username, this.state.password)
  }

  private renderContent = () => {
    if (this.props.isLoggedIn) {
      return (
        <div>
          Welcome, {this.props.user.name}
        </div>
      )
    } else {
      return (
        <div>
          <input type="text" name="username" value={this.state.username} onChange={this.onInputChange}/>
          <input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/>
          <Button name="Login" size="large" onClick={this.handleClick} />
        </div>
      )
    }
  }

  private onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const state = { ...this.state};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }
}

export default Home;
