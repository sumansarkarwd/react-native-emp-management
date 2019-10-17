import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

export default props => {
  let {cocktail} = props;

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => Actions.cocktail({cocktail})}>
        <Card style={styles.cardStyle} ele>
          <Card.Title
            title={cocktail.strDrink}
            subtitle={cocktail.strCategory}
          />
          <Card.Cover source={{uri: cocktail.strDrinkThumb}} />
          <Card.Content>
            <ScrollView
              style={styles.badgeContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <Paragraph style={{marginTop: 15}}>
              {cocktail.strInstructions}
            </Paragraph>
          </Card.Content>
        </Card>
      </TouchableWithoutFeedback>
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
