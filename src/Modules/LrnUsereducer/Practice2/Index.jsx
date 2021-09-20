import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './incomeExpenses';
import TransactionList from './TransactionList';
import CreateTransaction from './CreateTransaction';
import { TransactionContextProvider } from './Context/TransactionContext';

export default function Index() {
  return (
    <div>
      <TransactionContextProvider>
        <Header></Header>
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <TransactionList></TransactionList>
        <CreateTransaction></CreateTransaction>
      </TransactionContextProvider>
    </div>
  )
}



// the code is deprecated...