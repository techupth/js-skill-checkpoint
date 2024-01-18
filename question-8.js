// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
fetch ("https://jsonplaceholder.typicode.com/users")
 .then(data=>{
    return data.json();
 })
.then(users => {

    const newUsers = users.map(user => user.name);
    console.log(newUsers)

})
