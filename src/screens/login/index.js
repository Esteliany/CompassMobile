import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {SafeAreaView, Image, View, TextInput, Alert} from 'react-native';
import {Login as SignIn} from '../../services/service';
import Button from '../../components/button';
import Input from '../../components/input';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  async function postLogin() {
    const response = await SignIn(email, password);
    if (response.status === 400) {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
    if (response.status === 200) {
      navigation.navigate('Home');
    }
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.sectionCenter}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/ImageLogin.png')}
        />
        <TextInput
          placeholder="e-mail"
          autoCorrect={false}
          style={styles.inputs}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="senha"
          autoCorrect={false}
          style={styles.inputs}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button text="Entrar" onPress={() => postLogin()} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
