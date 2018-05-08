console.log('Before')
console.log('After')

function getUser (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a DB...')
      resolve({ id: id, gitHubUsername: 'Lou' })
    }, 500)
  })
}

function getRepos (username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling Github API...')
      resolve(['repo1', 'repo2', 'repo3'])
    }, 1000)
  })
}

function getCommits (repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling Github API...')
      resolve(['commit'])
    }, 2000)
  })
}

getUser(1)
  .then(user => getRepos(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message))
