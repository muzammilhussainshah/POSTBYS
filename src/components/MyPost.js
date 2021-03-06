
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../common/Colors';
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const MyPost = ({ title, discription, rate }) => {
  const [discriptiona, setDiscription] = useState(discription)
  return (
    <TouchableOpacity
      onPress={() => Actions.ProductScreen({title,discription,rate})}
      style={styles.item}>
      <View style={{ flex: 3.5 }}>
        {title == "Sharlene Edwards" &&
          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={require("../assets/Bitmag.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        }
        {title == "Ronnie Pierce" &&
          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={require("../assets/Bitmapb.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        }
        {title == "Sonia Brown" &&
          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={require("../assets/Bitmapc.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        }
        {title == "Paulibne Fisher" &&
          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={require("../assets/Bitmapd.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        }
        {title == "Leon Bennett" &&
          < FastImage
            style={{ height: "100%", width: "100%", }}
            source={require("../assets/Bitmapa.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        }
      </View>
      <View style={{ flex: 6.5 }}>
        <View style={styles.title}>
          <Text style={{ fontSize: 17 }}>{title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo
              name={"star"}
              size={16}
              style={{ color: Colors.black, marginRight: 2 }}
            />
            <Text>{rate}</Text>
          </View>
        </View>
        <View style={{ flex: 5, overflow: "hidden" }}>
          <Text
            style={{ color: Colors.slideClr, fontSize: 14, letterSpacing: -0.2 }}>{discriptiona.substring(0, 130)}
          </Text>
        </View>
        <View style={{ flex: 3, justifyContent: "flex-end", alignItems: "center", flexDirection: "row" }}>
          <TouchableOpacity style={styles.MsgBtn}>
            <Text
              style={{ color: Colors.white, fontSize: 13 }}>Details
                    </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
};
const styles = StyleSheet.create({
  item: {
    height: 130,
    width: "100%",
    borderTopWidth: 0.5,
    borderColor: Colors.slideClr,
    flexDirection: "row",
  },
  MsgBtn: {
    height: "80%",
    width: 100,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
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
export default MyPost;