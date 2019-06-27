import React, { Fragment, Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Button, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet } from 'react-native';

// import styles from './styles';

const messages = [
  { id: 1, name: 'Diego Fernandes', avatar_url: '', last_message: 'Lorem ipsum', time: '18:20 PM' },
  { id: 2, name: 'Claudio Orlandi', avatar_url: '', last_message: 'Lorem ipsum', time: '10:12 AM' },
];

const blogList = [
  {
    id: 1,
    title: 'Mylka',
    image_url: 'http://www.apams.com.br/class/phpThumb/phpThumb.php?src=../../upload/mod_equipes/157/5c9b69c3ca6a2.jpg&w=680',
    description: 'Mylka foi encontrada por uma antiga colaboradora do abrigo, foi achada na rua muito fraca e desnutrida e ainda portando TVT. Hoje, após muitos cuidados e atendimentos ela esta muito bem nutrida e feliz , mas pode ficar ainda mais , só falta um novo lar!',
    likes: '999',
  },
  {
    id: 2,
    title: 'Mateus',
    image_url: 'http://www.apams.com.br/class/phpThumb/phpThumb.php?src=../../upload/mod_equipes/195/5ca4bfe21b586.jpg&w=680',
    description: 'Mateus foi resgatado pela Samara, precisou ser resgatado após estar doente na rua sem auxilio nenhum, trouxemos ao abrigo para todos procedimentos necessarios.',
    likes: '998',
  },
];

const Home = ({ blogList }) => (
  <Content>
    {blogList.map(blog => (
      <Card key={blog.id}>
        <CardItem>
          <Left>
            <Body>
              <Text>{blog.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: blog.image_url }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>{blog.description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{blog.likes}</Text>
            </Button>
          </Left>
          <Body />
          <Right>
          </Right>
        </CardItem>
      </Card>))}
  </Content>
);

const Messages = ({ messages }) => (
  <Fragment>
    <List>
      {messages.map( message => (
        <ListItem avatar key={message.id}>
          <Left>
            <Thumbnail source={{ uri: message.avatar_url}} />
          </Left>
          <Body>
            <Text>{message.name}</Text>
            <Text note>{message.last_message}</Text>
          </Body>
          <Right>
            <Text note>{message.time}</Text>
          </Right>
        </ListItem>
      ))}
    </List>
  </Fragment>
);

const Notification = () => null;

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    title: 'Titulo',
    image: 'url',
    likes: '',
    desc: '',
    date: 'date/time',
  };

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#f96" style={styles.header} hasTabs>
          <Left>
            <Thumbnail small source={require('../../images/logo.png')} />
          </Left>
          <Body>
            <Title>APAMS</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <Tabs>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
              <Home blogList={blogList} />
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
              <Notification />
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
              <Messages messages={messages} />
            </Tab>
          </Tabs>
        </View>
      </Container >
    );
  }
}



const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#f96",
  },
  header: {
    backgroundColor: "#f96",
  },
  container: {
    flex: 1,
  }
});

