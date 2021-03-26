import React from 'react';

import {
  StyleSheet,
  TextStyle,
  Text,
  ViewStyle,
  View,
  FlatList,
} from 'react-native';

interface Styles {
  textWrapper: TextStyle;
  mainWrapper: ViewStyle;
  headingWrapper: TextStyle;
}

interface IData {
  id: string;
  todo: string;
}

export const DisplayTodo: React.FC<IData[]> = ({data}) => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.headingWrapper}>TODO LISTS</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={styles.textWrapper}>{item.todo}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create<Styles>({
  mainWrapper: {
    width: '90%',
    height: '50%',
    display: 'flex',
    marginTop: 30,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  textWrapper: {
    textAlign: 'left',
    fontSize: 16,
    width: '100%',
    marginTop: 15,
    marginLeft: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  headingWrapper: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
