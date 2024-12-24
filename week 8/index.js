// Import Mongoose
const mongoose = require('mongoose');

// MongoDB connection string
const MONGO_URI = 'mongodb://127.0.0.1:27017/week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('Error occurred during connection:', err));

// Define the schema
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number
});

// Create the model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Task 7: Update documents based on criteria and show updated records
const updateAndShowDocuments = async () => {
  try {
    const result = await Person.updateMany({ Gender: "Female" }, { Salary: 5555 });
    console.log('Updated documents are:', result);

    // Fetch and display the updated documents
    const updatedDocs = await Person.find({ Gender: "Female" });
    console.log('Updated records:', updatedDocs);
  } catch (error) {
    console.error('Error:', error);
  }
};

updateAndShowDocuments();
