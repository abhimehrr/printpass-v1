// Delete user
const deleteUser = (id) => {
    alert(`Deleted user can't be restored, Please be sure before deletion...`)
    const cfm = confirm('Delete User -- Are you sure?')
    if(cfm) {
        window.location.href = `http://localhost:5000/admin/delete-user?userId=${id}`
    }
}


// Search User
const search = document.getElementById('search')
search.addEventListener('input', (e) => {
    const userList = document.querySelectorAll('.user-list-admin')
    userList.forEach(list => {
        let r = list.children[0].innerHTML.includes(e.target.value) || 
                list.children[1].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) || 
                list.children[2].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ||
                list.children[3].innerHTML.includes(e.target.value)
        
        list.classList.toggle('hide', !r);
    })
})


// Show users by status
const userStatus = document.querySelectorAll('.status')
const verifiedOption = document.getElementById('verified-option')
if(verifiedOption != null) {
    verifiedOption.addEventListener('change', () => {
        const optionSelected = verifiedOption.options.selectedIndex
        // All
        if(optionSelected === 0) {
            const userListBody = document.getElementById('user-list-body')
            userListBody.innerHTML = ''
            userStatus.forEach(user => {
                userListBody.append(user.parentElement)
            })
        }
    
        // Yes
        if(optionSelected === 1) {
            const userListBody = document.getElementById('user-list-body')
            userListBody.innerHTML = ''
            userStatus.forEach(user => {
                if(user.innerHTML == 'Yes') {
                    userListBody.append(user.parentElement)
                }
            })
        }
    
        // No
        if(optionSelected === 2) {
            const userListBody = document.getElementById('user-list-body')
            userListBody.innerHTML = ''
    
            userStatus.forEach(user => {
                if(user.innerHTML == 'No') {
                    userListBody.append(user.parentElement)
                }
            })
        }
    })
}
