// api/user/[id].js

export default function handler(req, res) {
  const { id } = req.query;

  const users = [
    {
      id: 1,
      name: "John Doe",
      pic: "https://i.pravatar.cc/80",
      profile: "Web Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      pic: "https://i.pravatar.cc/80",
      profile: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Michael Johnson",
      pic: "https://i.pravatar.cc/80",
      profile: "Full Stack Developer",
    },
    {
      id: 4,
      name: "Emily Davis",
      pic: "https://i.pravatar.cc/80",
      profile: "Software Engineer",
    },
    {
      id: 5,
      name: "David Brown",
      pic: "https://i.pravatar.cc/80",
      profile: "Frontend Developer",
    },
  ];

  const user = users.find((user) => user.id.toString() === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
}
