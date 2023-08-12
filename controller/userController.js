const con = require("../auth/dbConnect");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Send Mail
const sendMail = require('../auth/send-mail')

// Dashboard
const loadDashboard = (req, res) => {
  const id = req.session.pid;

  con.query("SELECT * FROM usertoken WHERE id=?", [id], (error, result) => {
    if (error || result.length == 0) {
      console.log('error : ', error)
      return res.redirect('/login')
    }

    if (result[0].token == 0) {
      return res.render("user/no-token-error", { 
        title: "Alert : Insufficient Token",
        name: result[0].name,
        token: result[0].token,
      });
    }

    return res.render("user/user-dashboard", {
      title: "Dashboard",
      name: result[0].name,
      token: result[0].token,
    });
  });
};

 
// Dashboard Print Passbook
const generatePassbook = (req, res) => {
  const id = req.session.pid;

  const { cif, account, accountType, title, customerName, guardian,
    pan, mobile, dateOfIssue, address, distt, state, pin 
  } = req.body;

  let doi = dateOfIssue.split("-");
  doi = `${doi[2]}/${doi[1]}/${doi[0]}`;

  con.query("SELECT * FROM usertoken WHERE id=?", [id], (e, r) => {
    if (e || r.length == 0) {
      return res.redirect('/login')
    }

    if (r[0].token <= 0) {
      const msg = `Insufficient Token,<br>Purchase token for access the dashboard or print <br> Please Contact Admin...`;
      return res.render("error", { title: "Alert : Insufficient Token", msg });
    }

    const token = r[0].token - 1;
    const usedToken = r[0].usedToken + 1;

    con.query("UPDATE usertoken SET token=?, usedToken=? WHERE id=?", [token, usedToken, id], (err, re) => {
        if (err) {
          const msg = `Uh oh! Sorry,<br>Please Login again!`;
          return res.render("error", { title: "Bad Moments ~", msg });
        }
        if (re.changedRows == 1) {
          con.query("SELECT * FROM users WHERE id=?", [id], (error, result) => {
            if (!error) {
              const value = [{ cif, account, accountType, title, customerName,
                               guardian, pan, mobile, doi, address, distt, state, pin,
                              }, { branch: result[0] }
              ];
              
              con.query("INSERT INTO printed (id, data, date) VALUES (?, ?, ?)", [id, JSON.stringify(value), Date()], (ee, rr) => {
                if (!ee) {
                  return res.redirect("/user/print-preview");
                }
              });
            }
          });
        }
      });
  });
};


// Print Page Redirect
const printPageRedirect = (req, res) => {
  req.session.redirect = true
  return res.redirect('/user/print-page')
}

// Print Page
const printPage = (req, res) => {
  const id = req.session.pid;
  const redirect = req.session.redirect

  if(!redirect || redirect == undefined || redirect == null) {
    const msg = `Uh oh! Sorry,<br>This page is not allowed`
    return res.render('error', { title : 'Not Allowed', msg })
  }
  
  con.query("SELECT * FROM printed WHERE id=?", [id], (err, r) => {
    if (err) {
      return res.redirect('/login')
    }

    req.session.redirect = false

    if(r.length < 1) {
      return res.render("user/print-page", {
        title: "No data found!!!"
      });
    }

    const data = JSON.parse(r[r.length-1].data);

    return res.render("user/print-page", {
      title: "Print Page",
      name: r[0].name,
      token: r[0].token,
      pass: data[0], pid : id,
      branch: data[1].branch
    });
  })

}


// Help
const loadHelp = (req, res) => {
  const id = req.session.pid;

  con.query("SELECT * FROM usertoken WHERE id=?", [id], (error, result) => {
    if (error || result.length == 0) {
      return res.redirect('/login')
    }

    return res.render("user/help", {
      title: "Help", token: result[0].token,
      name: result[0].name, user: result[0],
    });
  });
};


const help = (req, res) => {
  const { mobile, subject, message } = req.body;
  const id = req.session.pid;

  con.query("SELECT * FROM usertoken WHERE id=?", [id], (error, result) => {
    if (error || result.length == 0) {
      return res.redirect('/login')
    }

    const msg = {
      class: "success",
      text: `<strong>Success : </strong>We will get you back soon.`,
    };

    const body = `
              <p style="color: grey; font-size: 1.2rem; text-align: center;">
                <strong>Dear Admin,</strong> Help Please!.<br>
                A user is facing an issue : <br><br>
                Name : ${result[0].name}<br>
                Email : ${result[0].email}<br>
                Mobile : ${mobile}<br>
                Subject : ${subject}<br>
                Message :<br> ${message}<br><br>
                Help them as soon as possible.
              </p>
              `;

    sendMail("printpasssbi@gmail.com", "Help me! ${result[0].name}", body);
    return res.render("user/help", {
      title: "Help", token: result[0].token,
      name: result[0].name, msg, user: result[0],
    });
  });
};



