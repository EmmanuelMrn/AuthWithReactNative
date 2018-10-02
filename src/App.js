import React, { Component } from 'react';
import { View } from'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCcLmlNKTCehAYCqUtId5yPmh3w2MVSQaM',
            authDomain: 'authreactnative-75113.firebaseapp.com',
            databaseURL: 'https://authreactnative-75113.firebaseio.com',
            projectId: 'authreactnative-75113',
            storageBucket: 'authreactnative-75113.appspot.com',
            messagingSenderId: '93985325380'
          });
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
