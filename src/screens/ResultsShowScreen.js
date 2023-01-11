import React, { useState, useEffect } from 'react';
import { ScrollView, View, Image, Text, FlatList, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResults = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResults(id);
    }, [])

    if (!result) {
        return null;
    }

    const getLabel = () => {
        return <Text style={styles.label}>{result.name}</Text>
    }

    const getAddress = () => {
        return <Text style={styles.textStyle}>Address: {result.location["address1"]}, {result.location["city"]}, TX</Text>
    }

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }} />
            }}
            ListHeaderComponent={getLabel}
            ListFooterComponent={getAddress}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 380,
        alignSelf: "center",
        marginTop: 10
    },
    label: {
        textAlign: "center",
        fontSize: 21,
        fontWeight: "bold"
    },
    textStyle: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 10,
    }
});

export default ResultsShowScreen;