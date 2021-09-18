import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts';

const ExpenseChart = props => {
    const chartDataPoints = [
        { month: 'Jan', amount: 0 },
        { month: 'Feb', amount: 0 },
        { month: 'Mar', amount: 0 },
        { month: 'Apr', amount: 0 },
        { month: 'May', amount: 0 },
        { month: 'Jun', amount: 0 },
        { month: 'Jul', amount: 0 },
        { month: 'Aug', amount: 0 },
        { month: 'Sep', amount: 0 },
        { month: 'Oct', amount: 0 },
        { month: 'Nov', amount: 0 },
        { month: 'Dec', amount: 0 }
    ];

    props.filteredExpenses.map(filteredExpense => {
        const expenseMonth = filteredExpense.date.getMonth();
        chartDataPoints[expenseMonth].amount += parseInt(
            filteredExpense.amount
        );
    });

    return (
        <AreaChart
            className="my-2"
            width={1200}
            height={250}
            data={chartDataPoints}
        >
            <CartesianGrid strokeDasharray=".05 .05" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip height={5} />
            <Area
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                fill="#07ffb5"
            />
        </AreaChart>
    );
};

export default ExpenseChart;
