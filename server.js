const app = require('./server/app');
const { syncAndSeed } = require('./db/models');

//### SEED THE DATABASE (DUMMY DATA)###//
syncAndSeed();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on PORT ${port}`);
});
