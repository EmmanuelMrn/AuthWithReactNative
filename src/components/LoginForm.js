import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import firebase from '@firebase/app';

class LoginForm extends Component {
    state = { email: '', password: '' };

    onButtonPress() {
        firebase.auth().signInWithEmailAndPassword(email,password);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@email.com"
                        label="Email" 
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="********"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
