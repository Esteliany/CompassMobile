import {useNavigation} from '@react-navigation/native';
import * as React from 'react';

import {getPerfil} from '../../services/service';

import moment from 'moment';

import {StyleSheet, View, Text, Image} from 'react-native';
import Button from '../../components/button';
import Tab from '../../components/Tab';
import {Center, Container, HStack, Spinner} from 'native-base';

export function Infos() {
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getDataUser();
  }, []);

  async function getDataUser() {
    const response = await getPerfil();
    if (response.status === 200) {
      setUserData(response?.data);
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.containerPrincipal}>
            <View style={styles.containerView}>
              <Image
                style={styles.photo}
                resizeMode="center"
                source={{
                  uri: userData.photo.url,
                }}
              />
            </View>
            <View style={styles.container2}>
              <View style={styles.containerView}>
                <Text style={styles.form_title}>{`Olá,${userData.name}`}</Text>
              </View>
              <View style={styles.form}>
                <View style={styles.grind}>
                  <Text style={styles.form_grind_title}>E-MAIL:</Text>
                  <Text style={styles.form_grind_text}>{userData.email}</Text>
                </View>
                <View style={styles.grind}>
                  <Text style={styles.form_grind_title}>GENERO:</Text>
                  <Text style={styles.form_grind_text}>{userData.gender}</Text>
                </View>
                <View style={styles.grind}>
                  <Text style={styles.form_grind_title}>
                    DATA DE NASCIMENTO:
                  </Text>
                  <Text style={styles.form_grind_text}>
                    {moment(userData.birthdate).format('DD/MM/YYYY')}
                  </Text>
                </View>
              </View>
              <View style={styles.containerView}>
                <Button
                  backgroundButton="SECONDARY"
                  text="EDITAR PERFIL"
                  onPress={() =>
                    navigation.navigate('EditarPerfil', {userData})
                  }
                />
                <Button
                  backgroundButton="TERCIARY"
                  text="SAIR"
                  onPress={() => ''}
                />
              </View>
            </View>
          </View>
          <Tab
            onPress={() => navigation.navigate('Home')}
            onPressAdd={() => navigation.navigate('AddModal')}
            onPressMenu={() => navigation.navigate('Infos')}
          />
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    margin: 30,
    marginTop: '30%',
  },
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: '10%',
  },
  text: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'center',
    width: 300,
  },
  photo: {
    width: 100,
    height: 100,
  },
  form_title: {
    fontSize: 40,
    color: '#000',
  },
  form_grind_title: {
    fontSize: 20,
    marginEnd: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  form_grind_text: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  form: {
    marginTop: 20,
  },
  grind: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
