import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { Gift } from '../models/giphy';

const GifDetail = ({ route }) => {
  const item: Gift = route.params.item;

  return (
    <View style={styles.container}>
      <Text h3 style={{textAlign: 'center', color: '#42a7f5', textTransform: 'capitalize'}}>{item.title}</Text>
      <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
        <Image source={{ uri: item.images.downsized.url }} PlaceholderContent={<ActivityIndicator />} style={{width: 300, height: 300}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  }
});


export default GifDetail;
