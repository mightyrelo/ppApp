const home = (req, res, next) => {
    res.render('index', { title: 'ppApp' });
}

module.exports = {
    home
}