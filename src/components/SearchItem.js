import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Card, Title, Paragraph, Button} from 'react-native-paper';
import IngredientsBadges from './IngredientsBadges';

export default props => {
  let {cocktail} = props;

  return (
    <View>
      <Card style={styles.cardStyle} ele>
        <Card.Title title={cocktail.strDrink} subtitle={cocktail.strCategory} />
        <Card.Cover source={{uri: cocktail.strDrinkThumb}} />
        <Card.Content>
          <ScrollView
            style={styles.badgeContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <IngredientsBadges cocktail={cocktail} />
          </ScrollView>
          <Paragraph style={{marginTop: 15}}>
            {cocktail.strInstructions}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginHorizontal: 20,
    marginVertical: 15,
    elevation: 10,
  },
  container: {
    padding: 15,
    flexDirection: 'row',
  },
  descriptionCon: {
    // backgroundColor: 'red',
    paddingLeft: 15,
    flex: 1,
  },
  imageCon: {
    marginTop: -30,
  },
  imgStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  badgeContainer: {
    flex: 1,
    paddingVertical: 5,
  },
});
