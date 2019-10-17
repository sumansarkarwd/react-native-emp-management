import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {connect} from "react-redux";
import {fetchRandomCocktail} from "../actions";
import LinearGradient from 'react-native-linear-gradient';
import { Badge } from 'react-native-paper';

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchRandomCocktail();
    }

    renderImage() {
        if(this.props.randomCocktail) {
            return (
                <Image source={{
                    uri: this.props.randomCocktail.strDrinkThumb,
                }}
                style={{
                    height: "100%",
                    width: "100%",
                }}
                />
            );
        }
    }

    renderDetails() {
        if(this.props.randomCocktail) {
            return (
                <View>
                    <Text style={[styles.detailsText, styles.drinkName]}>{this.props.randomCocktail.strDrink}</Text>
                    <Badge>suman</Badge>
                </View>
            )
        }
    }

    render() {
        // console.log(this.props.randomCocktail.strDrinkThumb);
        
        return (
            <View style={styles.container}>
                {this.renderImage()}
                <View style={styles.overlayContainer}>
                    <LinearGradient 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.6)', 'rgba(0,0,0,.9)']} 
                    style={styles.linearGradient}>
                        <View style={styles.detailsCon}>
                            {this.renderDetails()}
                        </View>
                    </LinearGradient>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    overlayContainer: {
        height: 'auto',
        width: "100%",
        // backgroundColor: "rgba(255, 255, 255, 0.5)",
        position: 'absolute',
        bottom: 0,
    },
    linearGradient: {
        // flex: 1,
        // height: 200,
        padding: 15,
    },
    detailsCon: {

    },
    detailsText: {
        color: "#fff",
        fontSize: 20,
    },
    drinkName: {
        fontSize: 30,
        color: "#FFC107",
    },
});

const mapStateToProps = state => {
    return {
        randomCocktail: state.randomCocktail
    };
}

export default connect(mapStateToProps, {fetchRandomCocktail})(HomePage);