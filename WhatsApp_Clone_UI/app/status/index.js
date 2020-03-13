import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'

const x = Dimensions.get('window').width;
console.disableYellowBox = true

export default class Status extends Component {
    data = [{
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    },
    {
        image: 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'Nature', date: new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear(), status: '#2ecc71'
    }]
    save = (item) => {
        return (
            <View style={styles.list} >
                <TouchableOpacity onPress={() => item.status = '#ffffff'}>
                    <Image source={{ uri: item.image }} style={styles.listImage} />
                </TouchableOpacity>
                <View style={styles.listNameAndMessage}>
                    <Text style={styles.listName} >{item.name}</Text>
                    <Text style={styles.listMessage}>{item.date}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.list}>
                    <Image source={require('../../assets/user.png')} style={styles.listImage} />
                    <View style={styles.listNameAndMessage}>
                        <Text style={styles.listName}>My Status</Text>
                        <Text style={styles.listMessage}>Tap to add new status update</Text>
                    </View>
                    <Text style={[styles.listDate, { fontSize: 25, marginRight:'3%' }]}>...</Text>
                </View>
                <View style={styles.recentlyUploadedContainer}>
                    <Text style={styles.recentlyUploaded}>Recent Updates</Text>
                </View>
                <View>
                    <FlatList
                        data={this.data}
                        renderItem={({ item }) => this.save(item)}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
    },
    list:
    {
        flexDirection: 'row',
        height: 80,
        width: x,
        paddingLeft: '2%',
        paddingRight: '1%',
        backgroundColor: 'snow',
        marginBottom: '0.1%'
    },
    listImage:
    {
        marginLeft: '2%',
        height: 65,
        width: 65,
        marginTop: 5,
        borderRadius: 40
    },
    listNameAndMessage:
    {
        alignSelf: 'center',
        marginStart: '5%',
    },
    listName:
    {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    listMessage:
    {
        fontSize: 15,
        color: '#636e72'
    },
    listDate:
    {
        color: 'black',
        fontSize: 13,
        position: 'absolute',
        right: '1%',
        top: '20%'
    },
    chat:
    {
        position: 'absolute',
        bottom: '10%',
        right: '7%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: "center",
        backgroundColor: '#16a085',
        height: '9%',
        width: '13%',
        borderRadius: 40
    },
    chatIcon:
    {
        alignSelf: 'center',
        height: '90%',
        width: '90%',
        position: 'absolute',
        start: '-10%'
    },
    recentlyUploadedContainer: {
        height: '3%',
        width: '100%'
    },
    recentlyUploaded: {
        marginTop: '1%',
        marginLeft: '4%',
        color: '#636e72',
        fontSize: 17,
        fontWeight: 'bold'
    }
})