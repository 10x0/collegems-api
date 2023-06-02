const app = require('./app');
const { establishDB } = require('./db');
const PORT = process.env.PORT ?? 5000;

async function main() {
  await establishDB();
  app.listen(PORT, () => console.log(`Running on ${PORT}`));
}

main();
