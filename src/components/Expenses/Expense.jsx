import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

import './Expense.scss';

const Expense = props => {
    const [selectedYear, setSelectedYear] = useState(
        new Date().getFullYear().toString()
    );

    const onSelectYear = selectedYear => {
        setSelectedYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter(
        expense =>
            new Date(expense.date).getFullYear().toString() === selectedYear
    );

    const getYears = Array.from(
        new Set(
            props.expenses.map(expense => new Date(expense.date).getFullYear())
        )
    );

    return (
        <Card className="bg-dark p-2 text-center">
            <ExpenseFilter
                years={getYears}
                selectedYear={selectedYear}
                onSelectYear={onSelectYear}
            />

            <ExpenseChart filteredExpenses={filteredExpenses} />

            <div className="expenses">
                {(filteredExpenses.length &&
                    filteredExpenses.map(expense => {
                        const { id, title, amount, date } = expense;
                        return (
                            <ExpenseItem
                                key={id}
                                title={title}
                                amount={amount}
                                date={date}
                            />
                        );
                    })) || (
                    <p className="text-center py-2">No Expenses Found</p>
                )}
            </div>
        </Card>
    );
};

export default Expense;
