const userService = require('../services/user.service');

const create = async (req: any, res: any) => {
  res.json({ test: 'this is the user create route' });
};

module.exports = {
  create,
};
