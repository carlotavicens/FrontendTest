'use strict'

const logic = {

    url: 'https://api.github.com',

    searchUser(username) {
        return fetch(`${this.url}/users/${username}`, { method: 'get' })
            .then(res => res.json())
            .then(user => user)
            .catch(({ message }) => message)
    },

    retrieveRepos(username) {
        return fetch(`${this.url}/users/${username}/repos`, { method: 'get' })
            .then(res => res.json())
            .then(repos => repos)
            .catch(({ message }) => message)
    }

}

if (typeof module !== 'undefined') module.exports = logic