const createUrlParams = (
  path: string,
  params:
    | string
    | URLSearchParams
    | string[][]
    | Record<string, string>
    | undefined
) => {
  const stringifiedParams = new URLSearchParams(params).toString();

  return `${path}?${stringifiedParams}`;
};

export default createUrlParams;
