import * as React from 'react';

import Button from 'components/Button';

interface IProps {
  startCount?: number
}

interface IState {
  counter: number
}

class Form extends React.Component<IProps, IState> {

  public state = {
    counter: 1
  }

  public handleOnClick = () => {
    this.setState({ counter: (this.state.counter + 1) })
  }

  public render = () => (
    <div className="form">
      I have been clicked {this.state.counter} times!
      <Button className="form__button" name="counter" size="large" onClick={this.handleOnClick} />
    </div>
  );

}


export default Form;
