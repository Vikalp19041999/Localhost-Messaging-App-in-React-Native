import React, { Component } from 'react'
import { Dimensions, View, StyleSheet, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'

const x = Dimensions.get('window').width;
console.disableYellowBox = true

export default class Call extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        fetch('http://192.168.0.115:3010/Calls').then((response) => response.json()).then((responsejson) => {
            var url = 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
            switch (responsejson.Message) {
                case 'ERROR_OCURED':
                    alert("There are Error Occured");
                    console.log(responsejson.Err)
                    break;
                case 'NO_CALL':
                    alert("There are no call");
                    break;
                case 'DATA_FETCH':
                    var row = [];
                    var Result = responsejson.Result
                    var l = Result.length;
                    for (let i = 0; i < l; i++) {
                        row.push({ status: Result[i].Type, image: url, name: Result[i].Name, date: Result[i].Date })
                    }
                    this.setState(
                        {
                            data: row
                        }
                    )
            }
        })
    }
    save = (item) => {
        var img;
        if (item.status == 'Video')
            img = require('../../assets/VideoCall.png')
        else
            img = require('../../assets/VoiceCall.png')
        return (
            <TouchableOpacity style={styles.list}>
                <Image style={styles.listImage} source={{ uri: item.image }} />
                <View style={styles.listNameAndMessage}>
                    <Text style={styles.listName}>{item.name}</Text>
                    <Text style={styles.listMessage}>{item.date}</Text>
                </View>
                <Image source={img} style={{ position: 'absolute', right: '7%', height: '30%', width: '6%', alignSelf: 'center' }} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this.save(item)}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.chat}>
                    <Image style={styles.chatIcon} source={require('../../assets/VideoCall.png')} />
                </TouchableOpacity>
            </View>
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
        height: '11%',
        width: '16.5%',
        borderRadius: 50
    },
    chatIcon:
    {
        alignSelf: 'center',
        height: '40%',
        width: '50%',
        position: 'absolute',
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