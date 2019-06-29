import React, { Fragment, Component } from "react";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  View,
  Fab,
  List,
  ListItem,
  Thumbnail,
  Text,
  Badge,
  Content,
  Tab,
  Tabs,
  TabHeading,
  Card,
  CardItem,
  Separator,
  Accordion
} from "native-base";
import { Image, StyleSheet, AsyncStorage } from "react-native";
import axios from 'axios';
import api from "../../services/api";

const likes = (id) => {
  axios.get("@AppApams:blogList/posts/like", { id }, {
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

const Home = ({ blogList }) => {

  return (
    <Content>
      {blogList.map(blog => (
        <Card key={blog.id}>
          <CardItem>
            <Left>
              <Body>
                <Text>{blog.title}</Text>
                <Text note>{blog.animalName}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: blog.avatarAnimal }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem style={styles.bordaBottom}>
            <Left>
              <Body>
                <Text>Descrição</Text>
                <Text note>{blog.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent onPress={() => likes(blog.id)}>
                <Icon style={{ color: "#f96" }} type="FontAwesome" name="paw" />
                <Text style={{ color: "#f96" }}>{blog.likes}</Text>
              </Button>
            </Left>
            <Right>
              <Text note>{blog.data}</Text>
            </Right>
          </CardItem>
        </Card>
      ))}
    </Content>
  );
};



// const Messages = ({ messages }) => {
//   if (messages === []) {
//     return;
//   }
//   return( 
//     <Fragment>
//       <List>
//         {messages.map(message => (
//           <ListItem avatar key={message.id}>
//             <Left>
//               <Thumbnail source={{ uri: message.avatar_url }} />
//             </Left>
//             <Body>
//               <Text>{message.name}</Text>
//               <Text note>{message.last_message}</Text>
//             </Body>
//             <Right>
//               <Text note>{message.time}</Text>
//             </Right>
//           </ListItem>
//         ))}
//       </List>
//     </Fragment>
//   );
// };



const Profile = ({ profile }) => {

  return (
    <Container>
        <Content>
          <Separator bordered>
            <Text style={{ fontSize: 15 }}>Dados usuário</Text>
          </Separator>
            <ListItem>
              <Text>Nome: </Text>
              <Text note>{profile[0].name}</Text>
            </ListItem>
            <ListItem last>
              <Text>E-mail: </Text>
              <Text note>{profile[0].email}</Text>
            </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 15 }}>Sobre</Text>
          </Separator>
          <ListItem>
            <Text>Turma ADS - FASIPE 2017/1</Text>
          </ListItem>
          <ListItem last>
            <Text>Data de produção: </Text>
            <Text note>29/06/2019</Text>
          </ListItem>
          <Separator bordered>
            <Text style={{ fontSize: 15 }}>Desenvolvimento</Text>
          </Separator>
          <ListItem style={{ justifyContent: "space-between" }}>
            <Text>Mauro Pacheco Moura </Text>
            <Text note>LinkedIn</Text>
          </ListItem>
          <ListItem style={{ justifyContent: "space-between" }} last>
            <Text>Gabriel Oliveira Marcato </Text>
            <Text note>LinkedIn</Text>
          </ListItem>
        </Content>
      </Container>
  );
};


export default class Main extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      likes: "",
      desc: "",
      date: "",
      blogList: [],
      messages: [],
      profile: [],

    };
  }

  componentWillMount = async () => {
    const blogList = await AsyncStorage.getItem("@AppApams:blogList");
    this.setState({ blogList: JSON.parse(blogList) });

    // const messages = await AsyncStorage.getItem("@AppApams:messages");
    // this.setState({ messages: JSON.parse(messages) });

    const profile = await AsyncStorage.getItem("@AppApams:profile");
    this.setState({ profile: JSON.parse(profile) });

  };

  

  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#f96" style={styles.header} hasTabs>
          <Body style={{ flex: 1, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
            <Thumbnail small source={require("../../images/logo.png")} />
            <Title>   APAMS</Title>
          </Body>
        </Header>
        <View style={styles.container}>
          <Tabs>
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="FontAwesome" name="home" />
                </TabHeading>
              }
            >
              <Home blogList={this.state.blogList} />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="FontAwesome" name="bell-o" />
                </TabHeading>
              }
            >
              {/* <Messages messages={this.state.messages} /> */}
              <View />
            </Tab>
            <Tab
              heading={
                <TabHeading style={styles.tabHeading}>
                  <Icon type="FontAwesome" name="user" />
                </TabHeading>
              }
            >
              <Profile profile={this.state.profile} />
            </Tab>
          </Tabs>
        </View>
      </Container>
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
  },
  bordaBottom: {
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
});
