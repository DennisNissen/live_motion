export function isEmpty(obj: object) {
  return !Object.keys(obj).length;
}

export function withoutEmptyValues<T extends object>(obj: Partial<T>) {
  return Object.entries(obj).reduce((acc, [k, v]: any) => {
    if (typeof v === 'object' && !isEmpty(v)) {
      acc[k] = v;
    }

    return acc;
  }, {} as any);

export function compactObj(obj: object) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== undefined && value !== null) {
      acc[key] = value;
    }

    return acc;
  }, {} as Record<string | number | symbol, any>);
}
