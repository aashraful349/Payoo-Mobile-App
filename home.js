document.getElementById('ad-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const bank=document.getElementById('bank').value;
    const accountNumber=document.getElementById('account-number').value;
    const addAmount=parseInt(document.getElementById('add-amount').value);
    const addPin=document.getElementById('add-pin').value;
    // console.log(bank,accountNumber,addAmount,addPin);
    const availableBalance=parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance);
    const totalNewAvailableBalance=availableBalance+addAmount;
    // console.log(totalNewAvailableBalance);
    document.getElementById('available-balance').innerText=totalNewAvailableBalance;
})