const formatCurrency = number => {
  return number
    .toLocaleString("es-ar", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0
    })
    .replace(/ARS/g, "")
    .trim();
};

export default formatCurrency;
