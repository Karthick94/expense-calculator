import './ExpenseFilter.scss';

const ExpenseFilter = props => {
    const { years, selectedYear, onSelectYear } = props;
    const onFilterChangeEventHandler = e => onSelectYear(e.target.value);

    return (
        <div className="expense-filter">
            <p className="b">Filter by year</p>
            <select
                name="year"
                onChange={onFilterChangeEventHandler}
                value={selectedYear}
            >
                <option
                    value={selectedYear}
                    key={Math.random()}
                    disabled
                    hidden
                >
                    {selectedYear}
                </option>
                {years.sort().map(year => (
                    <option placeholder="Year" key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ExpenseFilter;
