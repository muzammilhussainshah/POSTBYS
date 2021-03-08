import Colors from "../../../common/Colors";
import LoginBtn from "../../../components/LoginBtn";
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from "react-native-router-flux";
const screenHeight = Dimensions.get('window').height - 24;
const flex1 = screenHeight / 10;
const Plus = ( ) => {
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();

  const getDocument = async () => {

    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,"asds"
      );

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }

  }


  return (
    <ScrollView   >
      <View style={{ height: flex1 * 3, borderBottomWidth: 0.5, }}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>Post New Item</Text>
          <TouchableOpacity
            onPress={() => Actions.pop()}>
            <Entypo
              name="cross"
              style={{ fontSize: 30, color: Colors.slideClr }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 7, paddingHorizontal: 15, paddingBottom: 10 }}>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={{ fontSize: 15 }}>Pictures</Text>
          </View>
          <View style={{ flex: 8, justifyContent: "space-between", flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => getDocument()}
              style={styles.ImagePic}>
              <FontAwesome
                name="photo"
                style={{ fontSize: 40, color: Colors.gray }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getDocument()}
              style={styles.ImagePic}>
              <FontAwesome
                name="photo"
                style={{ fontSize: 40, color: Colors.gray }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => getDocument()}
              style={styles.ImagePic}>
              <FontAwesome
                name="photo"
                style={{ fontSize: 40, color: Colors.gray }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ height: flex1 * 7, paddingHorizontal: 15 }}>
        <View style={{ flex: 2, justifyContent: "space-evenly" }}>
          <Text>Title</Text>
          <TextInput
            style={{ height: 50, paddingHorizontal: 10, borderWidth: 0.5 }}
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder={"Enter Title..."}
          />
        </View>
        <View style={{ flex: 3, justifyContent: "space-evenly" }}>
          <Text>Discription</Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            placeholder={"Write a detailed discription..."}
            style={styles.textArea} />
        </View>
        <View style={{ flex: 3 }}>
          <View style={{ height: "60%", justifyContent: "space-evenly" }}>
            <Text>Tags</Text>
            <TextInput
              style={{ height: 50, paddingHorizontal: 10, borderWidth: 0.5 }}
              onChangeText={text => setTag(text)}
              value={tag}
              placeholder={"Type new tag"}
            />
          </View>
        </View>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <LoginBtn
            _func={() => Actions.Home()}
            name={"Post"}
            backgroundColor={Colors.black}
            textColor={Colors.white}
            borderRadius={0} />
        </View>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  header: {
    flex: 3,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  ImagePic: {
    width: "32%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.slideClr,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed"
  },
  textArea: {
    height: 100,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    textAlignVertical: 'top',
  },
});
export default Plus;