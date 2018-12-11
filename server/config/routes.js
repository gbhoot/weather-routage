module.exports = function(app) {
    app.all('**', function(req, res, next) {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    })
}