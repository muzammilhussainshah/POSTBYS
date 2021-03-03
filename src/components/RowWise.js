
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Colors from '../common/Colors';
import React from "react";
import { Actions } from 'react-native-router-flux';

const RowWise = ({ title, title2 }) => (
  <TouchableOpacity 
  onPress={()=>Actions.Categories()}
  style={styles.item}>
    <View style={{ flex: 1, }}>
      {title == "CES Tech" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmaph.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "The National Sports" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmapgg.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "International apparel" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmapsad.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "Hong Kong Jewelry" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmapasd.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "Las Vegas Antique" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmapasdasd.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
      {title == "International apparela" &&
        < FastImage
          style={{ height: 130, width: 130, }}
          source={require("../assets/Bitmap.png")}
          resizeMode={FastImage.resizeMode.contain}
        />
      }
    </View>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
      <Text style={{ fontSize: 15, marginRight: 15 }}>{title}</Text>
      {title2 &&
        <Text style={{ fontSize: 15, marginRight: 15 }}>{title2}</Text>
      }
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  item: {
    height: 90,
    width: "100%",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: Colors.slideClr,
    flexDirection: "row",
    marginBottom: 10
  },
});
export default RowWise; 