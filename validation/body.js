const isEmpty = require('./isEmpty');

const validateBody = value => {
  const { id, ...data } = value;
  const errors = {};

  if (isEmpty(id)) {
    errors.iderr = 'No id sent';
  }

  if (isEmpty(data)) {
    errors.nobody = 'No updated field sent';
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  }
};

module.exports = validateBody;
