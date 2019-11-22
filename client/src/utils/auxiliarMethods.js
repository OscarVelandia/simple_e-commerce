/* eslint-disable no-bitwise */
export const formatCurrency = number => {
  return number
    .toLocaleString("es-ar", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0
    })
    .replace(/ARS/g, "")
    .trim();
};

export const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
