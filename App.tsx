import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Restart} from './restart';
import {IUser, requestGetRandomUser} from './user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 16,
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  textButton: {
    color: 'white',
  },
});

export default function App(): React.JSX.Element {
  const [randomUser, setRandomUser] = useState<IUser | undefined>();

  useEffect(() => {
    const initialData = async () => {
      const response = await requestGetRandomUser();

      setRandomUser(response);
    };

    initialData();
  }, []);

  const handleRestartApp = () => {
    if (Platform.OS === 'android') {
      Restart.restart('test');
    }
  };

  if (!randomUser) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(randomUser)}</Text>

      <TouchableOpacity style={styles.button} onPress={handleRestartApp}>
        <Text style={styles.textButton}>reload</Text>
      </TouchableOpacity>
    </View>
  );
}
