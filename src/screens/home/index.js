import * as React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import Card from '../../components/card';
import neutro from '../../assets/icons/neutral.png';
import Tab from '../../components/Tab';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getEntriesDailys} from '../../services/service';
import {
  Center,
  Container,
  Heading,
  HStack,
  Skeleton,
  Spinner,
  VStack,
} from 'native-base';

import moment from 'moment';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [entries, setEntries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      loadData();
      setIsLoading(true);
    }, []),
  );

  React.useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const response = await getEntriesDailys();
    if (response.status === 200) {
      setEntries(response?.data);
    }
    setIsLoading(false);
  }

  const Loading = () => {
    return (
      <Center width="100%" height="100%">
        <Container>
          <HStack space={8} justifyContent="center" alignItems="center">
            <Spinner size="lg" />
          </HStack>
        </Container>
      </Center>
    );
  };

  const noData = () => {
    return (
      <View style={styles.container2}>
        <Image source={neutro} style={styles.imageNeutral} />
        <Text style={styles.textInfo}>
          Você ainda não tem nenhum registro diário. Para começar, toque no
          ícone de adicionar na tela.
        </Text>
      </View>
    );
  };

  const RenderItems = ({itemData}) => {
    const {mood, short_description, created_at} = itemData;
    switch (mood) {
      case 'radiant':
        return (
          <Card
            title={mood}
            source={require('../../assets/icons/RADIANT.png')}
            label={short_description}
            hours={moment(created_at).format(`${'DD/MM/YYYY , HH:mm'}`)}
            onPress={() => navigation.navigate('DataUser', {entry: itemData})}
            color
          />
        );
      case 'happy':
        return (
          <Card
            title={mood}
            source={require('../../assets/icons/happy.png')}
            label={short_description}
            hours={moment(created_at).format('DD/MM/YYYY ,HH:mm')}
            onPress={() => navigation.navigate('DataUser', {entry: itemData})}
            color
          />
        );
      case 'ok':
        return (
          <Card
            title={mood}
            source={require('../../assets/icons/confused.png')}
            label={short_description}
            hours={moment(created_at).format('DD/MM/YYYY ,HH:mm')}
            onPress={() => navigation.navigate('DataUser', {entry: itemData})}
            color
          />
        );
      case 'sad':
        return (
          <Card
            title={mood}
            source={require('../../assets/icons/sad.png')}
            label={short_description}
            hours={moment(created_at).format('DD/MM/YYYY ,HH:mm')}
            onPress={() => navigation.navigate('DataUser', {entry: itemData})}
            color
          />
        );
      case 'finished':
        return (
          <Card
            title={mood}
            source={require('../../assets/icons/nervous.png')}
            label={short_description}
            hours={moment(created_at).format('DD/MM/YYYY ,HH:mm')}
            onPress={() => navigation.navigate('DataUser', {entry: itemData})}
            color
          />
        );
      default:
        return '';
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.container}>
            <FlatList
              contentContainerStyle={{
                marginTop: 40,
              }}
              data={entries}
              keyExtractor={entries => String(entries.id)}
              renderItem={({item}) => <RenderItems itemData={item} />}
            />
          </View>
          <Tab
            onPress={() => navigation.navigate('AddModal')}
            onPressAdd={() => navigation.navigate('AddModal')}
            onPressMenu={() => navigation.navigate('Infos')}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: '#808080',
    width: 300,
  },
  imageNeutral: {
    marginTop: 70,
    marginBottom: 23,
  },
});
export default HomeScreen;
