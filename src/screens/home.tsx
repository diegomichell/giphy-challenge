import { NavigationProp } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GifActions from '../actions/gif-actions';
import SearchGiftForm from '../components/forms/search-gift-form';
import { Gift } from '../models/giphy';
import { SearchHistoryItem } from '../models/search-history';

interface HomeProps {
  searchGif: (search: string, onFished: () => void) => void;
  saveSearchHistory: (searchHistory: SearchHistoryItem[]) => void;
  gifs: Gift[];
  error_loading_gifs?: string;
  navigation?: NavigationProp<any>;
  search_history: SearchHistoryItem[];
}

export const Home = ({ searchGif, saveSearchHistory, gifs, error_loading_gifs, search_history, navigation }: HomeProps) => {
  const [isSearching, setIsSearching] = useState(false);

  const doSearch: any = ({ search }) => {
    if (!search) {
      return;
    }

    saveSearchHistory([{ search, searchDate: moment().toISOString() }, ...search_history]);
    setIsSearching(true);
    searchGif(search, () => setIsSearching(false));
  };

  const renderItem = ({ item }: { item: Gift }) => {
    return (
      <Card>
        <Card.Image source={{ uri: item.images.downsized.url }} PlaceholderContent={<ActivityIndicator />} />
        <Text style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 5, textTransform: 'capitalize' }}>
          {item.title}
        </Text>
        <Button
          onPress={() => navigation?.navigate('Gif', {
            item
          })}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title='Check gif' />
      </Card>
    );
  };

  return (
    <View testID='homeContainer' style={styles.container}>
      <SearchGiftForm onSubmit={doSearch} />
      <TouchableOpacity style={{ marginTop: 5 }} onPress={() => navigation?.navigate('GifSearchHistory')}>
        <Text style={{ textAlign: 'center', color: '#42a7f5', fontSize: 16 }}>See search history</Text>
      </TouchableOpacity>

      {error_loading_gifs && (
        <Text style={{ marginTop: 10, fontSize: 16, color: 'red', textAlign: 'center' }}>{error_loading_gifs}</Text>
      )}


      {isSearching ? <ActivityIndicator /> : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={gifs}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = ({ gifs: { gifs, error_loading_gifs, search_history } }) => {
  return {
    gifs,
    error_loading_gifs,
    search_history
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    searchGif(search: string, onFished: () => void) {
      dispatch(GifActions.search(search, onFished));
    },
    saveSearchHistory(searchHistory: SearchHistoryItem[]) {
      dispatch(GifActions.serviceSaveSearchHistory(searchHistory));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
