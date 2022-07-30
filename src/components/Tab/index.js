import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tab = ({onPress, onPressAdd, onPressMenu}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../assets/icons/iconHome.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressAdd}>
        <Image source={require('../../assets/icons/Exclude.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressMenu}>
        <Image source={require('../../assets/icons/iconMenu.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#C4C4C4',
  },
});

export default Tab;
