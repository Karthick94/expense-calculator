import { useState } from 'react';
import Expense from './components/Expenses/Expense';
import NewExpense from './components/Expenses/NewExpense';

import './App.scss';

function App() {
    const [expenses, setExpenses] = useState([]);
    const onAddNewExpense = newExpense => {
        console.log('onAddNewExpense : ', newExpense);
        setExpenses(prevState => [newExpense, ...prevState]);
        console.log('new expenses list : ', expenses);
    };

    return (
        <div className="app my-1">
            <div className="container">
                <div className="header">
                    <h1 className="text-center uppercase py-1">
                        Expense Calculator
                    </h1>
                    <div className="underline"></div>
                </div>
                <NewExpense onAddNewExpense={onAddNewExpense} />
                <Expense expenses={expenses} />
            </div>
        </div>
    );
}

export default App;
