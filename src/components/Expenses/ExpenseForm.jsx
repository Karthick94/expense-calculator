import { useState } from 'react';

import Card from '../UI/Card';

import './ExpenseForm.scss';

const ExpenseForm = props => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const onTitleChangeEventHandler = e => {
        setTitle(e.target.value);
    };
    const onAmountChangeEventHandler = e => {
        setAmount(e.target.value);
    };
    const onDateChangeEventHandler = e => {
        setDate(e.target.value);
    };

    const onSubmitEventHandler = e => {
        e.preventDefault();

        const newExpense = {
            title,
            amount,
            date: new Date(date)
        };

        setTitle('');
        setAmount('');
        setDate('');

        props.onSubmitExpenseForm(newExpense);
    };

    const onCancelClicked = () => {
        props.onCancelEventListener(true);
    };

    return (
        <Card className="expense-form">
            <form onSubmit={onSubmitEventHandler}>
                <div className="form-input">
                    <div className="form-controller">
                        <label className="b" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={onTitleChangeEventHandler}
                        />
                    </div>
                    <div className="form-controller">
                        <label className="b" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            type="number"
                            name="amount"
                            min="0.1"
                            step="0.1"
                            value={amount}
                            onChange={onAmountChangeEventHandler}
                        />
                    </div>
                    <div className="form-controller">
                        <label className="b" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={onDateChangeEventHandler}
                        />
                    </div>
                </div>
                <div className="new-expense-buttons">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={onCancelClicked}
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-secondary">
                        Add Expense
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default ExpenseForm;
