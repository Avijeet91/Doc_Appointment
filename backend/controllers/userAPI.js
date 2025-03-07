// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/userinfo');

const docmodel = require('../models/docinfo');

const bookmodel = require('../models/book');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

// INSERT RECORD/Document
router.post('/userreg', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const empobj = new EmpModel({
        empname: req.body.empname,
        empemail: req.body.empemail,
        empmobile: req.body.empmobile,
        empdob: req.body.empdob,
        emppass: req.body.emppass,
        empgender: req.body.empgender,
        empcountry: req.body.empcountry,
        empaddress: req.body.empaddress,
    });//CLOSE EmpModel

    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(inserteddocument => {
            res.send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' + inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
            process.exit();
        });

    //res.send('<h3>INSIDE POST METHOD..THIS IS INSERT API..</h3>');
});

//insert doctor
router.post('/docbook', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const empobj = new bookmodel({
        bdocname: req.body.bdocname,
        busername: req.body.busername,
        bdate: req.body.bdate,
        
    });//CLOSE EmpModel


    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(inserteddocument => {
            res.send(inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send(JSON.stringify(err, undefined, 2));
            process.exit();
        });
});

router.post('/adddoc', (req, res) => {
    //Create Object of Employee Model Class
    // And Receive value from request body and Store value within the Object
    const empobj = new docmodel({
        docid: req.body.docid,
        docname: req.body.docname,
        docemail: req.body.docemail,
        docmobile: req.body.docmobile,
        docexp: req.body.docexp,
        docspec: req.body.docspec,
        docgender: req.body.docgender,
        docqualification: req.body.docqualification,
        docfees:req.body.docfees,
    });//CLOSE EmpModel


    //INSERT/SAVE THE RECORD/DOCUMENT
    empobj.save()
        .then(inserteddocument => {
            res.send(inserteddocument);

        })//CLOSE THEN
        .catch(err => {
            res.send(JSON.stringify(err, undefined, 2));
            process.exit();
        });
});









router.post('/userlogin', (req, res) => {
    //console.log(req.body.loginemail)
    //console.log(req.body.emppass)
    EmpModel.find({ "empemail": req.body.loginemail, "emppass": req.body.loginpass })
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument)
            }
            else {
                res.status(404).send({ message: "NOT MATCHED" })
            }
        }) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
)//CLOSE POST METHOD 








// UPDATE RECORD/Document
router.put('/update', (req, res) => {
    res.send('<h2>INSIDE PUT METHOD..THIS IS UPDATE API..</h2>');
});


//SHOULD BE EXPORTED
module.exports = router;