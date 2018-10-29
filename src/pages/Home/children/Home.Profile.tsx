import * as React from 'react';
import { Helmet } from 'react-helmet';

import Button from 'components/Button';

export interface IHomeProfileProps {
    history?: any;
    username: string;
    goToAction: () => void;
}

class Profile extends React.Component<IHomeProfileProps, any> {
    public render = () => (
        <>
            <Helmet>
                <title>Profile Page</title>
            </Helmet>
            <div>Welcome, {this.props.username}</div>
            <Button name="Go to form" size="large" onClick={this.props.goToAction} />
        </>
    );
}

export default Profile;
