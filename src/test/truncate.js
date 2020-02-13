module.exports = async function truncate(model) {
  model.destroy({ where: {}, force: true });
};
