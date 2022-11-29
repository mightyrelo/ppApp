//list operations
const createM = (req, res) => {
    res.render('m-form', {
        title: 'Create M',
        pageHeader: {
            title: 'Create Instance of M',
            strapline: ''
        },
        sideBar: 'The hood doesn\'t need more hardwares, it\'s the software that\'s hard to find. '
    });
};

const readMs = (req, res) => {
    res.render('m-list', {
        title: 'List of Ms',
        pageHeader: {
            title: 'ppApp',
            strapline: 'Create and update personal profile for work applications.'
        },
        sideBar: 'Looking to create or update your personal profile for an upcoming job application? ppApp helps you create a profile with a professional appeal and helps you secure that position you\'ve been aiming at. Let ppApp set you apart from competitors and help you prepare for that interview and keep track of your skills, qualifications and experiences as and when you aquire them. Good Luck, the ppApp is With You! Nothing gets you more prepared for a coding interview than a properly packaged personal profile.',
        Ms: [{
            a1: 'a1',
            a1: 'a2',
            a1: 'a3',
            facilities: ['aa1', 'aa2', 'aa3']
        }, {
            a1: 'b1',
            a1: 'b2',
            a1: 'b3',
            facilities: ['bb1', 'bb2', 'bb3']
        }, {
            a1: 'c1',
            a1: 'c2',
            a1: 'c3',
            facilities: ['cc1', 'cc2', 'cc3']
        }]
    });
};

//instance operations
const readM = (req, res) => {
    res.render('m-details', {
        title: 'Details of M',
        pageHeader: {
            title: 'ppApp',
            strapline: 'Create and update personal profile for work applications.'
        },
        sideBar: '| This Life Area is on ppApp because it helps describe a person from a certain perspective so that potential employers can know if person is right fit for the company.', 
        callToAction: 'If you\'ve used ppApp to secure a position in the past, help others who were once like you by helping them get organized in search of a job of their dreams.',
        m: {
            a1: 'a1',
            a2: 'a2',
            a3: 'a3',
            a4: 'a4',
            facilities: ['aa1', 'aa2', 'aa3'],
        }

    });
};
const updateM = (req, res) => {
    res.render('m-update', {
        title: 'Update M', 
        pageHeader: {
            title: 'Update M details',
            strapline: ''
        },
        sideBar: 'Make corrections to existing M'

    });
};
const deleteM = (req, res) => {
    res.render('m-delete', {
        title: 'Delete M', 
        pageHeader: {
            title: 'Delete M',
            strapline: ''
        },
        sideBar: 'Deletion is sensitive, be certain before proceeding'

    });
};


module.exports = {
    createM,
    readMs,
    readM,
    updateM,
    deleteM,
};