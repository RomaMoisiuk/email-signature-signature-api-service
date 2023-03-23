const replaceMultiple = (
  str: string,
  mapObj: Record<string, string>,
): string => {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'gi');

  return str.replace(re, (matched) => {
    return mapObj[matched.toLowerCase()];
  });
};

export { replaceMultiple };
