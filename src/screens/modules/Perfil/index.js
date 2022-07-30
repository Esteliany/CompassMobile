import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {
  Box,
  Center,
  CheckIcon,
  Container,
  HStack,
  Input,
  Select,
  Spinner,
} from 'native-base';
import * as React from 'react';

import {putUser} from '../../../services/service';

import {StyleSheet, View, Text, Image} from 'react-native';
import Button from '../../../components/button';

export function Perfil({route}) {
  const {userData} = route.params;
  const navigation = useNavigation();
  const [service, setService] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  console.log('service', service);

  async function handleEditProfile() {
    setIsLoading(true);
    const user = {
      gender: service,
      photo_id: 3,
    };
    const response = await putUser(user);
    console.log('response', response);
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
        <View style={styles.containerPrincipal}>
          <View style={styles.containerView}>
            <Image
              style={styles.photo}
              resizeMode="center"
              source={require('../../../assets/imageProfile/11.png')}
            />
          </View>
          <View style={styles.container2}>
            <View style={styles.containerView}>
              <Button
                backgroundButton="PRIMARY"
                text="ALTERAR FOTO"
                onPress={() => navigation.goBack()}
              />
            </View>
            <View style={styles.form}>
              <View>
                <Text
                  style={[
                    styles.form_grind_title,
                    {
                      marginLeft: 45,
                      marginBottom: 5,
                    },
                  ]}>
                  NOME
                </Text>
                <Box alignItems="center">
                  <Input
                    mx="3"
                    editable={false}
                    placeholder={userData?.name}
                    bg={'#fff'}
                    placeholderTextColor={'#000'}
                    borderWidth={1}
                    borderColor={'#000'}
                    w="75%"
                    maxWidth="300px"
                  />
                </Box>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <View>
                <Text
                  style={[
                    styles.form_grind_title,
                    {
                      marginLeft: 45,
                      marginBottom: 5,
                    },
                  ]}>
                  E-MAIL
                </Text>
                <Box alignItems="center">
                  <Input
                    editable={false}
                    mx="3"
                    placeholder={userData?.email}
                    bg={'#fff'}
                    placeholderTextColor={'#000'}
                    borderWidth={1}
                    borderColor={'#000'}
                    w="75%"
                    maxWidth="300px"
                  />
                </Box>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <View>
                <Text
                  style={[
                    styles.form_grind_title,
                    {
                      marginLeft: 45,
                      marginBottom: 5,
                    },
                  ]}>
                  gênero
                </Text>
                <Center>
                  <Box w="3/4" maxW="300">
                    <Select
                      bg={'#fff'}
                      borderWidth={1}
                      borderColor={'#000'}
                      selectedValue={service}
                      minWidth="200"
                      accessibilityLabel={userData.gender}
                      placeholder={userData.gender}
                      placeholderTextColor={'#000'}
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={itemValue => setService(itemValue)}>
                      <Select.Item label="Masculino" value="male" />
                      <Select.Item label="Feminino" value="female" />
                      <Select.Item label="Outro" value="other" />
                    </Select>
                  </Box>
                </Center>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />

              <View>
                <Text
                  style={[
                    styles.form_grind_title,
                    {
                      marginLeft: 45,
                      marginBottom: 5,
                    },
                  ]}>
                  DATA DE NASCIMENTO
                </Text>
                <Box alignItems="center">
                  <Input
                    mx="3"
                    editable={false}
                    placeholder={moment(userData.birthdate).format(
                      'DD/MM/YYYY',
                    )}
                    bg={'#fff'}
                    borderWidth={1}
                    placeholderTextColor={'#000'}
                    borderColor={'#000'}
                    w="75%"
                    maxWidth="300px"
                  />
                </Box>
              </View>
              <View
                style={{
                  height: 10,
                }}
              />
              <View style={styles.containerView}>
                <Button
                  backgroundButton="SECONDARY"
                  text="ALTERAR FOTO"
                  onPress={() => handleEditProfile()}
                />
              </View>
            </View>
          </View>
        </View>
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
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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
