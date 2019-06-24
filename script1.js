let money=prompt("What's your budget in this month?"),
    time=prompt("Enter date in view YYYY-MM-DD");
console.log(money);
console.log(time);

let ques1=prompt("Enter a mandatory expense item"),
    ques2=prompt("How much it'd be cost?");
console.log(ques1);
console.log(ques2);


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "answer1": ques1,
        "answer2": ques2
    },
    // optionalExpenses: {
    //     " "
    // },
    income: null,
    savings: false 
};

alert("Your daily budget is " + (money - ques2) / 30);
