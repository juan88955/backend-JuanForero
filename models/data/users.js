import "dotenv/config.js";
import '../../config/database.js'
import User from '../User.js'

let users = [
    {
      name: "John Smith",
      email: "john.smith@email.com",
      password: "pass123",
      photo: "https://example.com/photos/john.jpg",
      role: 1
    },
    {
      name: "Emily Johnson",
      email: "emily.johnson@email.com",
      password: "secure456",
      photo: "https://example.com/photos/emily.jpg",
      role: 2
    },
    {
      name: "Michael Brown",
      email: "michael.brown@email.com",
      password: "mike2024",
      photo: "https://example.com/photos/michael.jpg",
      role: 1
    },
    {
      name: "Sarah Davis",
      email: "sarah.davis@email.com",
      password: "sarahpass",
      photo: "https://example.com/photos/sarah.jpg",
      role: 3
    },
    {
      name: "David Wilson",
      email: "david.wilson@email.com",
      password: "dave1234",
      photo: "https://example.com/photos/david.jpg",
      role: 2
    },
    {
      name: "Lisa Anderson",
      email: "lisa.anderson@email.com",
      password: "lisa5678",
      photo: "https://example.com/photos/lisa.jpg",
      role: 1
    },
    {
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      password: "robt2024",
      photo: "https://example.com/photos/robert.jpg",
      role: 2
    },
    {
      name: "Jennifer Martinez",
      email: "jennifer.martinez@email.com",
      password: "jenm90",
      photo: "https://example.com/photos/jennifer.jpg",
      role: 1
    },
    {
      name: "William Clark",
      email: "william.clark@email.com",
      password: "will3456",
      photo: "https://example.com/photos/william.jpg",
      role: 3
    },
    {
      name: "Karen Lee",
      email: "karen.lee@email.com",
      password: "karen1980",
      photo: "https://example.com/photos/karen.jpg",
      role: 2
    }
  ];

User.insertMany(users) // Inserta los datos en la base de datos