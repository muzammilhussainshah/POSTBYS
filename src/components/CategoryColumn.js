
import Entypo from 'react-native-vector-icons/Entypo';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import React from "react";
const CategoryColumn = ({ title, discription, rate }) => (
  <TouchableOpacity
    style={styles.item2}>
    <View style={{ flex: 4, flexDirection: "row" }}>
      {title == "Sharlene Edwards" &&
        <View style={{ flex: 7, alignItems: "flex-end" }}>

          < FastImage
            style={{ height: "100%", width: 85, }}
            source={require("../assets/Bitmag.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      }
      {title == "Ronnie Pierce" &&
        <View style={{ flex: 7, alignItems: "flex-end" }}>

          < FastImage
            style={{ height: "100%", width: 85, }}
            source={require("../assets/Bitmapb.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      }
      {title == "Sonia Brown" &&
        <View style={{ flex: 7, alignItems: "flex-end" }}>

          < FastImage
            style={{ height: "100%", width: 85, }}
            source={require("../assets/Bitmapc.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      }
      {title == "Paulibne Fisher" &&
        <View style={{ flex: 7, alignItems: "flex-end" }}>

          < FastImage
            style={{ height: "100%", width: 85, }}
            source={require("../assets/Bitmapd.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      }
      {title == "Leon Bennett" &&
        <View style={{ flex: 7, alignItems: "flex-end" }}>

          < FastImage
            style={{ height: "100%", width: 85, }}
            source={require("../assets/Bitmapa.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      }
      <View style={{ flex: 3, marginTop: 5, flexDirection: "row", justifyContent: "flex-end" }}>
        <Entypo
          name={"star"}
          size={15}
          style={{ marginRight: 5}}
        />
        <Text style={{ fontSize: 13, marginRight: 10, color: Colors.slideClr }}>{rate}</Text>
      </View>
    </View>
    <View style={{ flex: 6, paddingHorizontal: 15 }}>
      <View style={{ flex: 2, }}>
        <Text  >
          {title}
        </Text>
      </View>
      <View style={{ flex: 4.5, overflow: "hidden" }}>
        <Text style={{ fontSize: 13, color: Colors.slideClr }}>
          {discription.substring(0, 79)}
        </Text>
      </View>
      <View style={{ flex: 3.5, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <View style={{ height: "100%", justifyContent: "center", width: 40 }}>
          <View style={styles.bagIcon}>
            <Feather
              name={"shopping-bag"}
              size={20}
              style={{ color: Colors.slideClr }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.MsgBtn}>
          <Text
            style={{ color: Colors.white, fontSize: 12 }}>Message
                    </Text>
        </TouchableOpacity>
      </View>

    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  item2: {
    height: 220,
    width: "50%",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.gray,
  },
  MsgBtn: {
    height: 25,
    width: 100,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center"
  },
  bagIcon: {
    height: "80%",
    width: 30,
    borderColor: Colors.gray,
    borderRadius: 2,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  },
});
export default CategoryColumn;