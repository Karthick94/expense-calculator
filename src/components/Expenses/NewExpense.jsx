import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseForm from './ExpenseForm';

import './NewExpense.scss';

const NewExpense = props => {
    const [newExpenseToggleButton, setNewExpenseToggleButton] = useState(false);

    const onExpenseSubmitFormHandler = newExpenseData => {
        props.onAddNewExpense({ id: Math.random(), ...newExpenseData });
        setNewExpenseToggleButton(false);
    };

    const onButtonClickHandler = () => {
        setNewExpenseToggleButton(
            newExpenseToggleButton => !newExpenseToggleButton
        );
    };

    const onCancelEventListener = isClicked => {
        setNewExpenseToggleButton(!isClicked);
    };

    return (
        <Card className="new-expense bg-dark p-2 my-2">
            {(!newExpenseToggleButton && (
                <button
                    className="btn btn-secondary add-expense-toggle"
                    onClick={onButtonClickHandler}
                >
                    Add New Expense
                </button>
            )) || (
                <ExpenseForm
                    onSubmitExpenseForm={onExpenseSubmitFormHandler}
                    onCancelEventListener={onCancelEventListener}
                />
            )}
        </Card>
    );
};

export default NewExpense;
