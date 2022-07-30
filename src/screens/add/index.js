import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Image, View, FlatList} from 'react-native';
import Card from '../../components/card';

const AddScreens = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
      }}>
      <FlatList
        data={[0]}
        contentContainerStyle={{
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
        renderItem={() => (
          <>
            <Card
              source={require('../../assets/icons/happy.png')}
              title="HOJE, 23 DE JANEIRO"
              label="BEM"
              hours="08:35"
              color="red"
              onPress={() => navigation.navigate('DataUser')}
            />
            <Card
              source={require('../../assets/icons/sad.png')}
              title="ONTEM, 22 DE JANEIRO"
              label="MAL"
              hours="08:35"
              color="#4B75E2"
              onPress={() => navigation.navigate('DataUser')}
            />
            <Card
              source={require('../../assets/icons/nervous.png')}
              title="21 DE JANEIRO"
              label="TRISTE"
              hours="08:35"
              color="#4BE263"
              onPress={() => navigation.navigate('DataUser')}
            />
            <Card
              source={require('../../assets/icons/happy.png')}
              title="20 DE JANEIRO"
              label="BEM"
              hours="08:35"
              color="red"
              onPress={() => navigation.navigate('DataUser')}
            />
            <Card
              source={require('../../assets/icons/happy.png')}
              title="19 DE JANEIRO"
              label="BEM"
              hours="08:35"
              color="red"
              onPress={() => navigation.navigate('DataUser')}
            />
            <Card
              source={require('../../assets/icons/happy.png')}
              title="18 DE JANEIRO"
              label="BEM"
              hours="08:35"
              color="red"
              onPress={() => navigation.navigate('DataUser')}
            />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default AddScreens;
