import { useEffect } from 'react';
import { useReducer, useState } from 'react';

import Card from '../UI/Card';

import './ExpenseForm.scss';

const titleReducer = (state, action) => {
    if (action.type === 'ADD_NEW') {
        return {
            value: action.value,
            isValid: action.value.trim().length > 0
        };
    }
    if (action.type === 'ON_BLUR') {
        return {
            value: state.value,
            isValid: action.value.trim().length > 0
        };
    }
    return { value: '', isValid: false };
};

const amountReducer = (state, action) => {
    if (action.type === 'ADD_NEW') {
        return {
            value: action.value,
            isValid: +action.value.trim() > 0
        };
    }
    if (action.type === 'ON_BLUR') {
        return {
            value: state.value,
            isValid: +action.value.trim() > 1
        };
    }
    return { value: '', isValid: false };
};

const dateReducer = (state, action) => {
    if (action.type === 'ADD_NEW') {
        return {
            value: action.value,
            isValid: action.value !== ''
        };
    }
    if (action.type === 'ON_BLUR') {
        return {
            value: state.value,
            isValid: action.value !== ''
        };
    }
    return { value: '', isValid: false };
};

const ExpenseForm = props => {
    const [isFormValid, setIsFormValid] = useState(false);

    const [titleState, titleDispatcher] = useReducer(titleReducer, {
        value: '',
        isValid: null
    });
    const [amountState, amountDispatcher] = useReducer(amountReducer, {
        value: '',
        isValid: null
    });
    const [dateState, dateDispatcher] = useReducer(dateReducer, {
        value: '',
        isValid: null
    });

    const { isValid: isTitleValid } = titleState;
    const { isValid: isAmountValid } = amountState;
    const { isValid: isDateValid } = dateState;

    useEffect(() => {
        // const identifier = setTimeout(() => {
        console.log('Checking for validity...');
        setIsFormValid(isTitleValid && isAmountValid && isDateValid);
        // }, 500);

        // return () => {
        //     console.log('CLEANUP');
        //     clearTimeout(identifier);
        // };
    }, [isTitleValid, isAmountValid, isDateValid]);

    const onTitleChangeEventHandler = e => {
        titleDispatcher({
            type: 'ADD_NEW',
            value: e.target.value
        });

        setIsFormValid(
            e.target.value.trim().length &&
                amountState.isValid &&
                dateState.isValid
        );
    };
    const onAmountChangeEventHandler = e => {
        amountDispatcher({
            type: 'ADD_NEW',
            value: e.target.value
        });
        setIsFormValid(
            titleState.isValid &&
                +e.target.value.trim() > 0 &&
                dateState.isValid
        );
    };
    const onDateChangeEventHandler = e => {
        dateDispatcher({
            type: 'ADD_NEW',
            value: e.target.value
        });

        setIsFormValid(
            titleState.isValid && amountState.isValid && e.target.value !== ''
        );
    };

    const onTitleBlurEventHandler = e => {
        titleDispatcher({
            type: 'ON_BLUR',
            value: e.target.value
        });
    };

    const onAmountBlurEventHandler = e => {
        amountDispatcher({
            type: 'ON_BLUR',
            value: e.target.value
        });
    };

    const onDateBlurEventHandler = e => {
        dateDispatcher({
            type: 'ON_BLUR',
            value: e.target.value
        });
    };

    const onSubmitEventHandler = e => {
        e.preventDefault();

        const newExpense = {
            title: titleState.value,
            amount: amountState.value,
            date: new Date(dateState.value)
        };

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
                                color: `${
                                    titleState.isValid === false
                                        ? '#fa593d'
                                        : '#fff'
                                }`
                            }}
                            htmlFor="title"
                        >
                            Title <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={titleState.value}
                            onChange={onTitleChangeEventHandler}
                            onBlur={onTitleBlurEventHandler}
                            style={{
                                borderColor: `${
                                    titleState.isValid === false
                                        ? '#fa593d'
                                        : '#03c88d'
                                }`
                            }}
                        />
                    </div>
                    <div className="form-controller">
                        <label
                            className="b"
                            htmlFor="amount"
                            style={{
                                color: `${
                                    amountState.isValid === false
                                        ? '#fa593d'
                                        : '#fff'
                                }`
                            }}
                        >
                            Amount <span className="required">*</span>
                        </label>
                        <input
                            type="number"
                            name="amount"
                            min="0.1"
                            step="0.1"
                            value={amountState.value}
                            onChange={onAmountChangeEventHandler}
                            onBlur={onAmountBlurEventHandler}
                            style={{
                                borderColor: `${
                                    amountState.isValid === false
                                        ? '#fa593d'
                                        : '#03c88d'
                                }`
                            }}
                        />
                    </div>
                    <div className="form-controller">
                        <label
                            className="b"
                            htmlFor="date"
                            style={{
                                color: `${
                                    dateState.isValid === false
                                        ? '#fa593d'
                                        : '#fff'
                                }`
                            }}
                        >
                            Date <span className="required">*</span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={dateState.value}
                            onChange={onDateChangeEventHandler}
                            onBlur={onDateBlurEventHandler}
                            style={{
                                borderColor: `${
                                    dateState.isValid === false
                                        ? '#fa593d'
                                        : '#03c88d'
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
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className="btn btn-secondary"
                    >
                        Add Expense
                    </button>
                </div>
            </form>
        </Card>
    );
};

export default ExpenseForm;
