import React, { useEffect, useState } from 'react';
import { Router, Scene, } from 'react-native-router-flux';
import LoginScreen from "../screens/LoginScreen/index";
import SignUpScreen from "../screens/SignUpScreen/index";
import ForgotScreen from "../screens/ForgotScreen/index";
import ChangePassword from "../screens/ChangePassword/index";
import NewPassScreen from "../screens/NewPassScreen/index";
import AboutScreen from "../screens/AboutScreen/index";
import VarificationScreen from "../screens/VarificationScreen/index";
import Home from "../screens/AppScreens/Home/index";
import BagScreen from "../screens/AppScreens/BagScreen/index";
import Plus from "../screens/AppScreens/Plus/index";
import ChatScreen from "../screens/AppScreens/ChatScreen/index";
import SettingScreen from "../screens/AppScreens/SettingScreen/index";
import PaymentmethodScreen from "../screens/PaymentMethodScreen/index";
import MsgScreen from "../screens/MsgScreen/index";
import Categories from "../screens/Categories/index";
export default Route = () => {
  return (
    <Router
      navigationBarStyle={{ backgroundColor: "#f27500" }}
      titleStyle={{ color: "white" }}
      tintColor="white">
      <Scene>
        <Scene key='LoginScreen' component={LoginScreen} hideNavBar={true} />
        <Scene key='Categories' component={Categories} hideNavBar={true} />
        <Scene key='MsgScreen' component={MsgScreen} hideNavBar={true} />
        <Scene key='Home' component={Home} hideNavBar={true} />
        <Scene key='SettingScreen' component={SettingScreen} hideNavBar={true} />
        <Scene key='PaymentmethodScreen' component={PaymentmethodScreen} hideNavBar={true} />
        <Scene key='ChatScreen' component={ChatScreen} hideNavBar={true} />
        <Scene key='Plus' component={Plus} hideNavBar={true} />
        <Scene key='BagScreen' component={BagScreen} hideNavBar={true} />
        <Scene key='VarificationScreen' component={VarificationScreen} hideNavBar={true} />
        <Scene key='AboutScreen' component={AboutScreen} hideNavBar={true} />
        <Scene key='NewPassScreen' component={NewPassScreen} hideNavBar={true} />
        <Scene key='ChangePassword' component={ChangePassword} hideNavBar={true} />
        <Scene key='ForgotScreen' component={ForgotScreen} hideNavBar={true} />
        <Scene key='SignUpScreen' component={SignUpScreen} hideNavBar={true} />

      </Scene>
    </Router>
  );
}