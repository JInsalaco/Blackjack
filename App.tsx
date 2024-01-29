/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Gameboard from './components/Gameboard';
import { GameProvider } from './gameContext/gameContext';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
  <GameProvider>
    <SafeAreaView>
      <Gameboard/>
    </SafeAreaView>
  </GameProvider>
  );
}

export default App;
