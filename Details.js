import React from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import fire from './config/Fire';

class DetailsScreen extends React.Component {
	state = {
		name: null,
		beeps: []
	};

	submit = () => {
		let name = this.state.name

		fire.database().ref('beep-react').push({
			name: name + ' hizo un beep!'
	    });
	}
	
	handleFirebaseChildAdded = (snapshot, id) => {
		//.on -> leer datos de una ruta de acceso y detectar los posibles cambios 
		let data = snapshot.val();
		if (!id) return;
		data.id = id
		let beeps = this.state.beeps.concat([data]);
		// let beeps = [data].concat(this.state.beeps)

		this.setState({beeps})
	}

	async makeRemoteRequest() {
		let events = [];
		var leadsRef = fire.database().ref('beep-react');
		leadsRef.on('child_added', this.handleFirebaseChildAdded);
	}

	componentDidMount () {
		const { navigation } = this.props;
		const name = navigation.getParam('name');

		this.setState({ name });

		this.makeRemoteRequest(); 
	}

	componentWillUnmount () {
		var leadsRef = fire.database().ref('beep-react');
		leadsRef.off('child_added', this.handleFirebaseChildAdded);
	}

	render() {	 
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen, Hola {this.state.name}!</Text>
				<FlatList
					data={this.state.beeps}
					renderItem={({item}) => <Text>{item.name}</Text>}
					keyExtractor={(item) => item.id}
				/>
				<Button
					title="click here to beep"
					onPress={this.submit}
				/>
			</View>
		);
	}
}


export default DetailsScreen;
