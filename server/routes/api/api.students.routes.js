const router = require('express').Router();
const { Student } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    students.sort((a, b) => b.thanks - a.thanks);
    res.status(200).json({ message: 'success', students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Student.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'Удаление не произошло!' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phase } = req.body;
    const result = await Student.update({ name, phase }, { where: { id } });
    if (result[0]) {
      const student = await Student.findOne({ where: { id } });
      res.status(200).json({ message: 'success', student });
    } else {
      res.status(400).json({ message: 'Не удалось изменить данные студента!' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:id/thanks', async (req, res) => {
  try {
    const { id } = req.params;
    const { thanks } = req.body;
    if (thanks < 0) {
      res.status(400).json({ message: 'Нельзя сделать меньше 0 "Спасибо" !' });
      return;
    }
    const result = await Student.update({ thanks }, { where: { id } });
    if (result[0]) {
      const student = await Student.findOne({ where: { id } });
      res.status(200).json({ message: 'success', student });
    } else {
      res.status(400).json({ message: 'Не удалось добавить "Спасибо" !' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/', async (req, res) => {
  let student;
  try {
    const { name } = req.body;
    student = await Student.findOne({ where: { name } });
    if (student) {
      res
        .status(400)
        .json({ message: 'This student is already exist, rename him' });
      return;
    }
    student = await Student.create({
      name,
      thanks: 0,
      phase: 1,
    });

    if (student) {
      student = await Student.findOne({ where: { name } });
      res.status(201).json({ message: 'success', student });
    }
    res.status(400).json();
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/phase1', async (req, res) => {
  try {
    const students = await Student.findAll({ where: { phase: 1 } });
    res.status(200).json({ message: 'success', students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get('/phase2', async (req, res) => {
  try {
    const students = await Student.findAll({ where: { phase: 2 } });
    res.status(200).json({ message: 'success', students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get('/phase3', async (req, res) => {
  try {
    const students = await Student.findAll({ where: { phase: 3 } });
    res.status(200).json({ message: 'success', students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
