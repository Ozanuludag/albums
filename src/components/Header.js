import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
  const {container, textStyle} = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    paddingVertical: 30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
