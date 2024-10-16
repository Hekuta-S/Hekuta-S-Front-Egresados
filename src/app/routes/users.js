const express = require('express');
const router = express.Router();
const User = require('../moelos/usuario_moel');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send('Usuario registrado exitosamente');
  } catch (error) {
    res.status(500).send('Error al registrar el usuario');
  }
});

module.exports = router;
