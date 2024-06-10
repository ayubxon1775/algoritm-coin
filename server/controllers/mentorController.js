const Mentor = require('../models/Mentor');

const getAllTeachers = async (req, res) => {
  const mentors = await Mentor.findAll();
  res.send(mentors);
};

const getTeacherWithPupils = async (req, res) => {
  const { id } = req.params;
  const mentor = await Mentor.findByPk(id, {
    include: ['pupils'], // Assuming you have a relation defined in the model
  });
  res.send(mentor);
};

const createMentor = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const mentor = await Mentor.create({ name, email, password: hashedPassword });
  res.status(201).send(mentor);
};

const updateMentor = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const mentor = await Mentor.findByPk(id);

  if (!mentor) {
    return res.status(404).send({ error: 'Mentor not found' });
  }

  Object.keys(updates).forEach(update => mentor[update] = updates[update]);
  await mentor.save();
  res.send(mentor);
};

const deleteMentor = async (req, res) => {
  const { id } = req.params;
  await Mentor.destroy({ where: { id } });
  res.send({ message: 'Mentor deleted successfully' });
};

module.exports = { getAllTeachers, getTeacherWithPupils, createMentor, updateMentor, deleteMentor };
