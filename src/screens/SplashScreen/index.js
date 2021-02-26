import React from 'react'
import FastImage from 'react-native-fast-image' 
import Colors from '../../common/Colors';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
const SplashScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.black }}>
      <View style={styles.body}>
        <FastImage
          style={{ height: 80, width: 80, }}
          source={require("../../assets/Group.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text
          style={{ color: Colors.white, fontSize: 35, marginLeft: 15 }}>POSTBYS
        </Text>
      </View>
      <View style={{ flex: 0.1 }}>
         
      </View>
    </View >
  )
};
const styles = StyleSheet.create({
  body: {
    flex: 9.9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SplashScreen;
