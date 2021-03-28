import React, {useState, useEffect, useCallback} from 'react';

import {Input} from './src/Components/Input';

import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Dimensions,
  TextStyle,
  Platform,
} from 'react-native';
import {DisplayTodo} from './src/Components/DisplayToDo';

interface Styles {
  mainWrapper: ViewStyle;
  textWrapper: TextStyle;
}

interface IData {
  id: string;
  todo: string;
}

const App: React.FC = () => {
  const [todos, setToDos] = useState<string[]>([]);
  const [data, setData] = useState<IData[]>([]);
  const [copyTodos, setCopyOfTodos] = useState<string[]>([]);
  const [item, setItem] = useState<string>('');
  const [isTodoAdd, setIsToDoAdd] = useState<boolean>(false);
  const [isTodoSearch, setIsTodoSearch] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const onChangeHandler = (inputEntered: string) => setItem(inputEntered);
  const onClickHandler = () => setIsToDoAdd(true);
  const updateSearchHandler = (inputEntered: string) => setSearch(inputEntered);

  const resetTodo = useCallback(() => {
    console.log('resetTodo');
    if (copyTodos.length > 0) {
      setToDos([...copyTodos]);
      const resetData = copyTodos.map(_ => ({id: _, todo: _}));
      setData([...resetData]);
    }
  }, [copyTodos]);

  const searchTodo = () => {
    console.log('searchTodo', search);
    const filteredTodos = todos.filter(todo => todo.includes(search));
    const filteredData = data.filter(_ => _.todo.includes(search));
    console.log('filteredData', filteredData);

    if (filteredTodos.length > 0) {
      setToDos([...filteredTodos]);
      setData([...filteredData]);
      setIsTodoSearch(false);
    }
  };

  const onSearchHandler = () => {
    if (search.length > 0) {
      searchTodo();
    } else {
      resetTodo();
    }
  };

  useEffect(() => {
    search.length === 0 && resetTodo();
  }, [search, resetTodo]);

  useEffect(() => {
    if (isTodoAdd) {
      setToDos([...todos, item]);
      setCopyOfTodos([...copyTodos, item]);
      setItem('');
      setIsToDoAdd(false);
      setData([...data, {id: item, todo: item}]);
    }
  }, [copyTodos, data, isTodoAdd, item, todos]);

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.textWrapper}>MY FIRST REACT NATIVE APP</Text>
      <Input
        item={item}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
      />
      <DisplayTodo
        data={data}
        search={search}
        updateSearchHandler={updateSearchHandler}
        onSearchHandler={onSearchHandler}
        todos={todos}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create<Styles>({
  mainWrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'grey',
    alignItems: 'center',
    margin: 0,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  textWrapper: {
    marginVertical: 20,
    color: 'white',
    fontSize: 20,
  },
});
