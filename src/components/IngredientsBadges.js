import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default props => {
  let {cocktail} = props;
  let badges = getBadges(cocktail);

  return badges.map(badge => {
    return (
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#BF360C',
    margin: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  badgeText: {
    color: 'white',
    letterSpacing: 1,
  },
});

const getBadges = cocktail => {
  let list = [];
  for (let index = 1; index < 16; index++) {
    if (cocktail['strIngredient' + index]) {
      list.push(cocktail['strIngredient' + index]);
    }
  }
  return list;
};
