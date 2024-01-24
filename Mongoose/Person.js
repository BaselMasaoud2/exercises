
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number
});

const Person = mongoose.model("person", personSchema);

const PersonModel = {
  getAll: () => {
    return Person.find({});
  },
  createPerson: (person) => {
    return Person.create(person);
  },
  setAgeById: (id, age) => {
    return Person.findByIdAndUpdate(id, { age: age });
  },
  deleteAll: () => {
    return Person.deleteMany({});
  }
};

module.exports = { Person, PersonModel };
