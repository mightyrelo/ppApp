//submodel list operations
const createSM = (req, res) => {
    res.render('sm-form', {
        title: 'Create of SM'
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
    createSM,
    readSMs,
    readSM,
    updateSM,
    deleteSM,
};
