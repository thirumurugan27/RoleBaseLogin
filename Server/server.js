const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors(({
  origin: "http://localhost:5173", credentials: true
})));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thiru+2007',
  database: 'sample',
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  }
  else {
    console.log('Connected to database.');
  }
})

// 🔵 POST - User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      console.log("DB Error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (result.length === 0) {
      return res.status(400).json({ error: "User not found" });
    }
    const user = result[0];
    // ⚠️ Plain text password check (for demo)
    if (password !== user.password) {
      return res.status(400).json({ error: "Invalid password" });
    }
    // ✅ Success
    res.json({
      message: "Login successful",
      name: user.name,
      role: user.role
    });
  });
});

// 🟡 GET - Fetch all students
app.get("/get", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching students:", err);
      return res.status(500).send("Error fetching students");
    }
    res.status(200).json(result);
  });
});


// 🟢 GET - Fetch one student by ID
app.get("/getdata/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM students WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error fetching student:", err);
      return res.status(500).send("Error fetching student");
    }
    if (result.length === 0) {
      return res.status(404).send("Student not found");
    }
    res.status(200).json(result[0]);
  });
});


// 🟣 PUT - Full update (replace all fields)
app.put("/updatedata/:id", (req, res) => {
  const { id } = req.params;
  const { name, department, m1, m2, dsa1, dsa2 } = req.body;
  const sql =
    "UPDATE students SET name=?, department=?, m1=?, m2=?, dsa1=?, dsa2=? WHERE id=?";
  db.query(sql, [name, department, m1, m2, dsa1, dsa2, id], (err, result) => {
    if (err) {
      console.error("Error updating student:", err);
      return res.status(500).send("Error updating student");
    }
    res.status(200).send("✅ Student updated successfully");
  });
});

// 🔴 DELETE - Remove a student
app.delete("/deletedata/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM students WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting student:", err);
      return res.status(500).send("Error deleting student");
    }
    res.status(200).send("🗑️ Student deleted successfully");
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})