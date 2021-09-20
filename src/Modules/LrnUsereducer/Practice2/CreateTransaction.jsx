import React, { useState, useContext } from 'react';
import { TransactionContext } from './Context/TransactionContext';


export default function CreateTransaction() {

  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (event) ={
    event
  }

  return (
    <div>
      Hello from CreateTransaction
    </div>
  )
}
