import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';



class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDA9QxXC1jYl6M2hVITmPqc0-aHUwtZ1gw",
      authDomain: "latihanujian-mobiledevjc7.firebaseapp.com",
      databaseURL: "https://latihanujian-mobiledevjc7.firebaseio.com",
      projectId: "latihanujian-mobiledevjc7",
      storageBucket: "latihanujian-mobiledevjc7.appspot.com",
      messagingSenderId: "631247594740"
    };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
