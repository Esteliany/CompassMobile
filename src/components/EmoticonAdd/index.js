import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

export function ItemEmoticon({color, emoticon, text, style}) {
  return (
    <View style={styles.emoticons__item}>
      <Image style={[styles.emoticons__img, style]} source={emoticon} />
      <Text style={[styles.emoticons__text, {color: color}]}>{text}</Text>
    </View>
  );
}
