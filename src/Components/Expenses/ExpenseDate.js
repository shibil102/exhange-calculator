import './ExpenseDate.css'

function ExpenceDate (props) {
 
    const month = props.date.toLocaleString('en-UK', {month: 'long'})
    const day = props.date.toLocaleString('en-UK', {day: '2-digit'})
    const year = props.date.getFullYear()


    return(
<div className="expense-date" >
    <div className="expense-date__month" >{month}</div> 
    <div className="expense-date__year" >{day}</div>
    <div className="expense-date__day" >{year}</div>
</div>
    )
}


export default ExpenceDate


