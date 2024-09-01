const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://aadityavats837:urmomgay@cluster0.wuye1ia.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
  attendance: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch students', error: err.message });
  }
});

app.post('/api/students', async (req, res) => {
  const { name, age, grade, attendance } = req.body;
  if (!name || !age || !grade || !attendance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newStudent = new Student({ name, age, grade, attendance });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create student', error: err.message });
  }
});

app.put('/api/students/:id', async (req, res) => {
  const { name, age, grade, attendance } = req.body;
  if (!name || !age || !grade || !attendance) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, age, grade, attendance }, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update student', error: err.message });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete student', error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
