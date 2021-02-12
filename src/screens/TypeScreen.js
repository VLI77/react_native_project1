import React, {useLayoutEffect, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated} from "react-native";
import {getLatest, getMovie} from "../services/movie";
import {Dimensions} from "react-native";

export const TypeScreen = (props) => {
    const {route, navigation} = props;
    const [movie, setMovie] = useState(null);
    const [positionLeft, setPositionLeft] = useState(new Animated.Value(Dimensions.get('window').width));
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route && route.params && route.params.title ? route.params.title : 'Dernier film sortit'
        })
    })
    useEffect(() => {
        Animated.spring(
            positionLeft,
            {
                toValue: 0,
                speed: 50,
                bounciness: 50
            }
        ).start()
        if (route && route.params && route.params.id) {
            getMovie(route.params.id)
                .then(setMovie)
        } else {
            getLatest()
                .then(setMovie)
        }
    }, [])

  


    return (
        <View style={styles.page}>
            <Text>cc</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    imageBg: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 350,
        resizeMode: 'cover',
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 36,
    },
    headerInfo: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    image: {
        borderColor: "#ffffff",
        borderRadius: 15,
        borderWidth: 4,
        height: 134,
        marginRight: 15,
        width: 84,
    },
    imagePlay: {
        alignSelf: "flex-end",
        height: 58,
        width: 58,
    },
    director: {
        fontSize: 13,
        fontWeight: "100",
        marginBottom: 10,
    },
    movie: {
        display: "flex",
        flexDirection: "column",
        paddingBottom: 120,
        paddingLeft: 18,
        paddingRight: 18,
        top: -35,
        zIndex: 1,
    },
    averageNote: {
        fontWeight: 'bold'
    },
    good_film: {
        color: 'green'
    },
    bad_film: {
        color: 'red',
    },
    overview: {
        lineHeight: 24,
    },
    overviewTitle: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 10,
    },
    footer: {
        backgroundColor: "#ffffff",
        bottom: 0,
        left: 0,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 12,
        position: "absolute",
        right: 0,
        zIndex: 2
    },
})
