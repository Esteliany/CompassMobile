import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({
  onPress,
  text,
  backgroundButton = 'PRIMARY' || 'SECONDARY' || 'TERCIARY',
}) => {
  return (
    <>
      {backgroundButton === 'PRIMARY' && (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
      {backgroundButton === 'SECONDARY' && (
        <TouchableOpacity onPress={onPress} style={styles.container_SECONDARY}>
          <Text style={styles.text_WITH}>{text}</Text>
        </TouchableOpacity>
      )}
      {backgroundButton === 'TERCIARY' && (
        <TouchableOpacity onPress={onPress} style={styles.container_TERCIARY}>
          <Text style={styles.text_BLACK}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 133,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#C6CEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  container_SECONDARY: {
    width: 300,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#304FFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  container_TERCIARY: {
    width: 300,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderColor: '#000',
    borderWidth: 3,
  },
  text: {
    fontSize: 15,
    color: '#304FFE',
  },
  text_WITH: {
    fontSize: 15,
    color: '#FFF',
  },
  text_BLACK: {
    fontSize: 15,
    color: '#000',
  },
});

export default Button;
