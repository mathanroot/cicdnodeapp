const express = require('express');
const app = express();
const port = 9090;

app.get('/', (req, res) => res.send('Hello  Docker I AM FROM GitHub Actions! AND MYSELF  I AM MATHAN'));
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
app.listen(80, () => {
  console.log("Server running on port 80");
});






