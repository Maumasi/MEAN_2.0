module.exports = (record) => {
  return {
    add(payload, success, error) {
      record.save().then(success).catch(error);
    },
  }; // return
}; // export
