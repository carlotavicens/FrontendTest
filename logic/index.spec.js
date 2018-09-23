'use strict'

describe('logic test', () => {

    describe('search user', () => {
        const query = 'carlotavicens'
        const falseQuery = 'carlotavicensdefebrer'

        it('should retrieve a user info searching by name', () =>
            logic.searchUser(query)
                .then(user => {
                    expect(user).toBeDefined()
                    expect(user.login).toBe(query)
                    expect(user.avatar_url).toBeDefined()
                })
        )

        it('should fail on trying to search a non existing user', () =>
            logic.searchUser(falseQuery)
                .catch(err => err)
                .then(({ message }) => {
                    expect(message).toBeDefined()
                    expect(message).toBe('Not Found')
                })
        )

        it('should fail on trying to search with an empty user', () =>
            logic.searchUser('')
                .catch(err => err)
                .then(({ message }) => {
                    expect(message).toBeDefined()
                    expect(message).toBe('Not Found')
                })
        )

        it('should fail on trying to search with an undefined user', () =>
            logic.searchUser(undefined)
                .catch(err => err)
                .then(({ message }) => expect(message).toBeUndefined())
        )

    })


    describe('retrieve names repos', () => {
        const query = 'carlotavicens'
        const falseQuery = 'carlotavicensdefebrer'

        it('should fail on trying to search a non existing user', () =>
            logic.retrieveRepos(falseQuery)
                .catch(err => err)
                .then(({ message }) => {
                    expect(message).toBeDefined()
                    expect(message).toBe('Not Found')
                })
        )

        it('should fail on trying to search with an empty user', () =>
            logic.retrieveRepos('')
                .catch(err => err)
                .then(({ message }) => {
                    expect(message).toBeDefined()
                    expect(message).toBe('Not Found')
                })
        )

        it('should fail on trying to search with an undefined user', () =>
            logic.retrieveRepos(undefined)
                .catch(err => err)
                .then(({ message }) => expect(message).toBeUndefined())
        )

    })
})