// Profile
const profile = (req, res) => {
  const id = req.session.pid;

  con.query("SELECT * FROM users WHERE id=?", [id], (e, r) => {
    if (e || r.length == 0) {
      return res.redirect('/login')
    }

    con.query("SELECT * FROM auth WHERE id=?", [id], (err, re) => {
      if (err || re.length == 0) {
        return res.redirect('/login')
      }

      const log = {
        lastLogin: re[0].lastLogin.substring(0, 24),
        lastChange: re[0].updatedAt.substring(0, 24),
        createdAt: r[0].createdAt.substring(0, 24),
        updatedAt: r[0].updatedAt.substring(0, 24),
      };

      con.query("SELECT token FROM usertoken WHERE id=?", [id], (error, result) => {
          if (error || result.length == 0) {
            return res.redirect('/login')
          }

          return res.render("user/user-profile", {
            title: r[0].name, name: r[0].name,
            user: r[0], log, token: result[0].token
          });
        });
    });
  });
};


// Token History
const tokenHistory = (req, res) => {
  const pageIndex = parseInt(req.query.page) || 1;
  const id = req.session.pid;

  con.query('SELECT * FROM usertoken WHERE id=?', [ id ], (err, re) => {
    if(err || re.length == 0) {
      return res.redirect('/login')
    }
    con.query("SELECT * FROM `token-history` WHERE id=?", [id], (e, r) => {
      if (e) {
        return res.redirect('/login')
      }

      if(r.length == 0) {
        const page = { index : 1}
        return res.render("user/token-history", {
          title: `No History`,
          token: re[0].token,
          page, eol : true,
          name: re[0].name,
          histories: r,
          search: "",
        });
      }
    
      // Pagination
      if(pageIndex == -1) {
      const page = {
        index: pageIndex,
        skip: 0
      };
  
      const temp = [];
      let k = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        temp[k++] = r[i];
      }
  
      const tokenHistory = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < temp.length + 1; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        tokenHistory[j] = temp[i];
        j++;
      }
  
      return res.render("user/token-history", {
        title : `Token History &nbsp; ${pageIndex} &nbsp;`,
        token : re[0].token, name : re[0].name,
        histories : tokenHistory, page, eol, search: "",
      });
    } else {
      const page = {
        index: pageIndex,
        skip: 20 * (pageIndex - 1),
      };
  
      const temp = [];
      let k = 0;
      for (let i = r.length - 1; i >= 0; i--) {
        temp[k++] = r[i];
      }
  
      const tokenHistory = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < pageIndex * 20; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        tokenHistory[j] = temp[i];
        j++;
      }
  
      return res.render("user/token-history", {
        title: `Token History &nbsp; ${pageIndex} &nbsp;`,
        token : re[0].token, name : re[0].name,
        histories : tokenHistory, page, eol, search: "",
      });
    }
    })
  })
};


// Search Token History by Txn No.
const searchToken = (req, res) => {
  const { search } = req.body;
  const id = req.session.pid;

  con.query('SELECT * FROM usertoken WHERE id=?', [id], (e, r) => {
    if(e || r.length == 0) {
      return res.redirect('/login')
    }
    if (search == "") {
      return res.redirect("/user/token-history");
    }
    
    con.query("SELECT * FROM `token-history` WHERE transactionId=?", [search], (err, re) => {
      if(err) {
        return res.redirect('/login')
      }
      if(re.length == 0) {
        const page = { index: 1 };
        return res.render("user/token-history", {
          title: `Token Not Found!`,
          token: r[0].token,
          page, eol : true, name: r[0].name,
          histories: r, search,
        });
      }

      const page = { index: 1 };
      return res.render("user/token-history", {
        title: `Token History &nbsp; 1 `,
        token: r[0].token, histories: re,
        name: r[0].name, page, eol: true, search,
      });
    })
  })
};


// Change Password
const changePassword = async (req, res) => {
  const id = req.session.pid;
  const { oldPassword, password } = req.body;

  con.query("SELECT * FROM usertoken WHERE id=?", [id], (error, result) => {
    if (error || result.length == 0) {
      return res.redirect('/login')
    }

    con.query("SELECT * FROM auth WHERE id=?", [id], (e, r) => {
      if (e || r.length == 0) {
        return res.redirect('/login')
      }

      const passMatched = bcrypt.compareSync(oldPassword, r[0].password);

      if (passMatched) {
        const hashedPassword = bcrypt.hashSync(password, 10);

        con.query("UPDATE auth SET password=?, updatedAt=? WHERE id=?", [hashedPassword, Date(), id], (err, re) => {
            if (err) {
              const msg = {
                class: "danger",
                text: `<Strong>Access Denied : </Strong>Something went wrong...`,
              };
              return res.render("user/change-password", {
                title: "Bad Moment ~",
                token: result[0].token,
                msg,
                name: "User",
              });
            }

            if (re.changedRows == 1) {
              const msg = {
                class: "success",
                text: `<Strong>Success : </Strong>Password has been changed.`,
              };
              return res.render("user/change-password", {
                title: "Password Changed",
                token: result[0].token,
                msg,
                name: result[0].name,
              });
            }
          }
        );
      } else {
        const msg = {
          class: "danger",
          text: `<Strong>Access Denied : </Strong>Old Password does not matched.`,
        };
        return res.render("user/change-password", {
          title: "Password Not Machted...",
          token: result[0].token,
          msg,
          name: result[0].name,
        });
      }
    });
  });
};



module.exports = {
  loadDashboard,
  generatePassbook,
  loadHelp,
  help,
  profile,
  tokenHistory,
  searchToken,
  changePassword,
  printPageRedirect,
  printPage
};
