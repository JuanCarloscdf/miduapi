
const express = require('express')
const app = express()
const middleware = require('./logerMiddleware')
const cors = require('cors')
app.use(express.json())
app.use(cors())
app.use(middleware)
const port = 3001

let usersInfo = [
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
    msg: 'esta es una prueba de fincionamiento de mi API de carlos'
  },
  {
    id: 4,
    username: 'anatola blanco',
    msg: 'esta es una prueba de fincionamiento de mi API anatola'
  }
]

app.get('/user/notes', (req, res) => {
  res.json(usersInfo)
})
app.get('/user/note/:id', (req, res) => {
  const id = Number(req.params.id)
  const userInfoRes = usersInfo.find(item => item.id === id)

  return userInfoRes ? res.json(userInfoRes) : res.status(404).end()
})
app.delete('/user/note/:id', (req, res) => {
  const id = Number(req.params.id)
  const newUsersInfo = usersInfo.filter(item => item.id !== id)
  usersInfo = newUsersInfo
  res.json(newUsersInfo)
})
app.post('/user/note', (req, res) => {
  const newmsg = req.body
  const ids = usersInfo.map(item => item.id)
  console.log(newmsg)
  const newUser = {
    id: Math.max(...ids) + 1,
    username: newmsg.username,
    msg: newmsg.msg,
    date: new Date().toISOString()
  }
  usersInfo = [...usersInfo, newUser]
  res.json(newUser).status(200).end()
})

app.use((req, res) => {
  res.status(404).end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
