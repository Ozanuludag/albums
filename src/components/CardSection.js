import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardSection = (props) => {
return <View style={styles.containerStyle}>{props.children}</View>;
};

export default CardSection;

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 0,
    padding:5,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor: '#ddd',
    position:'relative',
    
 
  },
});
