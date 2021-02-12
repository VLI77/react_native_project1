import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet, Image} from "react-native";

export const Search = (props) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const onChangeText = (text) => {
        setIsDisabled(text === '')
        props.handleSearch(text);
    }

    return (
        <View>
            <View style={styles.main_container}>
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.textinput}
                        placeholder='Titre du film'
                        onChangeText={onChangeText}
                    />
                </View>
                <View style={styles.button}>
                <Button color='#B5A90F'  disabled={isDisabled} title='Rechercher' onPress={() => props.handleClickButton()}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        flexDirection:'row-reverse'
    },
    main_container: {
        padding: 30,
        backgroundColor: '#B00020',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    input_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingLeft: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    picto: {
        width: 25,
        height: 25
    },
    textinput: {
        width:'100%',
        height: 50,
        paddingLeft: 10,
        fontWeight: 'bold',
        color: '#B00020',
    }
})
