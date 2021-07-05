module.exports = {
    render_index: function(req, res, next) {
        res.render('index', { title: 'Welcome!' });
    }
}