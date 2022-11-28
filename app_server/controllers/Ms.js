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



//submodel list operations
const createSM = (req, res) => {
    res.render('sm-form', {
        title: 'List of Ms'
    });
};

const readSMs = (req, res) => {
    res.render('sm-list', {
        title: 'Details of SMs'
    });
};

//submodel instance operations
const readSM = (req, res) => {
    res.render('sm-details', {
        title: 'Details of SM'
    });
};
const updateSM = (req, res) => {
    res.render('sm-update', {
        title: 'Update SM'
    });
};
const deleteSM = (req, res) => {
    res.render('sm-details', {
        title: 'Delete SM'
    });
};




module.exports = {
    createM,
    readMs,
    readM,
    updateM,
    deleteM,
    createSM,
    readSMs,
    readSM,
    updateSM,
    deleteSM,
};