getCustomer(1, customer => {
  if (customer.isGold) {
    getTopMovies(movies => {
      sendEmail(customer.email, movies, () => {})
    })
  }
})
async function getData () {
  const customer = getCustomer(1)
  if (customer.isGold) {
    const movies = getTopMovies(customer)
  }
}

function getCustomer (id, customer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Customer: ', customer)
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      })
    }, 4000)
  })
}

function getTopMovies (movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Top movies: ', movies)
      callback(['movie1', 'movie2'])
    }, 4000)
  })
}

function sendEmail (email, movies, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Email sent...')
      callback()
    }, 4000)
  })
}
