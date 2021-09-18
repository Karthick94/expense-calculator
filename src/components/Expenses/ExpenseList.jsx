import ExpenseItem from './ExpenseItem';

import './ExpenseList.scss';

const ExpenseList = props => {
    console.log(props);
    return (
        <div className="ExpenseList">
            {(props.filteredExpenses.length && (
                <ul>
                    {props.filteredExpenses.map(expense => {
                        const { id, title, amount, date } = expense;
                        return (
                            <ExpenseItem
                                key={id}
                                title={title}
                                amount={amount}
                                date={date}
                            />
                        );
                    })}
                </ul>
            )) || <p className="text-center py-2">No Expenses Found</p>}
        </div>
    );
};

export default ExpenseList;
