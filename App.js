import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
      
        <Header headerText={'Albums'} />
        <AlbumList />
       
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
