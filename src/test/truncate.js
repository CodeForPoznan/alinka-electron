module.exports = async function truncate(models) {
  if (models instanceof Array) {
    models.map(model => model.destroy({ where: {}, force: true }));
  } else {
    models.destroy({ where: {}, force: true });
  }
};
