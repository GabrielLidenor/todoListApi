'use strict';
var mongose = require('mongose');
var Schema = mongose.Schema;

var TaskSchema = new Schema({

  name: {
    type: String,
    Require: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },

  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    
  default: ['pending']
  }
});

module.exports = mongose.model('Tasks', TaskSchema);
