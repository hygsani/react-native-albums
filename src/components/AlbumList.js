import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
    render() {
        const { viewStyle } = styles;

        return(
            <View style={viewStyle}>
                <Text>Album List</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        paddingTop: 15,
        contentJustify: 'center',
        alignItems: 'center'
    }
}

export default AlbumList;