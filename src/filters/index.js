/* eslint-disable no-bitwise */

/**
 * Show plural label if time is plural number
 * @param {number} time 时间
 * @param {string} label 标签
 * @return {string} 返回的是时间戳，类型是字符串
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}

/**
 * @param {number} time 时间
 */
// ~~把非数字的类型转换为数字类型
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  }
  return pluralize(~~(between / 86400), ' day');

}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num 数字
 * @param {number} digits 计数
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' },
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

/**
 * 10000 => "10,000"
 * @param {number} num 数字
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}

/**
 * Upper case first char
 * @param {String} string 大写首字符
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
