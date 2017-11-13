/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Input extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="rgba(0, 0, 0, 0)"
        />
        <TouchableOpacity activeOpacity={0.6} onPress={this.handleAddMessage}>
          <Text style={styles.button}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 42,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fafafa',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12
  },

  button: {
    marginLeft: 10,
    color: '#358CFF',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
