// IMPORT EXPRESS SERVER
const express = require('express');

//IMPORT EMPLOYEE MODEL AND BIND IT
const EmpModel = require('../models/userinfo');

const docModel = require('../models/docinfo');

const bookModel = require('../models/book');

// USE Router FOR EXPRESS SERVER
const router = express.Router();

router.get('/deldoc', (req, res) => {
    docModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

router.get('/userhome', (req, res) => {
    docModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);
router.get('/viewbook', (req, res) => {
    bookModel.find({})
        .then(getsearchdocument => {
            //console.log(getsearchdocument)
            res.status(200).send(getsearchdocument)
        } //CLOSE THEN FUNCTION BODY
        ) // CLOSE THEN
        .catch(err => {
            return res.send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);
router.get('/searchuser/:eid', (req, res) => {
    EmpModel.find({ "empemail": req.params.eid })
        .then(getsearchdocument => {
            if (getsearchdocument.length > 0) {
                res.status(200).send(getsearchdocument);
            }
            else {
                res.status(404).send({ message: "Note not found with id " + req.params.empid });
            }
        }) //CLOSE THEN
        .catch(err => {
            res.status(500).send({ message: "DB Problem..Error in Retriving with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
);//CLOSE GET METHOD

// DELETE RECORD/Document
router.delete('/deldoc/:demail', (req, res) => {
    console.log(req.params.demail)
    docModel.findOneAndRemove({ "docemail": req.params.demail })
        .then(deleteddocument => {
            if (deleteddocument != null) {
                res.status(200).send(deleteddocument);
            }
            else {
                res.status(404).send('INVALID EMP ID ' + req.params.empid);
            }
        }) //CLOSE THEN
        .catch(err => {
            return res.status(500).send({ message: "DB Problem..Error in Delete with id " + req.params.empid });
        })//CLOSE CATCH
}//CLOSE CALLBACK FUNCTION BODY
); //CLOSE Delete METHOD



//SHOULD BE EXPORTED
module.exports = router;