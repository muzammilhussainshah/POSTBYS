import Colors from "../../common/Colors";
import LoginBtn from "../../components/LoginBtn";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from "react";
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
const PostItemScreen = ({ }) => {
    const [value, onChangeText] = React.useState();
    return (
        <ScrollView   >
            <View style={{ height: flex1 * 3, borderBottomWidth: 0.5, }}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20 }}>Post New Item</Text>
                    <TouchableOpacity
                    onPress={()=> Actions.pop()}>
                        <Entypo
                            name="cross"
                            style={{ fontSize: 30, color: Colors.slideClr }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 7, paddingHorizontal: 10, paddingBottom: 10 }}>
                    <View style={{ flex: 2, justifyContent: "center" }}>
                        <Text style={{ fontSize: 15 }}>Pictures</Text>
                    </View>
                    <View style={{ flex: 8, justifyContent: "space-between", flexDirection: "row" }}>
                        <TouchableOpacity style={styles.ImagePic}>
                            <FontAwesome
                                name="photo"
                                style={{ fontSize: 40, color: Colors.gray }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImagePic}>
                            <FontAwesome
                                name="photo"
                                style={{ fontSize: 40, color: Colors.gray }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ImagePic}>
                            <FontAwesome
                                name="photo"
                                style={{ fontSize: 40, color: Colors.gray }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ height: flex1 * 7, paddingHorizontal: 10 }}>
                <View style={{ flex: 2, justifyContent: "space-evenly" }}>
                    <Text>Title</Text>
                    <TextInput
                        style={{ height: 50, paddingHorizontal: 10, borderWidth: 0.5 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
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
                        <Text>Title</Text>
                        <TextInput
                            style={{ height: 50, paddingHorizontal: 10, borderWidth: 0.5 }}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            placeholder={"Enter Title"}
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
        paddingHorizontal: 10,
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
export default PostItemScreen;
