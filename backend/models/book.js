const schema_mongoose = require('mongoose');

const BookDetails = schema_mongoose.Schema(
   {
            
      bdocname: { type: String },
      busername: { type: String },
      bdate: { type: String },
   },
   {
      timestamps: true
   }
);

module.exports = schema_mongoose.model('bookcollection', BookDetails);