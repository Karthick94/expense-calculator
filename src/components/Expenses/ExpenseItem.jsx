import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.scss';

const ExpenseItem = props => {
    const { title, amount, date } = props;
    return (
        <Card className="expense-item my-1">
            <div className="expense-item_left">
                <ExpenseDate date={date} />
                <div className="expense-item_title mx-4 b">{title}</div>
            </div>
            <Card className="expense-item_amount px-1">&#8377; {amount}</Card>
        </Card>
    );
};

export default ExpenseItem;
