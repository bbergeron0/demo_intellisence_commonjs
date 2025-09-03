const _pipe =
    (fns: Function[]) =>
    (input: any) =>
    fns.reduce((x, fn) => fn(x), input);

module.exports = _pipe;
