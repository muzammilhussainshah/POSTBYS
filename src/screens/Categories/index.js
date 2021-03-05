import React, { useState } from "react";
import Colors from "../../common/Colors"
import AntDesign from 'react-native-vector-icons/AntDesign';
import CategoryColumn from "../../components/CategoryColumn";
import { Actions } from 'react-native-router-flux';
import CategoryRow from "../../components/CategoryRow";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import { acc } from "react-native-reanimated";
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sharlene Edwards',
    rate: "5.0",
    discription: "Looking for butterfly shaped necklace jewelry design in 18kp rose gold. Please send me images, videos, and price if you have."

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ronnie Pierce',
    rate: "4.9",
    discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sonia Brown',
    rate: "4.9",
    discription: "Looking to trade/sell vintafe 1970's jewelry i.f solid gold and diamonds.Please post below or message me if intrested. I can send .. ",

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Paulibne Fisher',
    rate: "4.9",
    discription: 'Please message me if you carry calibrated blue sappire 3mm round gemstones, need 20 carats .No more than $200/ct quality',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Leon Bennett',
    rate: "4.8",
    discription: 'Please message me if you carry calibrated blue sappire 3mm round gemstones, need 20 carats .No more than $200/ct quality',

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Ronnie Pierce',
    rate: "4.7",
    discription: 'Does anuone carry salt-and papper diamond parceis if 1ct + per stone? Message me with your offers and prices.    ',
  },
];
const windowHeight = Dimensions.get('window').height - 24;
const Categories = ({ title }) => {
  const [twoScreen, setTwoScreen] = useState(true)
  const renderItem = ({ item }) => (
    twoScreen ?
      <CategoryRow title={item.title} discription={item.discription} rate={item.rate} />
      :
      <CategoryColumn title={item.title} discription={item.discription} rate={item.rate} />
  );
  return (
    <ScrollView style={{ height: windowHeight / 1.21 }}  >
      <View style={{ height: windowHeight / 1 }}>
        <View style={{ top: "90%", left: "35%", position: "absolute", zIndex: 2, }}>
          <TouchableOpacity style={styles.AbsolutedWork}>
            <AntDesign
              name={"plus"}
              size={25}
              style={{ color: Colors.white }}
            />
            <Text style={{ color: Colors.white, fontSize: 17, marginLeft: 5 }}>Postbys</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => Actions.pop()}
          >
            <AntDesign
              name={"arrowleft"}
              size={30}
              style={{ color: Colors.slideClr }} />
          </TouchableOpacity>
          <View style={{ width: 100, justifyContent: "center", alignItems: 'center' }}>
            <View style={styles.switchScreens}>
              <TouchableOpacity
                onPress={() => setTwoScreen(!twoScreen)}
                style={[styles.switchScreensView, {
                  backgroundColor: twoScreen ? Colors.white : null
                }]}>
                <FontAwesome5
                  name={"equals"}
                  size={18}
                  style={{ color: Colors.slideClr }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setTwoScreen(!twoScreen)}
                style={[styles.switchScreensView, {
                  backgroundColor: !twoScreen ? Colors.white : null
                }]}>
                <AntDesign
                  name={"appstore1"}
                  size={16}
                  style={{ color: Colors.slideClr }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.tradeshows}>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity>
              <Entypo
                name={"flow-parallel"}
                size={25}
                style={{ color: Colors.slideClr }}
              />
            </TouchableOpacity>
            <Feather
              name={"search"}
              size={25}
              style={{ color: Colors.slideClr, marginHorizontal: 5 }}
            />
          </View>
        </View>
        <View style={{ flex: 8 }}>
          {twoScreen == true ?
            <FlatList
              key={'#'}
              numColumns={1}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            /> :
            <FlatList
              key={'_'}
              numColumns={2}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          }
        </View>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15
  },
  switchScreens: {
    height: "50%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  switchScreensView: {
    height: "70%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  AbsolutedWork: {
    height: "100%",
    justifyContent: 'center',
    flexDirection: "row",
    alignItems: "center",
    width: 130,
    backgroundColor: Colors.black,
    borderRadius: 25, marginBottom: 20
  },
  tradeshows: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },


});
export default Categories;