export default function handler(req, res) {
  const users = [
    {
      id: 1,
      name: "John Doe",
      pic: "https://i.pravatar.cc/80",
    },
    {
      id: 2,
      name: "Jane Smith",
      pic: "https://i.pravatar.cc/80",
    },
    {
      id: 3,
      name: "Michael Johnson",
      pic: "https://i.pravatar.cc/80",
    },
    {
      id: 4,
      name: "Emily Davis",
      pic: "https://i.pravatar.cc/80",
    },
    {
      id: 5,
      name: "David Brown",
      pic: "https://i.pravatar.cc/80",
    },
  ];

  res.status(200).json(users);
}
