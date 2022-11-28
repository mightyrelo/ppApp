const home = (req, res, next) => {
    res.render('index', { title: 'Katlego' });
}

module.exports = {
    home
}