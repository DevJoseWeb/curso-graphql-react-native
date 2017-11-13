/* Core */
import React from 'react';

/* Presentational */
import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Input from './components/Input';

StatusBar.setBarStyle('light-content');

const Chat = () => (
  <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
  >
    <ScrollView
      contentContainerStyle={styles.conversation}
      keyboardDismissMode={Platform.OS === 'android' ? 'on-drag' : 'interactive'}
      keyboardShouldPersistTaps="never"
    >
      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-left']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem como resposta com um texto bem grande!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>

      <View style={[styles.bubble, styles['bubble-right']]}>
        <Text style={styles.author}>Diego</Text>
        <Text style={styles.message}>Opa galera, testando a mensagem!</Text>
      </View>
    </ScrollView>

    <Input />
  </KeyboardAvoidingView>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C4241',
    ...Platform.select({
      ios: { paddingTop: 20 },
    }),
  },

  conversation: {
    padding: 10,
  },

  bubble: {
    padding: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0,
    maxWidth: width - 60,
    marginTop: 10,
  },

  'bubble-left': {
    alignSelf: 'flex-start',
  },

  'bubble-right': {
    alignSelf: 'flex-end',
    backgroundColor: '#D1EDC1'
  },

  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    color: '#333',
  },

  message: {
    fontSize: 16,
    color: '#333',
  },
});

export default Chat;
