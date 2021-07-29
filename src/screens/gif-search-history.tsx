import moment from 'moment';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GifActions from '../actions/gif-actions';
import { SearchHistoryItem } from '../models/search-history';

interface GifSearchHistoryProps {
  search_history: SearchHistoryItem[];
  loadSearchHistory: () => void;
}

interface SearchHistoryListItem {
  item: SearchHistoryItem;
}

const GifSearchHistory = ({ search_history, loadSearchHistory }: GifSearchHistoryProps) => {

  useEffect(() => {
    loadSearchHistory();
  }, []);

  const renderItem = ({ item }: SearchHistoryListItem) => {
    return (
      <ListItem bottomDivider>
        <ListItem.Title>
          {item.search}
        </ListItem.Title>
        <ListItem.Subtitle>
          {moment(item.searchDate).fromNow()}
        </ListItem.Subtitle>
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={search_history}
        ListEmptyComponent={<Text h3 style={{ textAlign: 'center' }}>No search history</Text>}
        renderItem={renderItem}
      />
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

const mapStateToProps = ({ gifs: { search_history } }) => {
  return {
    search_history
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadSearchHistory() {
      dispatch(GifActions.serviceLoadSearchHistory());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GifSearchHistory);
