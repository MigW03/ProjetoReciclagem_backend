async function userRoutes(app) {

    app.get('/users', (req, res) => {
        res.status(200).send('Usuários')
    })
}

module.exports = userRoutes