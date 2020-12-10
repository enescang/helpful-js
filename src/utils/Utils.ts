// Source: https://gist.github.com/enginkartal/84a215589e6739de6f0cbeb9fd088e4f
const TurkisToEnglish = (str: string): string => str.replace(/Ğ/gim, 'g')
  .replace(/Ü/gim, 'u')
  .replace(/Ş/gim, 's')
  .replace(/I/gim, 'i')
  .replace(/İ/gim, 'i')
  .replace(/Ö/gim, 'o')
  .replace(/Ç/gim, 'c')
  .replace(/ğ/gim, 'g')
  .replace(/ü/gim, 'u')
  .replace(/ş/gim, 's')
  .replace(/ı/gim, 'i')
  .replace(/ö/gim, 'o')
  .replace(/ç/gim, 'c');

export {
  TurkisToEnglish,
};
