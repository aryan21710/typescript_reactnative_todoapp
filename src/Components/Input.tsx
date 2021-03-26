import React from 'react';

import {
  StyleSheet,
  TextStyle,
  TextInput,
  Button,
  ViewStyle,
  View,
} from 'react-native';

interface Styles {
  inputWrapper: TextStyle;
  mainWrapper: ViewStyle;
}

interface IProps {
  item: '';
  onChangeHandler: (c: string) => void;
  onClickHandler: () => void;
}

export const Input: React.FC<IProps> = ({
  item,
  onChangeHandler,
  onClickHandler,
}) => {
  return (
    <View style={styles.mainWrapper}>
      <TextInput
        style={styles.inputWrapper}
        placeholderTextColor={'grey'}
        placeholder="Enter ToDo"
        value={item}
        onChangeText={onChangeHandler}
      />
      <Button title="+" disabled={item.length === 0} onPress={onClickHandler} />
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  inputWrapper: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    paddingVertical: 3,
    paddingHorizontal: 50,
    backgroundColor: 'white',
  },
});
