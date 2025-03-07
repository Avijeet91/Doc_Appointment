   const schema_mongoose = require('mongoose');

   const DocDetails = schema_mongoose.Schema(
      {
         docid: { type: String },
         docname: { type: String },
         docemail: { type: String },
         docmobile: { type: String },
         docexp: { type: String },
         docspec: { type: String },
         docgender: { type: String },
         docqualification: { type: String },
         docfees: { type: String },
      },
      {
         timestamps: true
      }
   );

   module.exports = schema_mongoose.model('doccollection', DocDetails);