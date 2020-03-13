import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
export default class MessageViewer extends Component {
    constructor() {
        super()
        this.state =
        {
            data: [],
            Message: ''
        }
    }
    componentDidMount = () => {
        var ID = this.props.navigation.state.params.UserID;
        fetch('http://192.168.0.115:3010/getUserMessage',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        UId: ID
                    }
                )
            }).then((response) => response.json()).then((responsejson) => {
                switch (responsejson.Message) {
                    case 'ERROR_OCCURED':
                        alert('Error Occured')
                        console.log(responsejson.Err)
                        break;
                    case 'NOT_FOUND':
                        alert("There are No Message")
                        break;
                    case 'DATA_FETCH':
                        var l = (responsejson.Result).length;
                        var row = [];
                        for (let i = 0; i < l; i++) {
                            row.push((responsejson.Result)[i].MText)
                        }
                        this.setState(
                            {
                                data: row
                            }
                        )
                        break;
                }
            })
    }

    save = (item) => {
        return (
            <View style={styles.MessageBox}>
                <Text style={styles.message}>{item}</Text>
            </View>
        )
    }
    sendMessage = () => {
        if (this.state.Message) {
            var Id = this.props.navigation.state.params.UserID;
            var message = this.state.Message;
            var date = new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
            console.log(date)
            fetch('http://192.168.0.115:3010/createMessage',
                {
                    method: 'POST',
                    headers:
                    {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            UserId: Id,
                            Message: message,
                            date: date
                        }
                    )
                }).then((response) => response.json()).then((responsejson) => {
                    switch (responsejson.Message) {
                        case 'ERROR_OCCURED':
                            alert("Some Error Occured")
                            console.log(responsejson.Err)
                            break;
                        case 'MESSAGE_SEND_SUCCESSFULLY':
                            this.componentDidMount();
                            break;
                    }
                })
        }
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.HeaderText}>{this.props.navigation.state.params.Name}</Text>
                </View>
                <ScrollView style={styles.ScrollView}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this.save(item)}
                    />
                </ScrollView>
                <View style={styles.messageSend}>
                    <TextInput style={styles.input} placeholder="Enter Text"
                        defaultValue={this.state.Message} onChangeText={(m) => this.setState({ Message: m })}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.sendMessage.bind(this)}>
                        <Image source={require('../../assets/Send.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        header:
        {
            height: '8%',
            justifyContent: 'flex-start',
            backgroundColor: '#16a085',
            marginBottom: '0.5%'
        },
        HeaderText:
        {
            marginLeft: '3%',
            marginTop: '1.5%',
            fontSize: 25,
            fontWeight: '700',
            color: 'white'
        },
        message:
        {
            backgroundColor: 'white',
            color: 'black',
            fontSize: 20
        },
        MessageBox:
        {
            height: 35,
            width: '70%',
            margin: '2%',
            marginStart: '6%',
            backgroundColor: 'white',
            borderColor: 'black',
            borderWidth: 0.4,
            borderRadius: 20,
        },
        container:
        {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'snow'
        },
        messageSend:
        {
            bottom: '3%',
            width: '100%',
            height: '14%',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingStart: '5%',
            paddingEnd: '5%',
        },
        input:
        {
            flex: 7,
            height: '80%',
            borderWidth: 0.5,
            borderColor: 'black',
            color: 'black',
            fontSize: 18,
            borderRadius: 20,
            backgroundColor: 'white'
        },
        button:
        {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            height: '80%',
            marginLeft: '2%',
        },
        image:
        {
            height: 40,
            width: 40,
            borderRadius: 28,
            backgroundColor: 'white'
        },
        ScrollView: {
            height: '80%'
        }
    }
)