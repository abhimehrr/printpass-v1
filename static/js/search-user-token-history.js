// Search User
const search = document.getElementById('search')
search.addEventListener('input', (e) => {
    const userList = document.querySelectorAll('.user-token-table')
    userList.forEach(list => {
        let r = list.children[0].innerHTML.includes(e.target.value)
        list.classList.toggle('hide', !r);
    })
})
