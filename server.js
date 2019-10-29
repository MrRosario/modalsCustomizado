const serveStatic = require('serve-static');
const connect     = require('connect');

const app = connect();

app.use(serveStatic("./"));

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});