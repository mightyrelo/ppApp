//list operations
const createM = (req, res) => {
    res.render('m-form', {
        title: 'Create M'
    });
};

const readMs = (req, res) => {
    res.render('m-list', {
        title: 'List of Ms'
    });
};

//instance operations
const readM = (req, res) => {
    res.render('m-details', {
        title: 'Details of M'
    });
};
const updateM = (req, res) => {
    res.render('m-update', {
        title: 'Update M'
    });
};
const deleteM = (req, res) => {
    res.render('m-delete', {
        title: 'Delete M'
    });
};


module.exports = {
    createM,
    readMs,
    readM,
    updateM,
    deleteM,
};