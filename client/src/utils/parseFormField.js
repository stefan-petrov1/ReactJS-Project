export const parseFormField = ({ target }) => {
  let value = target.value;

  if (target.type === 'checkbox') {
    value = target.checked;
  } else if (target.type === 'number') {
    value = Number(value);
  }

  return { [target.name]: value };
};
