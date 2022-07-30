import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import ActivitiesConfig from './ActivitiesConfig';

function ItemActivities({id, name, style, color, isActive}) {
  const {iconsOfActivities, namesOfActivities} = ActivitiesConfig();
  console.log('', name);
  return (
    <View style={styles.activities__item}>
      <View style={[styles.box__icon, style]}>
        {name === 'sports' && (
          <Image
            key={id}
            source={require('../../assets/atividades/sports.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'shopping' && (
          <Image
            key={id}
            source={require('../../assets/atividades/shopping.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'rest' && (
          <Image
            key={id}
            source={require('../../assets/atividades/rest.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'party' && (
          <Image
            key={id}
            source={require('../../assets/atividades/party.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'movies' && (
          <Image
            key={id}
            source={require('../../assets/atividades/movies.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'good_meal' && (
          <Image
            key={id}
            source={require('../../assets/atividades/good_meal.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'games' && (
          <Image
            key={id}
            source={require('../../assets/atividades/games.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'date' && (
          <Image
            key={id}
            source={require('../../assets/atividades/date.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
        {name === 'cooking' && (
          <Image
            key={id}
            source={require('../../assets/atividades/cooking.png')}
            style={[styles.activities__icon, {color: color}]}
          />
        )}
      </View>
      <View>
        <Text style={styles.activities__text}>{namesOfActivities[name]}</Text>
      </View>
    </View>
  );
}

export default ItemActivities;
