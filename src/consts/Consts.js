export const currencyInitialState = {
  amount: "1",
  currencyFrom: "EUR",
  currencyTo: "USD",
  multipliedAmount: "",
  date: "",
};

export const ERROR_MESSAGES = {
  noAmount:
    "The deal was you gonna give me a number and I will convert it right?",
  amountZero: "As far as I know, 0 times something is always 0.",
  equalCurrency:
    "Calculation of equal currencies would result in equal outcomes",
  minusAmount: "If you have minus money, you are in big trouble mate.",
};
export const selectOptions = [
  { key: "EUR", value: "EUR", text: "EUR" },
  { key: "USD", value: "USD", text: "USD" },
  { key: "CHF", value: "CHF", text: "CHF" },
];
export const baseUrl = `https://api.exchangeratesapi.io/latest?base=`;

export const formattedAmount = (amount) =>
  new Intl.NumberFormat("de-DE").format(amount);
