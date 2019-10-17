import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Item from './SearchItem';

class SearchResults extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={this.props.cocktails}
          renderItem={({item}) => <Item cocktail={item} />}
          keyExtractor={item => item.idDrink}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cocktails: state.searchResults,
  };
};

// export default connect(mapStateToProps, null)(SearchResults);
export default connect(
  mapStateToProps,
  null,
)(SearchResults);
