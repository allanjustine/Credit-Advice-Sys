const OptionYearFormat = () => {
  const currentYear = new Date().getFullYear();

  const generateYearOptions = () => {
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  return generateYearOptions();
};

export default OptionYearFormat;
