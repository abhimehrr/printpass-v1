const express = require('express')
const route = express.Router()
const adminController = require('../controller/adminController')
const adminUserController = require('../controller/admin-userController')

// Dashboard
route.get('/dashboard', adminController.loadDashboard)

// Admin Profile
route.get('/profile', adminController.adminProfile)
route.post('/profile', adminController.updateAdmin)

// User Profile
route.get('/user-profile', adminUserController.userProfile)
route.post('/user-profile', adminUserController.userProfile)

// Deleted Users
route.get('/delete-user', adminUserController.deleteUser)
route.get('/deleted-users', adminController.deletedUsers)
route.get('/deleted-users-view', adminUserController.deletedUserView)

// Update User
route.get('/update-user', adminUserController.updateUserLoad)
route.post('/update-user', adminUserController.updateUserLoad)
route.post('/user/update-user', adminUserController.updateUser)
route.get('/user/update-user', (req, res) => {
    return res.redirect('/admin/update-user')
})

route.post('/user/change-password', adminUserController.userPasswordChange)
route.get('/user/change-password', (req, res) => {
    return res.redirect('/admin/user-profile')
})

// Fetch Users
route.get('/all-users', adminController.fetchUsers)
route.post('/all-users', adminUserController.searchUser)


// Token History
route.get('/token-history', adminController.tokenHistory)
route.post('/token-history', adminController.searchTokenHistory)
route.get('/token-receipt', adminController.tokenReceipt)
route.post('/token-receipt', adminController.tokenReceipt)

// Distribute Token
route.get('/distribute-token', adminController.loadDistributeToken)
route.post('/distribute-token', adminController.distributeTokenUserSearch)
route.post('/add-token', adminController.addToken)
route.get('/add-token', (req, res) => {
    return res.redirect('/admin/distribute-token')
})


// Revoke Token
route.get('/revoke-token', adminController.loadRevokeToken)
route.post('/revoke-token', adminController.loadRevokeToken)
route.post('/deduct-token', adminController.revokeToken)
route.get('/deduct-token', (req, res) => {
    return res.redirect('/admin/revoke-token')
})


// Change Password
route.post('/change-password', adminController.changePassword)
route.get('/change-password', (req, res) => {
    return res.redirect('/admin/profile')
})


module.exports = route