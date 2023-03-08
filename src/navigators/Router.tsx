import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useRecoilValue} from 'recoil';
import {ComingSoon, Home, Splash} from '../pages';
import {loadingState} from '../store';
import {navigationRef} from './navigation';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRoute] = useState('Splash');
  const loading = useRecoilValue(loadingState);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName={initialRoute}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ComingSoon"
            component={ComingSoon}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
