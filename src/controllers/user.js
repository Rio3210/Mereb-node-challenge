const Joi = require('joi');
const uuid = require('uuid');

//  personSchema is written here 

const userSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  hobbies: Joi.array().items(Joi.string()).required()
});

const getUsers = (req, res) => {
  const persons = req.app.get('db');
  if (persons.length === 0) {
    return res.status(404).json({ error: 'No persons found' });
  }
  // this checks if we have an id in the param, if exists it will be searching person by id
  const { id } = req.params;
  if (id !== undefined) {
    const person = persons.find((p) => p.id === id);
    if (person) {
      res.json(person);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } else {
    res.json(persons);
  }
};

const createUser = (req, res) => {
  const persons = req.app.get('db');
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    const person = { id: uuid.v4(), ...value };
    persons.push(person);

    /*You guys should change the status code for creation it says 200 in the test 
    but I think it should be 201*/
    res.status(200).json(person);
  }
};

const updateUser = (req, res) => {
  const persons = req.app.get('db');
  const { id } = req.params;
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    const index = persons.findIndex((p) => p.id === id);
    if (index === -1) {
      res.status(404).json({ error: 'Person not found' });
    } else {
      const updatedPerson = { ...persons[index], ...value, id };
      persons[index] = updatedPerson;
      // req.app.set('db', persons);
      res.json(updatedPerson);
    }
  }
};

const deleteUser = (req, res) => {
  const persons = req.app.get('db');
  const { id } = req.params;
  const index = persons.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Person not found' });
  } else {
    persons.splice(index, 1)[0];
    // req.app.set('db', persons);
    res.sendStatus(204);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
