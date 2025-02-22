import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = (props) => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});
