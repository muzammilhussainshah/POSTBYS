import React from "react";
import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';
import { Text, View, } from 'react-native';

const Plus = ({ }) => {
  return (
    <AppContainer route={"Plus"} >
      {/* body */}
      <View style={{ flex: 7.8, width: "100%", }}>
        <Text >Plus</Text>
      </View>
    </AppContainer >
  )
};
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(Plus);