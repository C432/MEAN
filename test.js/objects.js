// let students = [
//   { name: "Remy", cohort: "Jan" },
//   { name: "Genevieve", cohort: "March" },
//   { name: "Chuck", cohort: "Jan" },
//   { name: "Osmund", cohort: "June" },
//   { name: "Nikki", cohort: "June" },
//   { name: "Boris", cohort: "June" }
// ];
// for(let i = 0; i < students.length; i++)
// {
//     console.log("name:" + students[i]["name"] + ", cohort:" + students[i]["cohort"]);
// }


let users = {
  employees: [
    { first_name: "Miguel", last_name: "Jones" },
    { first_name: "Ernie", last_name: "Bertson" },
    { first_name: "Nora", last_name: "Lu" },
    { first_name: "Sally", last_name: "Barkyoumb" }
  ],
  managers: [
    { first_name: "Lillian", last_name: "Chambers" },
    { first_name: "Gordon", last_name: "Poe" }
  ]
};


function printUsers(obj)
{
    let num = 0;
for(let user in users)
{
    console.log(user);
    console.log(users[user]);
    for(let employee in users[user])
    {
        console.log(users[user][employee])
        num += 1
        sumLetters = users[user][employee]["last_name"].length + users[user][employee]["first_name"].length;

        console.log(num + " - " + users[user][employee]["last_name"] + "," + users[user][employee]["first_name"] + "-" + sumLetters)
    }
    }
}
printUsers(users);
