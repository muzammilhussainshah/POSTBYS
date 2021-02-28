import { connect } from 'react-redux';
import AppContainer from '../../../container/AppContainer';  
import React, {
  useState
} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet, 
} from 'react-native';
const BagScreen = ({ }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <AppContainer
      route={"BagScreen"}
    >
      <View style={{ flex: 10 }}>
        <Text>BagScreen</Text>
      </View>
    </AppContainer >
  )
};
const styles = StyleSheet.create({
});
const mapStateToProp = ({ root }) => ({
})
const mapDispatchToProp = (dispatch) => ({
})
export default connect(mapStateToProp, mapDispatchToProp)(BagScreen);