/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');
    const prevWithdrawTotal = getTextElementValueById('total-withdraw');
    // Error Handling
    if(isNaN(prevWithdrawTotal) || isNaN(newWithdrawAmount)) {
        alert('Please enter a valid amount 😶');
        return;
    }else if(newWithdrawAmount <= 0){
        alert('Please enter a valid amount 😶');
        return;
    }
    
    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    // Get Previous Balance by using the function
    const prevBalanceTotal = getTextElementValueById('total-balance');
    
    // Error Handling
    if(newWithdrawAmount > prevBalanceTotal){
        alert('Baaper Bank a Eto Taka nay!');
        return;
    }
    
    setTextElementValueById('total-withdraw', newWithdrawTotal);
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
});