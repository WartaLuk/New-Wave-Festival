const db = {
    testimonials: [
      { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
      { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
      { id: 3, author: 'Johnatan Doe', text: 'This company is worth every coin!' },
      { id: 4, author: 'Susan Doe', text: 'They really know how to make you happy.' },
    ],
    concerts: [
    { id: 1, performer: 'John MacPinky', genre: 'Pop', price: 45, day: 1, image: '' },
    { id: 2, performer: 'Amanda Morales', genre: 'Soul', price: 50, day: 1, image: '' },
    { id: 3, performer: 'Felix Novak', genre: 'Rock', price: 65, day: 1, image: '' },
    ],
    seats: [
    { id: 1, day: 1, seat: 3, client: 'Samwise Gamgee', email: 'wise.gamgee@example.com' },
    { id: 2, day: 1, seat: 9, client: 'Matilda Wormwood', email: 'wormwood.m@example.com'  },
    { id: 3, day: 1, seat: 10, client: 'George Smiley', email: 'george.smiley.2@example.com'  },
    { id: 4, day: 1, seat: 26, client: 'Sam Weller', email: 'wellers@example.com'  },
    { id: 5, day: 2, seat: 1, client: 'Irene Adler', email: 'adler.irene@example.com'  },
    { id: 6, day: 2, seat: 2, client: 'Eliza Doolittle', email: 'el.do2lit2le@example.com'  },
    ]
  }
  
  module.exports = db;