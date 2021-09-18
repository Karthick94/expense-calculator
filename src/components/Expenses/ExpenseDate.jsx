import Card from '../UI/Card';
import './ExpenseDate.scss';

const ExpenseDate = props => {
    const { date } = props;
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return (
        <Card className="expense-date">
            <div className="expense-date_date lead b">{day}</div>
            <div className="expense-date_month small">{month}</div>
            <div className="expense-date_year b small">{year}</div>
        </Card>
    );
};

export default ExpenseDate;
