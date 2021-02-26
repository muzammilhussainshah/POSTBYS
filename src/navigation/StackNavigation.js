import React, { useEffect, useState } from 'react';
import { Router, Scene, } from 'react-native-router-flux';
import LoginScreen from "../screens/LoginScreen/index";
import SignUpScreen from "../screens/SignUpScreen/index";
import ForgotScreen from "../screens/ForgotScreen/index";
export default Route = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>

        <Scene key='LoginScreen' component={LoginScreen} hideNavBar={true} />
        <Scene key='ForgotScreen' component={ForgotScreen} hideNavBar={true} />
        <Scene key='SignUpScreen' component={SignUpScreen} hideNavBar={true} />

      </Scene>
    </Router>
  );
}