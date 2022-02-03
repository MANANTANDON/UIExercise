users = [
    {
        id: "1",
        name: "Norah"
    },
    {
        id: "2",
        name: "Alyx"
    }
];

accounts = [
    {
        account: "IRA-4679", 
        user: "1",
        balance: "5175.36"
    },
    {
        account: "AAA-3571", 
        user: "1",
        balance: "3471072.38"
    },
    {
        account: "AAA-4671", 
        user: "1",
        balance: "138971.19"
    },
    {
        account: "ROT-1687", 
        user: "2",
        balance: "2686.00"
    },
    {
        account: "AAA-7894", 
        user: "2",
        balance: "68761.32"
    },
    {
        account: "IRA-6818", 
        user: "2",
        balance: "564.67"
    },
    {
        account: "IRA-6819", 
        user: "2",
        balance: "3564.67"
    } 
];

const arrayOfString = () =>{
    var name = users.map(data => [data.name])
    var account = accounts.map(data => [data.account, data.balance])
    var data = []
    for(var i = 0;i<3;i++){
        account[i].unshift(...name[0])
    }
    for(var i = 3; i<7; i++){
        account[i].unshift(...name[1])
    }
    for(var i = 0;i<7;i++){
        data.push(account[i])
    }

    const result = data.join(" ").replace(/,/g,'|').split(" ")
    return result
}
const finalData = arrayOfString()
document.getElementById('data').innerHTML = finalData
console.log(finalData)