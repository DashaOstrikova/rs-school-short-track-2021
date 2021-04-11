/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const domaineLevels = domain.split('.').reverse();
    domaineLevels.reduce((acc, domaineLevel) => {
      const propertyName = [acc, domaineLevel].join('.');
      if (!result[propertyName]) {
        result[propertyName] = 0;
      }
      result[propertyName] += 1;
      return propertyName;
    }, '');
  });

  return result;
}

module.exports = getDNSStats;
