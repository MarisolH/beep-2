import React from 'react';
import { Button, View, Text, TextInput} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './Details'; 
import fire from './config/Fire';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  submit(){
    console.log(this.state.text);
        fire.database().ref('beep-react').push({//crea un nuevo registro en la bd
        name: this.state.text + ' hizo un beep!'
      });
      // let beeps = this.st.beeps.concat([this.input]);
      // this.setState({beeps});
    }
  render() {
    const all= {
      name: this.state.text
    };
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Esccribe nombre!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text}
        </Text>
        <Button
          title="Siguiente"
          onPress={() => this.props.navigation.navigate('Details', all, this.submit())}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
