const usersInfo = [
  {
    id: 1,
    username: 'pedropistolas',
    msg: 'esta es una prueba de fincionamiento de mi API'
  },
  {
    id: 2,
    username: 'juan',
    msg: 'esta es una prueba de fincionamiento de mi API de juan'
  },
  {
    id: 3,
    username: 'carlos',
    msg: 'esta es una prueba de finciondasdaamiento de mi API de carlos'
  }
]

console.log(usersInfo.filter(item => item.id !== 12))
