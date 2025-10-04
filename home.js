const validPin='1234';
document.getElementById('ad-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const bank=document.getElementById('bank').value;
    const accountNumber=document.getElementById('account-number').value;
    const addAmount=parseInt(document.getElementById('add-amount').value);
    const addPin=parseInt(document.getElementById('add-pin').value);
    // console.log(bank,accountNumber,addAmount,addPin);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance);

    if(accountNumber.length<11 || accountNumber.length>11){
        alert('Account number must be 11 digit');
        return;
    }
    if(addPin!=validPin){
        alert('Invalid Pin');
        return;
    }
    const totalNewAvailableBalance=availableBalance+addAmount;
    // console.log(totalNewAvailableBalance);
    document.getElementById('available-balance').innerText=totalNewAvailableBalance;
});
document.getElementById('withdraw-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const agentNumber=document.getElementById('agent-number').value;
    const withdrawAmount=parseInt(document.getElementById('withdraw-amount').value);
    const withdrawPin=parseInt(document.getElementById('withdraw-pin').value);
    // console.log(bank,agentNumber,withdrawAmount,withdrawPin);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance);

    if(agentNumber.length<11 || agentNumber.length>11){
        alert('Agent number must be 11 digit');
        return;
    }
    if(withdrawPin!=validPin){
        alert('Invalid Pin');
        return;
    }
    const totalNewAvailableBalance=availableBalance-withdrawAmount;
    // console.log(totalNewAvailableBalance);
    document.getElementById('available-balance').innerText=totalNewAvailableBalance;
}); 

// toggle add money and withdraw money form

document.getElementById('add-money-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='block';
    document.getElementById('withdraw-money-parent').style.display='none';
});
document.getElementById('cashout-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('withdraw-money-parent').style.display='block';
});