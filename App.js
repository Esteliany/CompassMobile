import React, {Fragment} from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import AppStack from './src/routes/app.stack';

import {THEME} from './src/styles/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent
      />
      <AppStack />
    </NativeBaseProvider>
  );
};

export default App;
