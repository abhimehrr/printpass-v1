const con = require("../auth/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const hostDomain = 'http://localhost:5000'

// Hash Password
const hashPassword = async (password) => bcrypt.hash(password, 10);

// Send Mail
const sendMail = require('../auth/send-mail')


// Load Home
const loadHome = async (req, res) => {
  res.render("home/index", { title: "Home" });
};


// Login

const loadLogin = async (req, res) => {
  res.render("home/login", { title: "Login", email: "" });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    con.query("SELECT id, password, isVerified, isAdmin, lastLogin, loginTime FROM auth WHERE email=?", [ email ], (e, r) => {
        if (e) {
          return res.send("We are facing some technical issues and trying to fix it soon.<br>Please be patient." + e);
        }

        if (r.length == 0) {
          const msg = {
            class: "danger",
            text: `<strong>Access Denied : </strong>User doesn't exist`,
          };
          return res.render("home/login", { title: "Login", msg, email });
        }

        const passwordMatch = bcrypt.compareSync(password, r[0].password);
        if (passwordMatch) {
          if (r[0].isVerified == 0) {
            const msg = {
              class: "warning",
              text: `<strong>Email Not Verified : </strong>Please verify your email. <a href="/request-verification-email" class="form-link">Click Here</a>`,
            };
            return res.render("home/login", { title: "Login", msg, email });
          }

          
          req.session.pid = r[0].id;
          req.session.ssid = accessToken({
            id: r[0].id, email,
            isAdmin: r[0].isAdmin,
          });

          con.query("UPDATE auth SET lastLogin=?, loginTime=? WHERE email=?", [r[0].loginTime, Date(), email], (err, re) => {
              if (err) {
                return res.redirect('/login');
              } else {
                if (r[0].isAdmin == 1) {
                  return res.redirect("/admin/dashboard");
                }
                return res.redirect("/user/dashboard");
              }
            }
          );
        } else {
          const msg = {
            class: "danger",
            text: `<strong>Access Denied : </strong>INVALID Credentials.`,
          };
          return res.render("home/login", { title: "Login", msg, email });
        }
      }
    );
  } catch (error) {
    return res.send("We are facing some technical issues and trying to fix it soon.<br>Please be patient.");
  }
};

// User Registration

const loadRegister = async (req, res) => {
  return res.render("home/register", { title: "Register", value: req.body });
};

const userRegistration = async (req, res) => {
  const {
    name,
    email,
    mobile,
    password,
    branchName,
    branchAddress,
    branchCode,
    ifsc,
    city,
    branchEmail,
    branchPhone,
    micr,
  } = req.body;

  const sql = `INSERT INTO users (name, email, mobile, branchName, branchAddress, branchCode, ifsc, city, branchEmail, branchPhone, micr, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

  const hashedPassword = await hashPassword(password);
  const token = generateToken();

  const value = [
    name,
    email,
    mobile,
    branchName,
    branchAddress,
    branchCode,
    ifsc,
    city,
    branchEmail,
    branchPhone,
    micr,
    Date(),
    Date(),
  ];

  con.query(sql, value, (e, r) => {
    if (e) {
      const err = validateUser(e.sqlMessage.toUpperCase());
      const msg = {
        class: "danger",
        text: `<strong>Bad Entry : </strong>${err} is already exist.`,
      };
      return res.render("home/register", { title: "Register", msg, value: req.body });
    }

    const body = 
    `<p style="background-color: rgb(46, 46, 46); padding: 1rem; border-radius: 8px; color: white; font-size: 1.2rem; text-align: center;">
    <strong>Welcome ${name},</strong><br><br> Thank you for your registration with us. Please verify your email to access the dashboard. 
    We need to verify that the email belongs to you. <br><br>
    <a href="${hostDomain}/verify-email?auth=${token}" style="font-weight: bold;">Verify Email</a>
    </p>`;

    insertIntoToken(r.insertId, name, email);
    insertIntoAuth(r.insertId, name, email, hashedPassword, token);
    sendMail(email, "Thanks ~ Registration Success!", body);
    return res.render("home/registration-success", { title: "Registration Success", name, email });
  });
};




// Forget Password

const loadForgetPassword = async (req, res) => {
  return res.render("home/forget-password", {
    title: "Forget Password",
    email: "",
  });
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  con.query( "SELECT name, isVerified FROM auth WHERE email=?", [email], (e, r) => {
      if (e) {
        const msg = {
          class: "danger",
          text: `<Strong>Access Denied : </Strong>Some error occured.`,
        };
        return res.render("home/forget-password", {
          title: "Forget Password",
          msg,
          email,
        });
      }
      if (r.length == 0) {
        const msg = {
          class: "danger",
          text: `<Strong>Access Denied : </Strong>Email doesn't exist.`,
        };
        return res.render("home/forget-password", {
          title: "Forget Password",
          msg,
          email,
        });
      }

      if (r[0].isVerified == 0) {
        const msg = {
          class: "warning",
          text: `<strong>Email Not Verified : </strong>Please verify your email. <a href="/request-verification-email" class="form-link">Click Here</a>`,
        };
        return res.render("home/forget-password", { title: "Forget Password", msg, email });
      }
      const token = generateToken();
      con.query("UPDATE auth SET authToken=? WHERE email=?", [token, email], (err, data) => {
          if (err) {
            const msg = {
              class: "danger",
              text: `<Strong>Access Denied : </Strong>Some error occured.`,
            };
            return res.render("home/forget-password", { title: "Forget Password", msg, email });
          }
          if (data.changedRows == 1) {
            const body = `
              <p style="background-color: rgb(46, 46, 46); padding: 1rem; border-radius: 8px; color: white; font-size: 1.2rem; text-align: center;">
                <strong>Dear ${r[0].name},<br></strong> Your password reset link is generated. If not requested by you please ignore!
                Click below to reset password : <br><br>
                <a href="${hostDomain}/reset-password?auth=${token}" style="font-weight: bold;">Reset</a>
              </p>
              `;

            sendMail(email, "Alert! Reset your password", body);
            const user = { name: r[0].name, email };
            return res.render("home/forget-password", { title: "Forget Password", user, email });
          }
        }
      );
    }
  );
};

