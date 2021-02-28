import React, { useState } from "react";
import FastImage from 'react-native-fast-image';
import Colors from "../../../common/Colors"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Input from "../../../components/input"
import AppContainer from '../../../container/AppContainer';
import {
  Text,
  Dimensions,
  Switch,
  SafeAreaView,
  TouchableOpacity, TextInput,

  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  FlatList
} from 'react-native';
const windowHeight = Dimensions.get('window').height - 24;

const Home = () => {
  const [twoScreen, setTwoScreen] = useState(true)
  const [value, onChangeText] = useState(true)

  return (
    <AppContainer route={"Home"}   >
      <ScrollView style={{ height: windowHeight / 1.25 }}>
        <View style={{ height: windowHeight / 1, paddingHorizontal: 15 }}>
          <View style={styles.header}>
            <View style={{ flex: 1.2, justifyContent: "center" }}>
              < FastImage
                style={{ height: "80%", width: "80%", }}
                source={require("../../../assets/Group.png")}
                resizeMode="contain"
              />
            </View>
            <View style={{ flex: 6.3, justifyContent: "center" }}>
              <Text style={{ fontSize: 18 }}>POSTBYS</Text>
            </View>
            <View style={{ flex: 2.5, justifyContent: "center", alignItems: 'center' }}>
              <View style={{ height: "50%", width: "90%", borderRadius: 20, backgroundColor: Colors.lightGray, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setTwoScreen(!twoScreen)}
                  style={{ height: "70%", width: "40%", justifyContent: "center", alignItems: "center", borderRadius: 10, backgroundColor: twoScreen ? Colors.white : null }}>
                  <FontAwesome5
                    name={"equals"}
                    size={18}
                    style={{ color: Colors.slideClr }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTwoScreen(!twoScreen)}

                  style={{ height: "70%", width: "40%", justifyContent: "center", alignItems: "center", borderRadius: 10, backgroundColor: !twoScreen ? Colors.white : null }}>

                  <AntDesign
                    name={"appstore1"}
                    size={18}
                    style={{ color: Colors.slideClr }}

                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.8, backgroundColor: Colors.lightGray, flexDirection: "row" }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>

              <Feather
                name={"search"}
                size={25}
                style={{ color: Colors.slideClr }}

              />
            </View>
            <View style={{ flex: 9, justifyContent: "center" }}>
              <TextInput
                style={{ height: "100%", fontSize: 18 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={"search"}
              />
            </View>
          </View>
          <View style={{ flex: 1.2, backgroundColor: 'green' }}></View>
          <View style={{ flex: 7, backgroundColor: 'pink' }}></View>
        </View>
      </ScrollView>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
  header: { flex: 1, flexDirection: "row" }
});
export default Home;