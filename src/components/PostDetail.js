import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './common';

class PostDetail extends Component {
    render() {
        const { link, caption, email } = this.props.post;
        const { 
            thumbnailStyle, 
            headerContentStyle, 
            headerTextStyle, 
            thumbnailContainerStyle,
            imageStyle,
            postContentStyle,
            postEmailStyle,
            postCaptionStyle 
        } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle} >
                        <Image 
                            source={{ uri: link }} 
                            style={thumbnailStyle} 
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image 
                        source={{ uri: link }}
                        style={imageStyle}
                    />
                </CardSection>
                <CardSection style={postContentStyle}>
                    <Text style={postEmailStyle}>{email}</Text>
                    <Text style={postCaptionStyle}>{caption}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 370,
        width: '100%'
    },
    postContentStyle: {
        flexDirection: 'column'
    },
    postEmailStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold'
    },
    postCaptionStyle: {
        flex: 2,
        fontSize: 15,
        marginLeft: 5
    },

};

export default PostDetail;
