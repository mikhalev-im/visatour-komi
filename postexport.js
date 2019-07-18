const fs = require("fs");

fs.writeFileSync("./docs/.nojekyll", "");
fs.writeFileSync("./docs/CNAME", "visatour-komi.ru");
