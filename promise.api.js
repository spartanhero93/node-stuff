const p = Promise.resolve('waifus are the best')
p.then(res => console.log(res))

const a = Promise.reject(new Error('Waifu not found!'))
a.catch(err => console.log(err))
