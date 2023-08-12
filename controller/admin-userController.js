const con = require("../auth/dbConnect");
const bcrypt = require("bcrypt");
const { json } = require("express");



// Profile
const userProfile = (req, res) => {
    const search = parseInt(req.query.userId) || req.body.search
  
    if(!search) {
      return res.render('admin/user-profile', { title : 'User Profile', search : ''})
    }
  
    con.query("SELECT * FROM users WHERE id=? OR email=? OR mobile=?", [ search, search, search ], (e, r) => {
      if (e) {
        return res.redirect('/login')
      }
  
      if(r.length == 0) {
        const msg = {
          class : 'danger',
          text : '<strong>User Not Found! </strong>Please check if ID, Email OR Mobile is correct'
        }
  
        return res.render("admin/user-profile", {
          title: 'User Not Found!', msg, search : search,
        });
      }
  
      con.query("SELECT * FROM auth WHERE id=?", [ r[0].ID ], (err, re) => {
        if (err) {
          return res.redirect('/login')
        }
  
        const log = {
          lastLogin: JSON.parse(re[0].loginLog).lastLogin.substring(0, 24),
          lastChange: re[0].updatedAt.substring(0, 24),
          createdAt: r[0].createdAt.substring(0, 24),
          updatedAt: r[0].updatedAt.substring(0, 24),
        };
  
        con.query("SELECT token FROM usertoken WHERE id=?", [ r[0].ID ], (error, result) => {
            if (error || result.length == 0) {
              return res.redirect('/login')
            }
  
            return res.render("admin/user-profile", {
              title: r[0].name, search : search,
              user: r[0], log, token: result[0].token,
            });
          });
        });
    });
};


// Delete User
const deleteUser = (req, res) => {
    const id = parseInt(req.query.userId)
  
    if(!id) {
      const msg = {
        class : 'warning',
        text : `<strong>Warning : </strong>Must provide UserID.`
      }
      return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
    }
  
    con.query('SELECT * FROM users WHERE id=?', [ id ], (e, r) => {
      if(e) {
        return res.redirect('/login')
      } 
      if(r.length == 0) {
        const msg = {
          class : 'danger',
          text : `<strong>Alert : </strong>Check if UserID is correct.`
        }
        return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
      }
  
      const deletedUserDate = JSON.stringify(r[0])
      const sql = 'INSERT INTO deletedusers (id, userData, deletedAt) VALUES (?,?,?)'
      con.query(sql, [ r[0].ID, deletedUserDate, Date() ], (de, dr) => {
        if(!de) {
        }
      })
  
      con.query('DELETE FROM users WHERE id=?', [ id ], (err, re) => {
        if(err) {
          const msg = {
            class : 'danger',
            text : `<strong>Alert : </strong>Some error in deleting user.`
          }
          return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
        }
        con.query('DELETE FROM auth WHERE id=?', [ id ], (error, result) => {
          if(error) {
            const msg = {
              class : 'danger',
              text : `<strong>Alert : </strong>Some error in deleting user.`
            }
            return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
          }
          con.query('DELETE FROM `token-history` WHERE id=?', [ id ], (errorr, results) => {
            if(errorr) {
              const msg = {
                class : 'danger',
                text : `<strong>Alert : </strong>Some error in deleting user.`
              }
              return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
            }
            con.query('DELETE FROM usertoken WHERE id=?', [ id ], (te, tr) => {
              if(te) {
                const msg = {
                  class : 'danger',
                  text : `<strong>Alert : </strong>Some error in deleting user.`
                }
                return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
              }
              con.query('DELETE FROM tempprint WHERE id=?', [ id ], (tte, ttr) => {
                if(tte) {
                  const msg = {
                    class : 'danger',
                    text : `<strong>Alert : </strong>Some error in deleting user.`
                  }
                  return res.render('admin/user-profile', { title : 'User Profile', msg, search : id })
                }
  
                const msg = {
                  class : 'success',
                  text : `<strong>Success : </strong>User Deleted...`
                }
                return res.redirect(`/admin/deleted-users-view?userId=${id}`)
              })
            })
          })
        })
      })
    })
}


// Search User by ID, Email, Mobile, Adhaar
const searchUser = (req, res) => {
    const { search } = req.body;
    const id = req.session.pid;
  
    if (search == "") {
      return res.redirect("/admin/all-users");
    }
    const sql = 'SELECT * FROM users WHERE id=? OR email=? OR mobile=? OR adhaar=?'
    const values = [ search, search, search, search ]
    con.query(sql, values, (e, r) => {
      if (e) {
        return res.redirect('/login');
      }
      if(r.length == 0) {
        const page = { index: 1 };
        const msg = {
          class : 'danger',
          text : 'User Not Found! Check if ID, Email, Mobile or Adhaar is correct.'
        }
        
        return res.render("admin/all-users", {
          title: `No User!!!`,
          users : [], page, eol : true, search, msg
        });
      }
      const page = { index : 1 }
  
      return res.render("admin/all-users", {
        title: `Search Result &nbsp; 0 &nbsp;`,
        users : r, page, eol : true, search
      });
    })
};
  

