const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Nisha",
        email: "nisha@example.com",
      },
      {
        name: "Mehak",
        email: "Mehak@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Nisha",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Mehak",
        email: "Mehak@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Sheetal",
        email: "Sheetal@example.com",
      },
      {
        name: "Mehak",
        email: "Mehak@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Sheetal",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Nisha",
        email: "nisha@example.com",
      },
      {
        name: "Mehak",
        email: "Mehak@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "Mehak",
        email: "Mehak@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Nisha",
        email: "nisha@example.com",
      },
      {
        name: "Mehak Chopra",
        email: "Mehakk@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = { chats };
