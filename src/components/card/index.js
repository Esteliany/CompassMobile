import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Card = ({title, source, label, hours, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={{
          height: 20,
        }}
      />
      <View style={styles.containerRow}>
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={source}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text>{title}</Text>
          <View style={styles.containerRow}>
            <Text
              style={[
                styles.style_label,
                {
                  marginEnd: 10,
                  color: color,
                },
              ]}>
              {label}
            </Text>
            <Text>{hours}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.containerRow,
          {
            marginTop: 14,
            marginLeft: 7,
          },
        ]}>
        <View
          style={[
            styles.containerRow,
            {
              marginEnd: 10,
            },
          ]}>
          <Image source={require('../../assets/icons/party.png')} />
          <Text style={styles.title_text}>festa</Text>
        </View>
        <View
          style={[
            styles.containerRow,
            {
              marginEnd: 10,
            },
          ]}>
          <Image source={require('../../assets/icons/football.png')} />
          <Text
            style={[
              styles.title_text,
              {
                marginLeft: 4,
              },
            ]}>
            esporte
          </Text>
        </View>
        <View style={styles.containerRow}>
          <Image source={require('../../assets/icons/cooking.png')} />
          <Text
            style={[
              styles.title_text,
              {
                marginLeft: 4,
              },
            ]}>
            cozinha
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.title_text,
          {
            color: '#ACACAC',
            marginLeft: 7,
            marginTop: 10,
          },
        ]}>
        Hoje foi um dia muito bom. Joguei...
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    height: 158,
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  style_label: {
    fontSize: 24,

    lineHeight: 36,
  },
  title_text: {
    fontSize: 12,
  },
});

export default Card;
