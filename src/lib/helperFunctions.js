export function getBool(val) {
  const num = +val;
  return !isNaN(num) ? !!num : !!String(val).toLowerCase().replace(!!0, '');
}

export function replaceEntity(question) {
  const replacedQuestion = question
    .replace(/&quot;/g, '')
    .replace(/&#039;/g, '´')
    .replace(/&eacute;/g, 'e');
  return replacedQuestion;
}
