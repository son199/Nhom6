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