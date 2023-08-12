const con = require("../auth/dbConnect");
const nodeMailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { json } = require("express");
const secret = require('../auth/secrets')


// Send Mail
const sendMail = require('../auth/send-mail')

// Dashboard
const loadDashboard = (req, res) => {
  return res.render("admin/admin-dashboard", { title: "Dashboard" });
};


// Profile
const adminProfile = (req, res) => {
  const id = req.session.pid;

  con.query("SELECT * FROM users WHERE id=?", [id], (e, r) => {
    if (e || r.length == 0) {
      return res.redirect("/login");
    }

    con.query("SELECT * FROM auth WHERE id=?", [id], (err, re) => {
      if (err || re.length == 0) {
        return res.redirect("/login");
      }

      const log = {
        lastLogin: re[0].lastLogin.substring(0, 24),
        lastChange: re[0].updatedAt.substring(0, 24),
        createdAt: r[0].createdAt.substring(0, 24),
        updatedAt: r[0].updatedAt.substring(0, 24),
      };

      return res.render("admin/admin-profile", {
        title: `Admin ${r[0].name}`, admin: r[0], log
      });
    });
  });
};



// Fetch All Users
const fetchUsers = (req, res) => {
  const id = req.session.pid
  const pageIndex = parseInt(req.query.page) || 1


  con.query('SELECT * FROM users', (e, r) => {
    if (e) {
      const msg = `Uh oh! Sorry,<br>Please Login again!`;
      return res.render("error", { title: "Bad Moments ~", msg });
    }
    if (r.length == 0) {
      return res.redirect("/login");
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
  
      const users = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < temp.length + 1; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        users[j] = temp[i];
        j++;
      }
  
      return res.render("admin/all-users", {
        title: `Joined Users &nbsp; ${pageIndex} &nbsp;`,
        users, page, eol, search: "",
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
  
      const users = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < pageIndex * 20; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        users[j] = temp[i];
        j++;
      }
  
      return res.render("admin/all-users", {
        title: `Joined Users &nbsp; ${pageIndex} &nbsp;`,
        users, page, eol, search: "",
      });
    }
  })
};



