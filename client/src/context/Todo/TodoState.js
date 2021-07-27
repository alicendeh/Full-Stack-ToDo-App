import React, { useContext, useReducer } from 'react';
import TodoContext from './TodoContext';
import TodoReducer from './TodoReducer';

const TodoState = (props) => {
  const Todos = [
    {
      id: 1,
      title: 'Christian Duty',
      body: 'Remember to go to service every sunday',
    },
    {
      id: 2,
      title: 'Home Duty',
      body:
        'Remember to thouroughly clean the house,wash dishes,wash your clothes,dryclean the kitchen toilet and palor',
    },
    {
      id: 3,
      title: 'Conjugal Duty',
      body:
        'Remember to make love to my husband every sunday,tuesday,thursday adn saturday',
    },
  ];
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        todo: state.Todos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
