import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from "react-redux";
import {fetchRandomCocktail, searchCocktail} from "../actions";
import LinearGradient from 'react-native-linear-gradient';
import { Badge } from 'react-native-paper';

class HomePage extends Component {
    state = {
        searchText: "",
    }

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
            let {randomCocktail} = this.props;
            return (
                <View>
                    <Text style={[styles.detailsText, styles.drinkName]}>{randomCocktail.strDrink}</Text>
                    <View style={styles.badgeContainer}>
                        <Badge style={styles.badge}>
                            <Text style={styles.badgeText}>{randomCocktail.strIngredient1}</Text>
                        </Badge>
                        <Badge style={styles.badge}>
                            <Text style={styles.badgeText}>{randomCocktail.strIngredient2}</Text>
                        </Badge>
                        <Badge style={styles.badge}>
                            <Text style={styles.badgeText}>{randomCocktail.strIngredient3}</Text>
                        </Badge>
                        
                    </View>
                </View>
            )
        }
    }

    search() {
        this.props.searchCocktail(this.state.searchText);        
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

                <View style={styles.searchContainer}>
                    <TextInput 
                    style={styles.searchInput}
                    placeholder="Search your Cocktail" 
                    value = {this.state.searchText}
                    onChangeText={(val)=> this.setState({searchText: val})}
                    onSubmitEditing={()=> this.search()}
                    returnKeyType="search"/>
                    
                    <Icon style={styles.iconStyle} name="search" size={30} color="#9e9e9e" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red"
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
    badgeContainer: {
        // backgroundColor: "blue",
        flex: 1,
        flexDirection: "row",
        paddingVertical: 5,
    },
    badge: {
        marginRight: 5,
    },
    badgeText: {
        fontSize: 14,
    },
    searchContainer: {
        // width: "100%",
        // backgroundColor: "red",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        margin: 20,
    },
    searchInput: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        paddingHorizontal: 20,
        borderRadius: 5,
        paddingRight: 57,
    },
    iconStyle: {
        position: 'absolute',
        right: 20,
        top: 8,
    }
});

const mapStateToProps = state => {
    return {
        randomCocktail: state.randomCocktail
    };
}

export default connect(mapStateToProps, {
    fetchRandomCocktail,
    searchCocktail
})(HomePage);