module.exports = (record) => {
  return (payload, success, error) => {
    record.save().then(success).catch(error);
  }; // return
}; // export
