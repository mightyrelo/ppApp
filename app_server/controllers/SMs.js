const request = require("request");

const apiOptions = {
    server: 'http://localhost:3000/api/'
};

if(process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://ppApp.herokuapp.com/api/';
}

const showError = (req, res, statusCode) => {
    let titl = '';
    let content = '';
    if(code === 404) {
        titl = '404, page not found';
        content = 'Oh flip, looks like you can\'t find this page. Sorry.'
    } else {
        titl = `${code}, something's gone wrong`;
        content = 'Something, somewhere has just gone a little bit wrong.'
    }
    res
      .status(code)
      .render('generic-text', {
        title: titl,
        pageHeader: {
            title: titl,
            strapline: ''
        },
        sideBar: '',
        content
      });

}

//submodel list operations
const openSMForm = (req, res) => {
    getMInfo(req, res, (req, res, m) => {
        renderSMForm(req, res, m);
    });   
};
const getMInfo = (req, res, callback) => {
    const path = `/ms/${req.params.mId}`;
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    request(requestOptions, (err, {statusCode}, m) => {
        if(statusCode === 200) {
            callback(req, res, m);
        } else {
            showError(req, res, statusCode);
        }
    })
};
const renderSMForm = (req, res, m) => {
    res.render('sm-form', {
        title: `sm for ${m.a1}`,
        pageHeader: {
            title: `Create sm for ${m.a1}`,
            strapline: ''
        },
        sideBar: {
            content: '',
            callToAction: 'SM is the generic database model. There are three end point levels - collection, document and subdocument. For each level we define appropriate crud operations'
        }
    });
};



const createSM = (req, res) => {
    const path = `ms/${req.params.mId}/sms`;
    const formSM = {
        b1: req.body.b1,
        b2: req.body.b2
    };
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'POST',
        json: formSM
    };
    request(requestOptions, (err, {statusCode}, sm) => {
        if(statusCode === 201) {
            res.redirect(`/ms/${req.params.mId}`);
        } else {
            showError(req, res, statusCode);
        }
    });
};

const readSMs = (req, res) => {
    res.render('sm-list', {
        title: 'List of SMs'
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
    openSMForm,
};
