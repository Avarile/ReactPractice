import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransactionReducer';

const initState = {
  transactions : []
}
// As we know, we want the state to hold All of our transaction infos, so let 's create it as a Key: Value obj, and the value is an Array of transactionssssss

export const TransactionContext = createContext(initState);
// Initiation of the context, and the constext now is an empty array of no transacion happened yet.

export const TransactionContextProvider = ( {children} ) => {

  const [state, dispatch] = useReducer (TransactionReducer, initState);

  const addTransaction = (transaction) => {
    dispatch({
      type: "add_transaction",
      payload: transaction
    })

    return(
      <TransactionContext.Provider value={{
        transactions: state.transactions,
        addTransaction
      }}>
        {children}
      </TransactionContext.Provider>
    )
  }
}
// this is where we integrate useReducer and return the children prop wrapped in the provider with all of the state we want our application to have access to as the value prop.

export const AppReducer = ( state, action ) => {

  switch ( action.type){
    case "add_transaction": 
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state
  }
};