// Deleted All Users
const deletedUsers = (req, res) => {
  const pageIndex = parseInt(req.query.page) || 1

  con.query('SELECT * FROM deletedusers', (e, r) => {
    if (e) {
      const msg = `Uh oh! Sorry,<br>Please Login again!`;
      return res.render("error", { title: "Bad Moments ~", msg });
    }
    if (r.length == 0) {
      return res.render("admin/deleted-users", {
        title: `Deleted Users &nbsp; ${pageIndex} &nbsp;`,
        users : [], page, eol : true, search: "",
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
  
      const users = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < temp.length + 1; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        users[j] = temp[i];
        j++;
      }
  
      return res.render("admin/deleted-users", {
        title: `Deleted Users &nbsp; ${pageIndex} &nbsp;`,
        users, page, eol, search: "",
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
  
      const users = [];
      let j = 0;
      let eol
      for (let i = page.skip; i < pageIndex * 20; i++) {
        if (temp[i] === undefined) {
          eol = true
          break;
        }
        users[j] = temp[i];
        j++;
      }
  
      return res.render("admin/deleted-users", {
        title: `Deleted Users &nbsp; ${pageIndex} &nbsp;`,
        users, page, eol, search: "",
      });
    }
  })
};




// Token History
const tokenHistory = (req, res) => {
  const pageIndex = parseInt(req.query.page) || 1

  con.query('SELECT * FROM `token-history`', (e, r) => {
    if(e || r.length == 0) {
      return res.redirect('/login')
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
  
      return res.render("admin/token-history", {
        title: `Token History &nbsp; ${pageIndex} &nbsp;`,
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
  
      return res.render("admin/token-history", {
        title: `Token History &nbsp; ${pageIndex} &nbsp;`,
        histories : tokenHistory, page, eol, search: "",
      });
    }
  })
};


// Search Token History
const searchTokenHistory = (req, res) => {
  const { search } = req.body

  if(search == '') {
    return res.redirect("admin/token-history");
  }

  con.query('SELECT * FROM `token-history` WHERE email=? OR transactionId=?', [ search, search ], (e, r) => {
    if(e || r.length == 0) {
      return res.redirect('/login')
    }

    // Pagination
    const page = { index: 1 };
    const temp = [];
    let k = 0;
    for (let i = r.length - 1; i >= 0; i--) {
      temp[k++] = r[i];
    }
    const tokenHistory = [];
    let j = 0;
    let eol
    for (let i = 0; i < temp.length + 1; i++) {
      if (temp[i] === undefined) {
        eol = true
        break;
      }
      tokenHistory[j] = temp[i];
      j++;
    }

    return res.render("admin/token-history", {
      title: `Token History &nbsp; 1 &nbsp;`,
      histories : tokenHistory, page, eol, search: "",
    });
  })
};


// Distribute Token
const loadDistributeToken = (req, res) => {
  const id = req.query.userId;
  if(!id) {
    return res.render("admin/distribute-token", { title: "Distribute Token", search : '' });
  }

  const sql = 'SELECT * FROM users WHERE id=?'

  con.query(sql, id, (e, r) => {
    if (e) {
      return res.redirect('/login');
    }
    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : 'User Not Found! Check if ID, Email or Mobile is correct.'
      }
      
      return res.render("admin/distribute-token", {
        title: `No User Found!!!`, search : id, msg
      });
    }

    con.query('SELECT * FROM usertoken WHERE id=?', [ r[0].ID ], (err, re) => {
      if(err || re.length == 0) {
        return res.redirect('/login')
      }

      const user = {
        pid : r[0].ID,
        name : r[0].name,
        email : r[0].email,
        mobile : r[0].mobile,
        token : re[0].token
      }
      const msg = {
        class : 'success',
        text : 'Please check if user is correct before transfer token.'
      }
      
      return res.render("admin/distribute-token", {
        title: `Search ${id}`, user, search : id, msg
      });
    })
  })
};


// Search User by ID, Email, Mobile
const distributeTokenUserSearch = (req, res) => {
  const { search } = req.body;

  if (search == "") {
    return res.redirect("/admin/distribute-token");
  }
  const sql = 'SELECT * FROM users WHERE id=? OR email=? OR mobile=?'
  const values = [ search, search, search ]
  con.query(sql, values, (e, r) => {
    if (e) {
      return res.redirect('/login');
    }
    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : 'User Not Found! Check if ID, Email or Mobile is correct.'
      }
      
      return res.render("admin/distribute-token", {
        title: `No User Found!!!`, search, msg
      });
    }

    con.query('SELECT * FROM usertoken WHERE id=?', [ r[0].ID ], (err, re) => {
      if(err || re.length == 0) {
        return res.redirect('/login')
      }

      const user = {
        pid : r[0].ID,
        name : r[0].name,
        email : r[0].email,
        mobile : r[0].mobile,
        token : re[0].token
      }
      const msg = {
        class : 'success',
        text : 'Please check if user is correct before transfer token.'
      }
      
      return res.render("admin/distribute-token", {
        title: `Search ${search}`, user, search, msg
      });
    })
  })
};


// Adding Token
const addToken = (req, res) => {
  const { pid, addToken } = req.body

  con.query('SELECT * FROM usertoken WHERE id=?', [ pid ], (e, r) => {
    if(e || r.length == 0) {
      return res.redirect('/login')
    }
    
    con.query('UPDATE usertoken SET token=? WHERE id=?', [ parseInt(addToken) + r[0].token, pid ], (err, re) => {
      if(!err && re.changedRows == 1) {
        const sql = 'INSERT INTO `token-history` (id, email, opening, purchased, date) VALUES (?, ?, ?, ?, ?)'
        const values = [ pid, r[0].email, r[0].token, addToken, Date() ]

        con.query(sql, values, (error, result) => {
          if(!error) {
            return res.redirect(`/admin/token-receipt?txnID=${result.insertId}`)
          }
        })
      }
    })
  })
}

// Token Receipt
const tokenReceipt = (req, res) => {
  const txnID = req.query.txnID || req.body.search;
  if(!txnID) {
    return res.render("admin/token-receipt", { title: "Token Receipt", search : '' });
  }

  const sql = 'SELECT * FROM `token-history` WHERE transactionId=?'

  con.query(sql, txnID, (e, r) => {
    if (e) {
      return res.redirect('/login');
    }
    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : 'History Not Found! Check if Txn ID is correct.'
      }
      
      return res.render("admin/token-receipt", {
        title: `History Not Found!!!`, search : txnID, msg
      });
    }

    const user = {
      pid : r[0].id,
      email : r[0].email,
      txn : r[0].transactionId,
      purchased : r[0].purchased,
      opening : r[0].opening,
      date : r[0].date,
    }

    return res.render("admin/token-receipt", {
      title: `Search ${txnID}`, user, search : txnID
    });
  })
};


