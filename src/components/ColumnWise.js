
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import React from "react";
const ColumnWise = ({ title, title2 }) => (
  <TouchableOpacity
    onPress={() => Actions.Categories({ title })}
    style={styles.item2}>
    <View style={{ flex: 1, alignItems: "center" }}>
      {title == "CES Tech" &&
        < FastImage
          style={{ height: 170, width: 170, }}
          source={require("../assets/Bitmaph.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "The National Sports" &&
        < FastImage
          style={{ height: 170, width: 170, }}
          source={require("../assets/Bitmapgg.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "International apparel" &&
        < FastImage
          style={{ height: 170, width: 170, }}
          source={require("../assets/Bitmapsad.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "Hong Kong Jewelry" &&
        < FastImage
          style={{ height: 170, width: 170, }}
          source={require("../assets/Bitmapasd.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "Las Vegas Antique" &&
        < FastImage
          style={{ height: 170, width: 170, }}
          source={require("../assets/Bitmapasdasd.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "International apparela" &&
        < FastImage
          style={{ height: 110, width: 110, }}
          source={require("../assets/Bitmapz.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 15, }}>{title}</Text>
      {title2 &&
        <Text style={{ fontSize: 15, }}>{title2}</Text>
      }
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  item2: {
    height: 170,
    width: "48%",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.slideClr,
    marginBottom: 10,
    marginRight: 10
  },
});
export default ColumnWise;