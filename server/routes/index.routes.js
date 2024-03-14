const express = require('express');
const router = express.Router();

// const apiGenreRouter = require('./api/api.genre.routes');
// const apiMovieRouter = require('./api/api.movie.router');
// const apiUsersRouter = require('./api/api.users.routes');
const apiAuthRouter = require('./api/api.auth.routes');
const apiStudentsRouter = require('./api/api.students.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/student', apiStudentsRouter);
// router.use('/api/users', apiUsersRouter);

module.exports = router;
