import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await axios(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    setAlbums(response.data);
  };

  const RenderAlbums = () => {
    return (
      <>
        {albums.map((album) => (
          <AlbumDetail key={album.title} album={album} />
        ))}
      </>
    );
  };

  return (
    <ScrollView>
      {albums.length > 0 ? (
        <RenderAlbums />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </ScrollView>
  );
};

export default AlbumList;

const styles = StyleSheet.create({});
