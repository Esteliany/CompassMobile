import React from 'react';
import {TextInput as Inputcomponent, StyleSheet} from 'react-native';

const Input = props => {
  return <Inputcomponent placeholder={props.text} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    width: 321,
    height: 46,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
  },
});

export default Input;
