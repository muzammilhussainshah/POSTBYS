import React, { useEffect, useState } from 'react';
import { Router, Scene, } from 'react-native-router-flux';
import LoginScreen from "../screens/LoginScreen/index";
import SignUpScreen from "../screens/SignUpScreen/index";
import ForgotScreen from "../screens/ForgotScreen/index";
import ChangePassword from "../screens/ChangePassword/index";
import NewPassScreen from "../screens/NewPassScreen/index";
import VarificationScreen from "../screens/VarificationScreen/index";
export default Route = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>
        <Scene key='VarificationScreen' component={VarificationScreen} hideNavBar={true} />
        <Scene key='NewPassScreen' component={NewPassScreen} hideNavBar={true} />

        <Scene key='ChangePassword' component={ChangePassword} hideNavBar={true} />
        <Scene key='LoginScreen' component={LoginScreen} hideNavBar={true} />
        <Scene key='ForgotScreen' component={ForgotScreen} hideNavBar={true} />
        <Scene key='SignUpScreen' component={SignUpScreen} hideNavBar={true} />

      </Scene>
    </Router>
  );
}