// Revoke Token
const loadRevokeToken = (req, res) => {
  const search = req.query.userId || req.body.search;

  if(!search) {
    return res.render("admin/revoke-token", { title: "Revoke Token", search : '' });
  }

  const sql = 'SELECT * FROM users WHERE id=? OR email=? OR mobile=?'

  con.query(sql, [ search, search, search ], (e, r) => {
    if (e) {
      return res.redirect('/login');
    }
    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : 'User Not Found! Check if ID, Mobile or Email is correct.'
      }
      
      return res.render("admin/revoke-token", {
        title: `User Not Found!!!`, search : search, msg
      });
    }

    con.query('SELECT * FROM usertoken WHERE id=?', [ r[0].ID ], (err, re) => {
      if(err || re.length == 0) {
        return res.redirect('/login')
      }

      const user = {
        pid : r[0].ID,
        name : r[0].name,
        email : r[0].email,
        mobile : r[0].mobile,
        token : re[0].token
      }
      const msg = {
        class : 'success',
        text : 'Please check if user is correct before revoke token.'
      }

      return res.render("admin/revoke-token", {
        title: `Search ${search}`, search : search, msg, user
      });
    })
  })
};

const revokeToken = (req, res) => {
  const { pid, revokeToken } = req.body

  con.query('SELECT * FROM usertoken WHERE id=?', [ pid ], (e, r) => {
    if(e || r.length == 0) {
      return res.redirect('/login')
    }

    if(r[0].token < revokeToken) {
      const msg = {
        class : 'warning',
        text : `<strong>Warning : </strong>Revoke Token must be greater than existing token.`
      }

      return res.render(`admin/revoke-token`, { title : 'Revoke Token', msg, search : pid })
    }
    
    con.query('UPDATE usertoken SET token=? WHERE id=?', [ r[0].token - parseInt(revokeToken), pid ], (err, re) => {
      if(err) {
        return res.redirect('/login')
      }
      if(re.changedRows == 1) {
        return res.redirect(`/admin/revoke-token?userId=${r[0].id}`)
      }
    })
  })
}


// Change Password
const changePassword = async (req, res) => {
  const id = req.session.pid;
  const { oldPassword, password } = req.body;

  con.query("SELECT * FROM auth WHERE id=?", [id], (e, r) => {
    if (e || r.length == 0) {
      return res.redirect("/forget-password");
    }

    const passMatched = bcrypt.compareSync(oldPassword, r[0].password);

    if (passMatched) {
      const hashedPassword = bcrypt.hashSync(password, 10);

      con.query("UPDATE auth SET password=?, updatedAt=? WHERE id=?", [hashedPassword, Date(), id],
        (err, re) => {
          if (err) {
            return res.redirect('/login')
          }

          if (re.changedRows == 1) {
            const msg = {
              class: "success",
              text: `<Strong>Success : </Strong>Password has been changed.`,
            };
            return res.redirect('/admin/profile')
          }
        });
    } else {
      const msg = {
        class: "danger",
        text: `<Strong>Access Denied : </Strong>Old Password does not matched.`,
      };
      return res.render("admin/change-password", {
        title: "Password Not Machted...", msg
      });
    }
  });
};

// Update Admin
const updateAdmin = (req, res) => {
  const id = req.session.pid;
  const { email, mobile } = req.body;

  if(email == '' || mobile == '') {
    return res.redirect('/admin/profile')
  }

  con.query("SELECT * FROM users WHERE id=?", [id], (e, r) => {
    if (e || r.length == 0) {
      return res.redirect("/login");
    }

    const sql = 'UPDATE users SET email=?, mobile=?, updatedAt=? WHERE id=?'
    const values = [ email, mobile, Date(), id ]
    con.query(sql, values, (err, re) => {
      if(err) {
        return res.redirect("/login");
      }
      if(re.changedRows == 1) {
        return res.redirect('/admin/profile')
      }
    })
  });
};

module.exports = {
  loadDashboard,
  adminProfile,
  fetchUsers,
  deletedUsers,
  tokenHistory,
  searchTokenHistory,
  loadDistributeToken,
  distributeTokenUserSearch,
  addToken,
  tokenReceipt,
  loadRevokeToken,
  revokeToken,
  changePassword,
  updateAdmin
};
