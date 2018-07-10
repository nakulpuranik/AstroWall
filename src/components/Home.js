import React, { Component } from 'react';
import { Image, View, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../redux/modules/Home/HomeAction';
import * as Strings from '../strings';
import { log, showAlert } from '../helper';
import {
  Container, Header, Content,
  Card, CardItem, Body, Text,
  Title, Right, Button, Form,
  Item, Input, Footer, Spinner,Grid,Row,Col,Left
} from 'native-base';

/**
 * Home screen component shows the APOD.
 */
class Home extends Component {

    renderAPOD(){
        return(
            <Grid>
                <Row size={75}>
                </Row>
                <Row size={25}> 
                </Row>
            </Grid>
        );
    }

    render(){
        return(
            <Container style={{ flex: 1 }}>
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
    }
  };

  const mapStateToProps = ({ home }) => {
    const {} = home;
    return {};
  };

  export default connect(mapStateToProps,{})(Home);