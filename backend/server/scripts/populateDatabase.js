const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  }
]

// users.forEach(user => {
//   axios
//     .post(signupApi, user)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
// })

async function createUsers() {
  for (const user of users) {
    try {
      console.log('Création de:', user.email);
      const response = await axios.post(signupApi, user);
      console.log('Succès:', response.data);
    } catch (error) {
      console.error('Erreur pour', user.email);
      console.error('Status:', error.response?.status);
      console.error('Message:', error.response?.data);
      console.error('Erreur complète:', error.message);
    }
  }
}

createUsers();