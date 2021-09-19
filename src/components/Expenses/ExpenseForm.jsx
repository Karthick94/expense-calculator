import { useState } from 'react';

import Card from '../UI/Card';

import './ExpenseForm.scss';

const ExpenseForm = props => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);

    const onTitleChangeEventHandler = e => {
        setTitle(e.target.value);
        setIsTitleValid(true);
    };
    const onAmountChangeEventHandler = e => {
        setAmount(e.target.value);
        setIsAmountValid(true);
    };
    const onDateChangeEventHandler = e => {
        setDate(e.target.value);
        setIsDateValid(true);
    };

    const onSubmitEventHandler = e => {
        e.preventDefault();

        if (title.trim() === '') {
            setIsTitleValid(false);
        }
        if (amount.trim() === '') {
            setIsAmountValid(false);
        }
        if (date.trim() === '') {
            setIsDateValid(false);
        }

        if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
            return;
        }

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
                        <label
                            className="b"
                            style={{
                                color: `${!isTitleValid ? '#fa593d' : '#fff'}`
                            }}
                            htmlFor="title"
                        >
                            Title <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={onTitleChangeEventHandler}
                            style={{
                                borderColor: `${
                                    !isTitleValid ? '#fa593d' : '#03c88d'
                                }`
                            }}
                        />
                    </div>
                    <div className="form-controller">
                        <label
                            className="b"
                            htmlFor="amount"
                            style={{
                                color: `${!isAmountValid ? '#fa593d' : '#fff'}`
                            }}
                        >
                            Amount <span className="required">*</span>
                        </label>
                        <input
                            type="number"
                            name="amount"
                            min="0.1"
                            step="0.1"
                            value={amount}
                            onChange={onAmountChangeEventHandler}
                            style={{
                                borderColor: `${
                                    !isAmountValid ? '#fa593d' : '#03c88d'
                                }`
                            }}
                        />
                    </div>
                    <div className="form-controller">
                        <label
                            className="b"
                            htmlFor="date"
                            style={{
                                color: `${!isDateValid ? '#fa593d' : '#fff'}`
                            }}
                        >
                            Date <span className="required">*</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={onDateChangeEventHandler}
                            style={{
                                borderColor: `${
                                    !isDateValid ? '#fa593d' : '#03c88d'
                                }`
                            }}
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