const verifyResetPassword = async (req, res) => {
  const token = req.query.auth;
  if (token == "") {
    const msg = `Uh no, Sorry...<br> This page is not authorized at this moment.`;
    return res.render("error", { title: "Alert : Unauthorized", msg });
  } else if (!token) {
    const msg = `Looks like you don't have a authorization token!<br>Kindly request a password reset link again!!!<br><br>
                <a href="/forget-password" class="msg success">Request New Link</a>`;
    return res.render("error", { title: "Alert : Unauthorized", msg });
  }
  con.query("SELECT email FROM auth WHERE authToken=?", [token], (e, r) => {
    if (e) {
      const msg = `Looks like server error! Uh Sorryyyyyy...<br>Please try again after sometime.`;
      return res.render("error", { title: "Server Error!", msg });
    }
    if (r.length == 0) {
      const msg = `Reset link has been expired or invalid...<br>Kindly request another link.<br><br>
                  <a href="/forget-password" class="msg success">Request New Link</a>`;

      return res.render("error", { title: "Link Expired or Invalid", msg });
    }
    res.render("home/reset-password", {
      title: "Reset Password",
      authToken: token,
    });
  });
};

const resetPassword = async (req, res) => {
  const { authToken, password } = req.body;
  const hashedPassword = await hashPassword(password);

  if (authToken == "") {
    const msg = {
      class: "warning",
      text: `<Strong>Warning : </Strong>If you think you're bad hacker, Listen... I'm your Dad.`,
    };
    return res.render("home/reset-password", {
      title: "Hacker Mat Bano!",
      msg,
      authToken,
    });
  }

  con.query( "SELECT name, email FROM auth WHERE authToken=?", [authToken], (e, r) => {
      if (e) {
        const msg = {
          class: "danger",
          text: `<Strong>Access Denied : </Strong>Something went wrong...`,
        };
        return res.render("home/reset-password", {
          title: "Bad Moment ~",
          msg,
          authToken,
        });
      }
      if (r.length == 0) {
        const msg = {
          class: "danger",
          text: `<Strong>Tempered Warning : </Strong>Authorization token has been tempered.`,
        };
        return res.render("home/reset-password", { msg,
          title: "Tempered Warning : Reset Password", authToken
        });
      }
      if (r.length == 1) {
        const sql =
          "UPDATE auth SET password=?, authToken=?, updatedAt=? WHERE authToken=?";

        con.query(sql, [hashedPassword, "", Date(), authToken], (err, re) => {
          if (err) {
            const msg = {
              class: "danger",
              text: `<Strong>Access Denied : </Strong>Something went wrong...`,
            };
            return res.render("home/reset-password", {
              title: "Bad Moment ~",
              msg,
              authToken,
            });
          }
          if (re.changedRows == 1) {
            const body = `
              <p style="background-color: rgb(46, 46, 46); padding: 1rem; border-radius: 8px; color: white; font-size: 1.2rem; text-align: center;">
                <strong>Dear ${r[0].name},</strong><br> This is to inform you that your password has been
                changed. If this change is not made by you, please report to admin or secure your email.
                <br>
                Click below to Login into your account : <br><br>
                <a href="${hostDomain}/login" style="font-weight: bold;">Login</a>
              </p>
              `;
            sendMail(r[0].email, "Alert! Password Changed.", body);
            const msg = {
              class: "success",
              text: `<Strong>Success : </Strong>Password has been changed.`,
            };
            return res.render("home/reset-password", {
              title: "Success : Reset Password", msg, authToken,
            });
          }
        });
      }
    }
  );
};


