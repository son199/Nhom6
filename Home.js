import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

import Banner from './banner';

export default class Home extends Component {
    static navigationOptions = {
        title: '                          THUÊ XE MÁY GIÁ RẼ',
    };
    constructor(props) {
        super(props);
        // Khai báo listProduct rỗng
        this.state = {
            listProduct: []
         };
    }
    componentDidMount() {
        fetch('http://192.168.183.1:8080/listbooks.php')
            .then((response) => response.json())
            .then((responseJson) => {
                 this.setState({
                       listProduct: responseJson,
                 });
             });
        }
//giữ nguyên-----------------------------------------------------------------
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <View style={styles.banner}>
                <Banner/>
                </View>
                <View style={styles.listProduct}>
                    {/* Dùng Flatlist show danh sách product */}
                    <FlatList
                        data={this.state.listProduct}
                        renderItem={({ item }) => (
                            <View style={styles.productView} >
                                <TouchableOpacity style={styles.productTouch}>
                                    <Image source={{ uri: item.image }} style={styles.productImage} />
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.detailTouch}
                                    onPress={() => { this.props.navigation.navigate('Detail', {product : item}) }}
                                >
                                    <Text>Xem chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        numColumns={3}
                    />
                </View>
            </View>
        )
    }
}
// Định dạng styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1 / 8,
        backgroundColor: '#f4511e',
    },
    banner: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    listProduct: {
        flex: 6 / 8,
    },
    /* List product */
    listProduct: {
        flex: 1
    },
    productView: {
        flex: 1 / 3,
        borderRadius: 2,
        margin: 4,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4
    },
    productTouch: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: 80,
        height: 100,
        marginTop: 10,
        marginBottom: 15
    },
    productName: {
        fontSize: 15,
    },
    productPrice: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8
    },
    detailTouch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: '#f9f9f9'
    }
})