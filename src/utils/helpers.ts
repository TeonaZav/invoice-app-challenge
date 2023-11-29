export function currencyFormat(num: number) {
  return "£" + " " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function FormatDate(date: string) {
  const dateFormat = new Date(date);
  const options = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
  function format(options) {
    const formatter = new Intl.DateTimeFormat("en", options);
    return formatter.format(dateFormat);
  }
  return options.map(format).join(" ");
}
