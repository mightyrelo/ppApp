const home = (req, res, next) => {
    res.render('index', { 
        title: 'ppApp',
        strap: 'The one App that helps you put pap on the table.'
     });
}

module.exports = {
    home
}