// User Change Password
const userPasswordChange = async (req, res) => {
    const id = parseInt(req.query.userId) || req.body.pid
    const { password } = req.body;
  
    if(!id) {
      return res.redirect('/admin/user-profile')
    }
    
    con.query("SELECT * FROM auth WHERE id=?", [ id ], (e, r) => {
      if (e || r.length == 0) {
        return res.redirect('/login')
      }
  
      const hashedPassword = bcrypt.hashSync(password, 10);
      con.query("UPDATE auth SET password=?, updatedAt=? WHERE id=?", [hashedPassword, Date(), id], (err, re) => {
          if (err) {
            return res.redirect('/admin/user-profile')
          }
  
          if (re.changedRows == 1) {
            const msg = {
              class: "success",
              text: `<Strong>Success : </Strong>Password has been changed.`,
            };
            return res.redirect(`/admin/user-profile?userId=${id}`)
          }
        });
    });
};


// Deleted User 
const deletedUserView = (req, res) => {
  const id = parseInt(req.query.userId)
  
  if(!id) {
    return res.redirect('/admin/deleted-users')
  }

  con.query('SELECT * FROM deletedusers WHERE id=?', [ id ], (e, r) => {
    if(e) {
      return res.redirect('/login')
    }

    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : '<strong>User Not Found! </strong>Please check if UserID is correct...'
      }
      return res.render(`admin/deleted-user-view`, { title : `User Not Found!`, msg })
    }

    const user = JSON.parse(r[0].userData)
    return res.render(`admin/deleted-user-view`, { title : `Deleted User ${id}`, user, deletedAt : r[0].deletedAt })
  })
}


// Update User
const updateUserLoad = (req, res) => {
  const search = parseInt(req.query.userId) || req.body.search

  if(!search) {
    const msg = {
      class : 'warning',
      text : `<strong>Alert : </strong>Must provide UserID, Email OR Mobile`
    }
    return res.render('admin/update-user', { title : 'Update User', search : '', msg })
  }

  con.query("SELECT * FROM users WHERE id=? OR email=? OR mobile=?", [ search, search, search ], (e, r) => {
    if (e) {
      return res.redirect('/login')
    }

    if(r.length == 0) {
      const msg = {
        class : 'danger',
        text : '<strong>User Not Found! </strong>Please check if UserID, Email OR Mobile is correct'
      }

      return res.render("admin/update-user", {
        title: 'User Not Found!', msg, search : search,
      });
    }

    con.query("SELECT * FROM auth WHERE id=?", [ r[0].ID ], (err, re) => {
      if (err) {
        return res.redirect('/login')
      }

      const log = {
        createdAt: r[0].createdAt.substring(0, 24),
        updatedAt: r[0].updatedAt.substring(0, 24)
      };

      return res.render("admin/update-user", {
        title: r[0].name, search : search, 
        user: r[0], log
      });
      });
  });
}

const updateUser = (req, res) => {
  const { pid, name, email, mobile, 
    cspName, cspCode, cspLocation, adhaar, pan,
    branchName, branchCode, ifsc, city,
    branchEmail, branchPhone, micr
  } = req.body;

  const sql = `UPDATE users SET name=?, email=?, mobile=?, cspName=?, cspCode=?, cspLocation=?, adhaar=?, pan=?, branchName=?, branchCode=?, ifsc=?, city=?, branchEmail=?, branchPhone=?, micr=?, updatedAt=? WHERE ID=?`

  const values = [ name, email, mobile, 
    cspName, cspCode, cspLocation, adhaar, pan,
    branchName, branchCode, ifsc, city,
    branchEmail, branchPhone, micr, Date(), pid
  ]

  con.query('SELECT * FROM users WHERE id=?', [ pid ], (e, r) => {
    if(e || r.length == 0) {
      return res.redirect(`/admin/user-profile?userId=${pid}`)
    }
    
    const log = {
      createdAt: r[0].createdAt.substring(0, 24),
      updatedAt: r[0].updatedAt.substring(0, 24)
    };

    con.query(sql, values, (err, re) => {
      if(err) {
        const errMsg = validateUser(err.sqlMessage.toUpperCase());
        const msg = {
          class: "danger",
          text: `<strong>Bad Entry : </strong>${errMsg} is already exist.`,
        };

        return res.render("admin/update-user", { title: r[0].name, user: r[0], log, msg, search : pid });
      }

      con.query('SELECT * FROM users WHERE id=?', [ pid ], (e, r) => {
        if(e || r.length == 0) {
          return res.redirect(`/admin/user-profile?userId=${pid}`)
        }
        const msg = {
          class: "success",
          text: `<strong>Success : </strong>User updated...`,
        };

        return res.render("admin/update-user", { title: r[0].name, user: r[0], log, msg, search : pid });
      })
    })
  })
}




// Validate User
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



module.exports = {
    userProfile,
    deleteUser,
    updateUserLoad,
    updateUser,
    searchUser,
    userPasswordChange,
    deletedUserView
}

