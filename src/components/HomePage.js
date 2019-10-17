import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import {connect} from "react-redux";
import {fetchRandomCocktail} from "../actions";

class HomePage extends Component {
    componentDidMount() {
        this.props.fetchRandomCocktail();
    }

    renderImage() {
        if(this.props.randomCocktail) {
            return (
                <Image source={{
                    uri: this.props.randomCocktail,
                }}
                style={{
                    height: "100%",
                    width: "100%",
                }}
                />
            );
        }
    }

    render() {        
        return (
            <View style={styles.container}>
                {this.renderImage()}
                <View style={styles.overlayContainer}>
                    <Text>Foo</Text>
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
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        position: 'absolute',
        bottom: 0,
        padding: 15,
    }
});

const mapStateToProps = state => {
    return {
        randomCocktail: state.randomCocktail
    };
}

export default connect(mapStateToProps, {fetchRandomCocktail})(HomePage);