import React, { Component } from 'react';
import { View } from'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        //Introduce you firebase.initialiseApp ({}); here
        
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
