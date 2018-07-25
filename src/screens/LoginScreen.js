import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight} from 'react-native';
import firebase from 'firebase';

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit() {
    const config = {
      apiKey: 'AIzaSyBpRpqTXwAYNKa75uvOlqu1gEaMBikbtE4',
      authDomain: 'memoapp-209ec.firebaseapp.com',
      databaseURL: 'https://memoapp-209ec.firebaseio.com',
      projectId: 'memoapp-209ec',
      storageBucket: 'memoapp-209ec.appspot.com',
      messagingSenderId: '875297125426',
    };
    firebase.initializeApp(config);
    // this.props.navigation.navigate('Home')

    // log in!!
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          ログイン
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text}); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.Button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>
            ログインする
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  Button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
