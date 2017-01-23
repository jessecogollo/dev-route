'use strict';

const comments = exports.comments = {
  generalComment: {
    type: 'string',
    required: false
  },
  start: {
    type: 'int',
    required: true,
    enum: [
      1,
      2,
      3,
      4,
      5
    ]
  },
  music: {
    type: 'string',
    required: false
  },
  service: {
    type: 'string',
    required: false
  },
  user: {
    type: 'string',
    required: true,
    defaulstTo: 'Anonymous'
  }
};

module.exports = {
  name: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  },
  avgStars: {
    type: 'float',
    required: true
  },
  comments: {
    type: comments,
    required: true,
    defaultsTo: []
  }
};
