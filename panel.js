const form = document.getElementById('form')
const dataUser = document.getElementById('user')
const listRepos = document.getElementById('repos')
const error = document.getElementById('error')

clearData = () => {
    dataUser.innerHTML = ''
    listRepos.innerHTML = ''
    error.innerHTML = ''
}

form.addEventListener('submit', event => {
    event.preventDefault()
    clearData()
    const username = document.getElementById('username').value
    if (username !== '') {
        logic.searchUser(username)
            .then(user => {
                if (user.message === 'Not Found') {
                    showError()
                } else {
                    showUser(user)
                    logic.retrieveRepos(username)
                        .then(repos => showRepos(repos))
                }
            })
    }
})

showUser = user => {
    error.style.display = "none"
    dataUser.style.display = "block"
    dataUser.innerHTML = `<div>
            <img src=${user.avatar_url}/>
            <div>
                <p>@${user.login}</p>
                <h2>${user.name}</h2>
                <h6>${user.bio}</h6>
            </div>
        </div> `
}

showRepos = repos => {
    error.style.display = "none"
    listRepos.style.display = "block"
    listRepos.innerHTML = `
        <h2>Repositories</h2>
        <ul>
            ${repos.map(repo => 
            (`<li> <p>${repo.name}</p>
                <div>
                    <img src="./assets/star.svg" />
                    <p>${repo.stargazers_count}</p>
                  
                    <img src="./assets/fork.svg" />
                    <p>${repo.forks_count}</p>
                </div>
            </li>`)).join("")}
        </ul>`
}

showError = () => {
    error.style.display = "block"
    dataUser.style.display = "none"
    listRepos.style.display = "none"
    error.innerHTML = `<p>Does not exist</p>`
}