document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    const prevDepositTotal = getTextElementValueById('total-deposit');
    const newDepositTotal = prevDepositTotal + newDepositAmount;
    setTextElementValueById('total-deposit', newDepositTotal);
    // Get Previous Balance by using the function
    const prevBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = prevBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);
});