import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import fire from './config/Fire';

class DetailsScreen extends React.Component {
  state = {
    beeps: []
  };
  
  async makeRemoteRequest() {
    try {
      let events = [];
      var leadsRef = fire.database().ref('beep-react');
         leadsRef.on('child_added', (snapshot)=> { 
           //.on -> leer datos de una ruta de acceso y detectar los posibles cambios 
           let data = snapshot.val();
           let items = Object.values(data);
           console.log(items);
           let beeps = this.state.beeps.concat([items]);
           this.setState({beeps})
           
        });
        
    } catch(e) {
        console.warn(e);
    }
  }
  componentWillMount(){
    this.makeRemoteRequest(); 
     }
  render() {
    const { navigation } = this.props;
    const text = navigation.getParam('name');
   
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen, Hola</Text>
        {this.state.beeps.map((beep)=>(
          <FlatList
          data={beep}
          renderItem={({item}) => <Text >{item}</Text>}/>)).reverse()}        
      </View>
    );
  }
}


export default DetailsScreen;
