export default function handler(req, res) {
  const users = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "Michael Johnson",
    },
    {
      id: 4,
      name: "Emily Davis",
    },
    {
      id: 5,
      name: "David Brown",
    },
  ];

  res.status(200).json(users);
}
