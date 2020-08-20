const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    
    {
      id:'Ajay-01',
      name:'Ajay',
      handle:'@ajay',
      avatarUrl:'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png'
    },
    {
      id:'vivek-01',
      name:'Vivek',
      handle:'@vivek',
      avatarUrl:'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png'
    },
    {
      id:'sanjoy-0',
      name:'Sanjoy',
      handle:'@sanjay',
      avatarUrl:'https://pickaface.net/gallery/avatar/unr_random_180527_1151_2bcb7h9.png'
    }
    // {
    //   id: 'richard',
    //   name: 'Richard Kalehoff',
    //   handle: '@richardkalehoff',
    //   avatarURL: config.origin + '/richard.jpg'
    // },
    // {
    //   id: 'karen',
    //   name: 'Karen Isgrigg',
    //   handle: '@karen_isgrigg',
    //   avatarURL: config.origin + '/karen.jpg'
    // },
    // {
    //   id: 'tyler',
    //   name: 'Tyler McGinnis',
    //   handle: '@tylermcginnis',
    //   avatarURL: config.origin + '/tyler.jpg'
    // }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
