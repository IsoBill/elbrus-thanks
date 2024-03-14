const router = require('express').Router();
const { Task } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    tasks.sort((a, b) => a.id - b.id);
    res.status(200).json({ message: 'success', tasks });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/', async (req, res) => {
  let task;
  try {
    const { text, status } = req.body;
    task = await Task.create({ text, status });
    res.status(200).json({ message: 'success', task });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: 'success' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const result = await Task.update({ status }, { where: { id } });
    if (result[0]) {
      const task = await Task.findOne({ where: { id } });
      res.status(200).json({ message: 'success', task });
    } else {
      res.status(400).json({ message: 'Не удалось изменить!' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put('/:id/update', async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const result = await Task.update({ text }, { where: { id } });
    if (result[0]) {
      const task = await Task.findOne({ where: { id } });
      res.status(200).json({ message: 'success', task });
    } else {
      res.status(400).json({ message: 'Не удалось изменить!' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
