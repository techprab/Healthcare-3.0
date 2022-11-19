
// function desposite(){

//   var inputval=document.getElementById("amount").ariaValueMax;

//   web3.eth.getAccounts().then(function(account){
//     return contract.methods.deposite_money(inputval).send({from: account[0]});
//   }).then(function(tmp){
//     $("#amount").val("");
// show_balance();

//   }).catch(function(tmp){
//     alert(tmp);
//   })

// }

// function withdraw(){
//   var inputval=document.getElementById("amount").ariaValueMax;

//   web3.eth.getAccounts().then(function(account){
//     return contract.methods.withdraw(inputval).send({from: account[0]});
//   }).then(function(tmp){
//     $("#amount").val("");
// show_balance();

//   }).catch(function(tmp){
//     alert(tmp);
//   })

// }

// function show_balance(){
//   contract.methods.getBalance().call().then(function(balance){

//     $("#balance").html(balance);
//   })
// }


