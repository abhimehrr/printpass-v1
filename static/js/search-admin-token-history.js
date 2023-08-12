// Search User
const search = document.getElementById('search')
search.addEventListener('input', (e) => {
    const userList = document.querySelectorAll('.search-admin-token-table')
    userList.forEach(list => {
        let r = list.children[0].innerHTML.toLowerCase().includes(e.target.value.toLowerCase()) ||
                list.children[1].innerHTML.includes(e.target.value)
        list.classList.toggle('hide', !r);
    })
})
