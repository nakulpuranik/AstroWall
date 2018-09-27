import React, { Component } from 'react';
import { Image, View, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import WallPaperManager from 'react-native-wallpaper-enhanced';
import {  } from '../redux/modules/Home/HomeAction';
import * as Strings from '../strings';
import { log } from '../helper';
import {
    Container, Header, Content, Body, Text,
    Title, Right, Footer, Spinner,Grid,Row } from 'native-base';

/**
 * Home screen component shows the APOD.
 */
class Home extends Component {

    /**
     * This function will render the APOD view.
     */
    renderAPOD(){
        if(this.props.loading){
            return (
                <Spinner color='blue' />    
            );  
        }
        return(
            <Grid>
                <Row size={75}>
                    <TouchableNativeFeedback style onLongPress={this.onImageLongPress()} >
                        <Image
                                style={styles.wallpaperImage}
                                source={{uri: 'https://apod.nasa.gov/apod/image/1807/LLPeg_HubblePestana_2000.jpg'}}
                                resizeMode="contain"
                            />
                    </TouchableNativeFeedback>
                </Row>
                <Row size={25}>
                    <Text>{Strings.homeText}</Text>
                </Row>
            </Grid>
        );
    }

    /**
     * This sets the wallpaper to the device
     */
    onImageLongPress(){
        log();
        WallPaperManager.setWallpaper({uri: 'https://apod.nasa.gov/apod/image/1807/LLPeg_HubblePestana_2000.jpg'}, (res)=> console.log(res));
    }

    render(){
        return(
            <Container style={styles.mainContainer}>
                <Header>
                    <Body>
                        <Title>AstroWall</Title>
                    </Body>
                <Right />
                </Header>

                <Content padder contentContainerStyle={styles.cardContainer}>
                    <View>
                        <Text>APOD</Text>
                    </View>
                    {this.renderAPOD()}
                </Content>

                <Footer style={styles.footerContainer}>
                    <Text>
                        {Strings.homeText}
                    </Text>
                </Footer>
            </Container>
        );
    }
}

const styles = {
    mainContainer:{
        flex: 1 
    },
    wallpaperImage : {
        flex:1, 
        height: undefined, 
        width: undefined
    },
    cardContainer: {
        flexDirection: 'column',
        flex: 1
    },
    footerContainer: {
        backgroundColor: '#F8F8F8',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center'
    },
    text: { }
};

const mapStateToProps = ({ home }) => {
    const { loading } = home;
    return { loading };
};

export default connect(mapStateToProps,{})(Home);