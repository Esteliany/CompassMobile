import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Button from '../../components/button';
import Card from '../../components/card';
import getCharacteristicEmoticon from '../../components/getEmoticon';
import {ItemEmoticon} from '../../components/EmoticonAdd/index';
import ItemActivities from '../../components/Activities';

import {getActivities, addNewDaily} from '../../services/service';

const AddModal = () => {
  const navigation = useNavigation();
  const [dataActivities, setDataActivities] = useState();
  const [isActiveEmoticon, setIsActiveEmoticon] = useState([]);
  const [listDataActive, setListDataActive] = useState([]);

  console.log('dataActivities', dataActivities);

  const [dataSaved, setDataSaved] = useState({
    daily_entry: {
      mood: '',
      activity_ids: [],
      description: '',
    },
  });

  useEffect(() => {
    getResponseActivities();
  }, []);

  async function getResponseActivities() {
    const dataResponseActivities = await getActivities();
    setDataActivities(dataResponseActivities);
  }

  function handleSaved() {
    const daily_entry = {
      mood: dataSaved?.daily_entry?.mood,
      activity_ids: dataSaved?.daily_entry?.activity_ids,
      description: dataSaved?.daily_entry?.description,
    };

    console.log(daily_entry);
    addNewDaily(daily_entry);
    navigation.navigate('Home');
  }

  return (
    <ScrollView style={styles.centeredView}>
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.button_icon]}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/X.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.button_emojis,
          {
            marginTop: 30,
          },
        ]}>
        <Text style={styles.title}>Como você está?</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <View
          style={[
            styles.view_row,
            {
              marginRight: 10,
            },
          ]}>
          <Image
            style={{
              marginEnd: 10,
            }}
            source={require('../../assets/icons/calendar.png')}
          />
          <Text>HOJE, 23 DE JANEIRO</Text>
        </View>
        <View style={styles.view_row}>
          <Image
            style={{
              marginEnd: 10,
            }}
            source={require('../../assets/icons/three-o-clock-clock.png')}
          />
          <Text>08:35</Text>
        </View>
      </View>
      <View style={styles.container_emojis}>
        {getCharacteristicEmoticon().map(
          ({text, emoticon, color, emoticonText}, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIsActiveEmoticon(index);
                  setDataSaved(value => ({
                    daily_entry: {
                      ...value.daily_entry,
                      mood: emoticonText,
                    },
                  }));
                }}>
                <ItemEmoticon
                  style={isActiveEmoticon === index && styles.emoticons.active}
                  key={index}
                  text={text}
                  color={isActiveEmoticon === index ? color : '#969696'}
                  emoticon={emoticon}
                />
              </TouchableOpacity>
            );
          },
        )}
      </View>
      <View style={styles.button_emojis}>
        <View style={styles.activities}>
          {dataActivities?.map(({id, name}, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  if (listDataActive.length < 3) {
                    setListDataActive([...listDataActive, id]);

                    setDataSaved(value => ({
                      daily_entry: {
                        ...value.daily_entry,
                        activity_ids: [...value.daily_entry.activity_ids, id],
                      },
                    }));
                  }
                  if (listDataActive.includes(id)) {
                    const fullListActives = listDataActive.filter(active => {
                      return active !== id;
                    });
                    setListDataActive([...fullListActives]);

                    setDataSaved(value => ({
                      daily_entry: {
                        ...value.daily_entry,
                        activity_ids: [...fullListActives],
                      },
                    }));
                  }
                }}>
                <ItemActivities
                  key={index}
                  name={name}
                  isActive={listDataActive.includes(id)}
                  style={
                    listDataActive.includes(id) && styles.activities.active
                  }
                  color={listDataActive.includes(id) ? '#eee' : '#111'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View
        style={[
          styles.button_emojis,
          {
            maxWidth: 390,
            marginLeft: '5%',
          },
        ]}>
        <TextInput
          multiline={true}
          style={styles.inputAdd}
          placeholder="Escreva aqui o que aconteceu hoje..."
          onChangeText={description => {
            setDataSaved(value => ({
              daily_entry: {
                ...value.daily_entry,
                description: description,
              },
            }));
          }}
        />
        <Button
          text="SALVAR"
          backgroundButton="SECONDARY"
          style={{
            width: 15,
            height: 15,
          }}
          onPress={() => handleSaved()}
        />
      </View>
      <View
        style={{
          height: 20,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    color: '#000',
  },
  button_icon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    backgroundColor: '#304FFF',
    opacity: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  view_row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container_emojis: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  icons_emojis: {
    width: 43,
    height: 43,
  },
  text_emojis: {
    fontSize: 11,
    marginTop: 10,
  },
  text_select: {
    fontSize: 11,
    marginTop: 10,
    color: '#000',
  },
  button_emojis: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_select: {
    width: '90%',
    height: 460,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    marginTop: 30,
  },
  iconSelect: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
  },
  inputAdd: {
    width: 380,
    height: 89,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
    padding: 15,
    fontSize: 13,
    marginBottom: 15,
  },
  emoticons: {
    width: 306,
    height: 71,
    margin: 24,
    marginLeft: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    active: {
      padding: 20,
      borderRadius: 50,
      borderWidth: 5,
      borderColor: '#304FFE',
      margin: -3,
    },
  },
  activities: {
    borderWidth: 1,
    margin: 24,
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    active: {
      backgroundColor: '#304FFE',
    },
  },
});

export default AddModal;
