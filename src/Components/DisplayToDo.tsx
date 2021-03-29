import React from 'react';

import {
  StyleSheet,
  TextStyle,
  Text,
  ViewStyle,
  View,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

interface Styles {
  textWrapper: TextStyle;
  mainWrapper: ViewStyle;
  headingWrapper: TextStyle;
  inputWrapper: TextStyle;
  input: ViewStyle;
}

interface IData {
  data: {id: string; todo: string}[];
  search: string;
  updateSearchHandler: (search: string) => void;
  onSearchHandler: () => void;
  todos: string[];
  onDeleteHandler: (todo: string) => void;
}

export const DisplayTodo: React.FC<IData> = ({
  data,
  search,
  updateSearchHandler,
  onSearchHandler,
  todos,
  onDeleteHandler,
}) => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.headingWrapper}>TODO LISTS</Text>
      {todos.length > 0 && (
        <View style={styles.inputWrapper}>
          <TextInput
            onChangeText={updateSearchHandler}
            value={search}
            style={styles.input}
            placeholder="Search Todo"
          />
          <Button
            title="+"
            disabled={search.length === 0}
            onPress={onSearchHandler}
          />
        </View>
      )}

      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={onDeleteHandler.bind(this, item.todo)}>
            <Text style={styles.textWrapper}>{item.todo}</Text>
          </TouchableOpacity>
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
    width: '95%',
    marginTop: 15,
    marginHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  headingWrapper: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    width: '70%',
    backgroundColor: 'grey',
    color: 'white',

    marginVertical: 15,
    paddingVertical: 5,
  },

  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