// requestVerificationEmail
const loadRequestVerificationEmail = async (req, res) => {
  res.render("home/request-verification-email", {
    title: "Verify Email",
    email: "",
  });
};


const requestVerificationEmail = async (req, res) => {
  try {
    const { email } = req.body;

    con.query("SELECT name, isVerified FROM auth WHERE email=?", [email], (e, r) => {
      if (r.length == 0) {
        const msg = {
          class: "danger",
          text: `<Strong>Warning : </Strong>Email doesn't exist.`,
        };
        return res.render("home/request-verification-email", {
          title: "Verify Email",
          msg,
          email,
        });
      }

      if (r[0].isVerified == 1) {
        const msg = {
          class: "success",
          text: `<Strong>Success : </Strong>Email is already verified.`,
        };
        return res.render("home/request-verification-email", {
          title: "Verify Email",
          msg,
          email,
        });
      }

      const token = generateToken();
      con.query("UPDATE auth SET authToken=? WHERE email=?", [token, email], (err, data) => {
          if (err) {
            const msg = {
              class: "danger",
              text: `* * *`,
            };
            return res.render("home/request-verification-email", { title: "Bad Moment ~", msg });
          }

          const body = `
              <p style="background-color: rgb(46, 46, 46); padding: 1rem; border-radius: 8px; color: white; font-size: 1.2rem; text-align: center;">
                <strong>Dear ${r[0].name},</strong><br> Your email is not verified with us. Prove this email belongs to you.
                Please verify your email to access the dashboard. <br><br>
                <a href="${hostDomain}/verify-email?auth=${token}" style="font-weight: bold;">Verify Email</a>
              </p>
              `;
          sendMail(email, "Alert! Verify your email", body);
          const msg = {
            class: "success",
            text: `<Strong>Success : </Strong>Link has been sent to ${email}.`,
          };
          res.render("home/request-verification-email", { title: "Link Sent", msg, email });
        }
      );
    });
  } catch (error) {
    return res.redirect("/error");
  }
};

const verifyEmail = async (req, res) => {
  const token = req.query.auth;
  const sql = "SELECT email FROM auth WHERE authToken=?";

  con.query(sql, [token], (e, r) => {
    if (r.length == 0) {
      const msg = `Verification link has been expired or invalid...<br>Kindly request another link.<br><br><a href="/request-verification-email" class="msg success">Request New Link</a>`;
      return res.render("error", { title: "Link Expired or Invalid", msg });
    }

    con.query(
      'UPDATE auth SET isVerified=1, authToken="" WHERE authToken=?',
      [token],
      (err, data) => {
        if (err) {
          const msg = `Verification failed...<br>Sorry for inconvenience caused.`;
          return res.render("error", { title: "Bad Moment ~", msg });
        }
        con.query(
          "UPDATE users SET isVerified=1, updatedAt=? WHERE email=?",
          [Date(), r[0].email],
          (er, d) => {
            if (err) {
            } else {
            }
          }
        );
        return res.render("home/verification-success", { title: "Verification Success", email: r[0].email });
      }
    );
  });
};

//Insert Token
const insertIntoToken = (id, name, email) => {
  const sql = "INSERT INTO usertoken (id, name, email) VALUES (?, ?, ?)";
  const value = [ id, name, email ];

  con.query(sql, value, (e, r) => {
    if (e) {
    }
    if (r) {
    }
  });
};

// Insert Data into auth
const insertIntoAuth = (id, name, email, password, authToken) => {
  const sql = "INSERT INTO auth (id, name, email, password, authToken) VALUES (?, ?, ?, ?, ?)";
  const value = [id, name, email, password, authToken];
  con.query(sql, value, (e, r) => {
    if (e) {
    }
    if (r) {
    }
  });
};

//Generate Token
const generateToken = () => {
  const char = `123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  let str = "";
  for (let i = 0; i < char.length; i++) {
    str += char[Math.floor(Math.random() * char.length)];
  }
  return str;
};

const validateUser = (s) => {
  let str = "";
  let j = 0;
  let len = s.length - 1;

  for (let i = 0; i < len; i++) {
    if (s[i] == "'") {
      j++;
      if (j === 3) {
        for (let k = i; k < len; k++) {
          str += s[k];
        }
      }
    }
  }
  return str.substring(1, str.length);
};

const accessToken = (payload) => {
  return jwt.sign(payload, require('../auth/secrets').ssid);
};

module.exports = {
  loadHome,
  loadLogin,
  login,
  loadRegister,
  userRegistration,
  loadForgetPassword,
  forgetPassword,
  loadRequestVerificationEmail,
  requestVerificationEmail,
  verifyEmail,
  verifyResetPassword,
  resetPassword,
};
