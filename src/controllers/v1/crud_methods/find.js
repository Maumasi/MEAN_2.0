
module.exports = (Model, instance = 'model') => {
  return {
    byId(req, res) {
      const { id } = req.params;

      let options;
      if (instance === 'task') {
        options = { _id: id, _owner: req.user._id };
      } else {
        options = { _id: id, 'tokens.token': req.token };
      }

      Model.findOne(options)
        // success
        .then(record => res.json(record))
        // fail
        .catch(() => res.json({ fail: `Failed to find ${instance}` }));
    },

    all(req, res) {
      Model.find({ _owner: req.user._id })
        // success
        .then(records => res.json(records))
        // fail
        .catch(() => res.json({ fail: `Failed to find ${instance}` }));
    },
  };
};
