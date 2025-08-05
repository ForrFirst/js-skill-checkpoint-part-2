// เริ่มเขียนโค้ดตรงนี้
async function getUsers(Jsonplaceholder) {
    try {
      const users = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await users.json();
      //console.log(user)
      const stringOver17 = data.map(user => user.name)
      .filter(name => name.length > 17)
      return stringOver17
    } catch (error) {
      console.error(error);
    }
  }
  
  const longName = await getUsers()
  console.log(longName)
  