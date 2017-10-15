// Post model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type: String, require: true},
  content: {type: String, require: true},
  slug: {type: String, require: true},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  published: {type: Boolean, require: false},
  meta: {type: Schema.Types.Mixed},
  comments: [Schema.Types.Mixed],
  created: {type: Date}
});

mongoose.model('Post', PostSchema);

