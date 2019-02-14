import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllPost } from '../actions';
import PostDetail from './PostDetail';



class Homepage extends Component{

    static navigationOptions = {
        tabBarLabel: "Homepage",
        tabBarIcon: () => <Icon name='home' color={'#000'} size={35} />,
    };

    componentDidMount() {
        this.props.getAllPost();
        
    }

    renderPost = () => {
            const listJSX = this.props.postlist.map((item) => {
                return (
                    <PostDetail key={item.uid} post={item} />
                );
            });
            return listJSX;
    }


    render() {
        return (
            <View>
                <Header 
                    containerStyle={{
                        backgroundColor: '#000',
                    }}
                    centerComponent={{text: 'Instagram', style: { color: '#fff', fontSize:20 }}}
                />
                <ScrollView>
                 {this.renderPost()}
                </ScrollView> 
            
                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.postlist); 

    const postlist = _.map(state.postlist, (val,uid) => {
        return { ...val, uid }
    });
    console.log(postlist);

    return {postlist};
};

export default connect(mapStateToProps, { getAllPost })(Homepage);

