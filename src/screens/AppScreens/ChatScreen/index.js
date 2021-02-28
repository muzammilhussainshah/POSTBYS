import React from "react";
import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import { Text, View, } from 'react-native';

const ChatScreen = ({ }) => {
  return (
    <AppContainer route={"ChatScreen"} >
      {/* body */}
      <View style={{ flex: 7.8, width: "100%", }}>
        <Text >ChatScreen</Text>
      </View>
    </AppContainer >
  )
};
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(ChatScreen);