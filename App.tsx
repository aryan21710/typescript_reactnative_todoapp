import React, {useState, useEffect} from 'react';

import {Input} from './src/Components/Input';

import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Dimensions,
  TextStyle,
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
  const onChangeHandler = (inputEntered: string) => setItem(inputEntered);
  const onClickHandler = () => setIsToDoAdd(true);

  useEffect(() => {
    if (isTodoAdd) {
      setToDos([...todos, item]);
      setCopyOfTodos([...copyTodos, item]);
      setItem('');
      setIsToDoAdd(false);
      setData([...data, {id: item, todo: item}]);
    }
  }, [copyTodos, data, isTodoAdd, item, todos]);

  useEffect(() => {
    data.length && console.log(data);
  }, [data]);
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.textWrapper}>MY FIRST REACT NATIVE APP</Text>
      <Input
        item={item}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
      />
      <DisplayTodo data={data} />
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
    padding: 0,
  },
  textWrapper: {
    marginVertical: 20,
    color: 'white',
    fontSize: 20,
  },
});
