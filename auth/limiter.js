const limiter = require("express-rate-limit");

module.exports = limiter({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: `
  <link rel="stylesheet" href="/static/css/main.css">

    <div class="container">
        <h1>To many requests</h1>
        <p>Dear User, You have excced the limit of request <br>
            Please try again after 1 hour</p>
        <p><strong>Sorry </strong>for inconvience caused</p>

        <h3>Return : </h3>

        <a href="/">Home</a>
        <a href="/login">Login</a>
    </div>
    `,
});
