import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from "react";
import { TextInput, View } from 'react-native';
import Colors from '../common/Colors';

const CustomPicker = ({ maxLength, width, Name, Email, Password, placeholderTextColor, passwordShow, placeHolder, _func, }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ width: 40, justifyContent: "center", alignItems: 'center' }}>
        {Email &&
          <Fontisto name={"at"} size={18} style={{ color: Colors.slideClr }} />
        }
        {Password &&
          <FontAwesome5 name={"star-of-life"} size={15} style={{ color: Colors.slideClr }} />
        }
        {Name &&
          <FontAwesome name={"user"} size={22} style={{ color: Colors.slideClr }} />
        }
      </View>
      <View style={{ flex: 8.7 }}>
        <TextInput
          style={{ fontSize: 17, width: width }}
          maxLength={maxLength}
          onChangeText={(text) => _func(text)}
          placeholder={placeHolder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={passwordShow ? true : false}
        />
      </View>
    </View>
  );
}
export default CustomPicker;