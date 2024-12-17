import {NativeModules} from 'react-native';

interface RNRestartInterface {
  restart(reason: string): void;
}

export const Restart = NativeModules.RNRestart as RNRestartInterface;
