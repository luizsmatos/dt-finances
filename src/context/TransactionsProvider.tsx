import { useEffect, useState, ReactNode } from 'react';
import { api } from '../services/api';
import { TransactionsContext } from './TransactionsContext';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={ transactions }>
      { children }
    </TransactionsContext.Provider>
  );
}
