import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Card from '../../components/card';
import image from '../../assets/icons/happy.png';
import moment from 'moment';

const DataUserScreens = ({route}) => {
  const {entry} = route.params;

  const RenderItems = () => {
    const {mood, short_description, created_at} = entry;
    switch (mood) {
      case 'radiant':
        return (
          <>
            <View style={styles.cabeçalho}>
              <Text style={styles.hora}>
                {moment(created_at).format('HH:mm')}
              </Text>
              <Text style={styles.data}>{moment(created_at).format('LL')}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require('../../assets/icons/RADIANT.png')}
              />
              <Text style={styles.bem}>{mood}</Text>
            </View>

            <View style={styles.containerCenter}>
              <View style={styles.containerViewRow}>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/party_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/football_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/cooking_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
              </View>
              <View style={styles._container_view_texts}>
                <Text>{short_description}</Text>
              </View>
            </View>
          </>
        );
      case 'happy':
        return (
          <>
            <View style={styles.cabeçalho}>
              <Text style={styles.hora}>
                {moment(created_at).format('HH:mm')}
              </Text>
              <Text style={styles.data}>{moment(created_at).format('LL')}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require('../../assets/icons/happy.png')}
              />
              <Text style={styles.bem}>{mood}</Text>
            </View>

            <View style={styles.containerCenter}>
              <View style={styles.containerViewRow}>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/party_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/football_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/cooking_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
              </View>
              <View style={styles._container_view_texts}>
                <Text>{short_description}</Text>
              </View>
            </View>
          </>
        );
      case 'ok':
        return (
          <>
            <View style={styles.cabeçalho}>
              <Text style={styles.hora}>
                {moment(created_at).format('HH:mm')}
              </Text>
              <Text style={styles.data}>{moment(created_at).format('LL')}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require('../../assets/icons/confused.png')}
              />
              <Text style={styles.bem}>{mood}</Text>
            </View>

            <View style={styles.containerCenter}>
              <View style={styles.containerViewRow}>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/party_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/football_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/cooking_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
              </View>
              <View style={styles._container_view_texts}>
                <Text>{short_description}</Text>
              </View>
            </View>
          </>
        );
      case 'sad':
        return (
          <>
            <View style={styles.cabeçalho}>
              <Text style={styles.hora}>
                {moment(created_at).format('HH:mm')}
              </Text>
              <Text style={styles.data}>{moment(created_at).format('LL')}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require('../../assets/icons/sad.png')}
              />
              <Text style={styles.bem}>{mood}</Text>
            </View>

            <View style={styles.containerCenter}>
              <View style={styles.containerViewRow}>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/party_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/football_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/cooking_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
              </View>
              <View style={styles._container_view_texts}>
                <Text>{short_description}</Text>
              </View>
            </View>
          </>
        );
      case 'finished':
        return (
          <>
            <View style={styles.cabeçalho}>
              <Text style={styles.hora}>
                {moment(created_at).format('HH:mm')}
              </Text>
              <Text style={styles.data}>{moment(created_at).format('LL')}</Text>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require('../../assets/icons/nervous.png')}
              />
              <Text style={styles.bem}>{mood}</Text>
            </View>

            <View style={styles.containerCenter}>
              <View style={styles.containerViewRow}>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/party_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/football_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
                <View style={styles._container_view_icones}>
                  <View style={styles._icon_backgroud}>
                    <Image
                      source={require('../../assets/icons/cooking_white.png')}
                    />
                  </View>
                  <Text>Festa</Text>
                </View>
              </View>
              <View style={styles._container_view_texts}>
                <Text>{short_description}</Text>
              </View>
            </View>
          </>
        );
      default:
        return '';
    }
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/buttonLeft.png')}
          />
        </TouchableOpacity>
      </View>
      <RenderItems />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    margin: 10,
    marginTop: 30,
  },
  icon: {
    width: 36,
    height: 36,
  },
  _container_view_icones: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _icon_backgroud: {
    backgroundColor: '#304FFE',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#304FFE',
  },
  containerViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 380,
    height: 158,
    borderRadius: 20,
  },
  _container_view_texts: {
    backgroundColor: '#fff',
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 380,
    height: 89,
    borderRadius: 20,
  },
  cabeçalho: {
    backgroundColor: '#E5E5E5',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  hora: {
    color: '#969696',
    width: 36,
    height: 24,
    marginBottom: 10,
  },

  data: {
    color: '#969696',
    height: 24,
    marginBottom: 10,
  },

  bem: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 15,
  },
});

export default DataUserScreens;
