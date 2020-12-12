import React from 'react';
import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {image, title, artist, thumbnail_image, url} = album;
  const {
    img,
    thumbnailImg,
    headerContentStyle,
    imageContainerStyle,
    textStyle,
  } = styles;
  console.log(album);
  return (
    <Card>
      <CardSection>
        <View style={imageContainerStyle}>
          <Image
            style={thumbnailImg}
            source={{
              uri: thumbnail_image,
            }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={textStyle}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={img}
          source={{
            uri: image,
          }}
        />
      </CardSection>
      <CardSection>
        <View style={{flex:1}}>
          <Button onPress={() => Linking.openURL(url)}>
            Buy now!
          </Button>
        </View>
       
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;

const styles = StyleSheet.create({
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textStyle: {
    fontSize: 18,
  },
  thumbnailImg: {
    width: 50,
    height: 50,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  img: {
    height: 300,
    flex: 1,
    width: null,
  },
});
