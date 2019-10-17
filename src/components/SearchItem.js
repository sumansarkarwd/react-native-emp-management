import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Card, Title, Paragraph, Button} from "react-native-paper";

export default (props) => {
    let {cocktail} = props;

    return (
        // <Card style={{margin: 5}}>
        //     <View style={styles.container}>
        //         <Text>{cocktail.strDrink}</Text>
        //     </View>
        // </Card>
        <Card style={styles.cardStyle} ele>
            <Card.Title title={cocktail.strDrink} subtitle={cocktail.strCategory} />
            <Card.Cover source={{ uri:  cocktail.strDrinkThumb}} />
            {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions> */}
        </Card>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        margin: 10,
    },
})