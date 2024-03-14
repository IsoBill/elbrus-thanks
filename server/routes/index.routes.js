const express = require('express');
const router = express.Router();

// const apiAuthRouter = require('./api/api.auth.routes');
// const apiGenreRouter = require('./api/api.genre.routes');
// const apiMovieRouter = require('./api/api.movie.router');
const apiTasksRouter = require('./api/api.tasks.routes');
// const apiUsersRouter = require('./api/api.users.routes');

// router.use('/api/auth', apiAuthRouter);
router.use('/api/tasks', apiTasksRouter);
// router.use('/api/users', apiUsersRouter);

module.exports = router;
