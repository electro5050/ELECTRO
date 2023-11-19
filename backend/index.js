const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const authRoutes = require('./routes/AuthRoutes');


const app = express();
app.use(express.json());
app.use(cors({
  origin: '*' // Remember to restrict this in production to your frontend's origin
}))

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB:', err);
});

app.use('/auth', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
