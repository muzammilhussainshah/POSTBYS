import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import StackNavigation from './src/navigation/StackNavigation';
import SplashScreen from './src/screens/SplashScreen/index';
import { View, Text, StyleSheet, } from 'react-native';

const RootContainer = () => {
  const [Splash, setSplash] = useState(true);

  useEffect(() => {
    console.disableYellowBox = true
    setTimeout(() => {
      setSplash(false)
    },3000);
  }, [])

  return (
    Splash ?
      <SplashScreen /> 
      :
      <StackNavigation />
  )
};

const mapStateToProp = ({ root }) => ({
});
const mapDispatchToProp = (dispatch) => ({
});
export default connect(mapStateToProp, mapDispatchToProp)(RootContainer)