type Args = any[];

type Len<A extends Args> = A["length"];

type Func<A extends Args = any, R extends any = any> =
  (...args: A) => R;

type Params<F extends Func> =
    F extends ((...args: infer A) => any)
    ? Required<A>
    : never;

type Ret<F extends Func> =
    F extends ((...args: Args) => infer R)
    ? R
    : never;

type Init<A extends Args> = A extends [...infer I, any] ? I : A;
type Init2<A extends Args> = Init<Init<A>>;
type Init3<A extends Args> = Init<Init2<A>>;
type Init4<A extends Args> = Init<Init3<A>>;
type Init5<A extends Args> = Init<Init4<A>>;
type Init6<A extends Args> = Init<Init5<A>>;
type Init7<A extends Args> = Init<Init6<A>>;

type Tail<A extends Args> = A extends [any, ...infer T] ? T : A;
type Tail2<A extends Args> = Tail<Tail<A>>;
type Tail3<A extends Args> = Tail<Tail2<A>>;
type Tail4<A extends Args> = Tail<Tail3<A>>;
type Tail5<A extends Args> = Tail<Tail4<A>>;
type Tail6<A extends Args> = Tail<Tail5<A>>;
type Tail7<A extends Args> = Tail<Tail6<A>>;

type Curry8<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail7<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail6<Params<F>>) => Ret<F>>;
  (...args: Init3<Params<F>>): Curry3<(...args: Tail5<Params<F>>) => Ret<F>>;
  (...args: Init4<Params<F>>): Curry4<(...args: Tail4<Params<F>>) => Ret<F>>;
  (...args: Init5<Params<F>>): Curry5<(...args: Tail3<Params<F>>) => Ret<F>>;
  (...args: Init6<Params<F>>): Curry6<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init7<Params<F>>): Curry7<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry7<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail6<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail5<Params<F>>) => Ret<F>>;
  (...args: Init3<Params<F>>): Curry3<(...args: Tail4<Params<F>>) => Ret<F>>;
  (...args: Init4<Params<F>>): Curry4<(...args: Tail3<Params<F>>) => Ret<F>>;
  (...args: Init5<Params<F>>): Curry5<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init6<Params<F>>): Curry6<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry6<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail5<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail4<Params<F>>) => Ret<F>>;
  (...args: Init3<Params<F>>): Curry3<(...args: Tail3<Params<F>>) => Ret<F>>;
  (...args: Init4<Params<F>>): Curry4<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init5<Params<F>>): Curry5<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry5<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail4<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail3<Params<F>>) => Ret<F>>;
  (...args: Init3<Params<F>>): Curry3<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init4<Params<F>>): Curry4<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry4<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail3<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init3<Params<F>>): Curry3<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry3<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail2<Params<F>>) => Ret<F>>;
  (...args: Init2<Params<F>>): Curry2<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry2<F extends Func> = {
  (...args: Params<F>): Ret<F>;
  (...args: Init<Params<F>>): Curry1<(...args: Tail<Params<F>>) => Ret<F>>;
};

type Curry1<F extends Func> = (...args: Params<F>) => Ret<F>;

type Curry<F extends Func> =
  Len<Params<F>> extends 1
  ? Curry1<F>
  : Len<Params<F>> extends 2
  ? Curry2<F>
  : Len<Params<F>> extends 3
  ? Curry3<F>
  : Len<Params<F>> extends 4
  ? Curry4<F>
  : Len<Params<F>> extends 5
  ? Curry5<F>
  : Len<Params<F>> extends 6
  ? Curry6<F>
  : Len<Params<F>> extends 7
  ? Curry7<F>
  : Len<Params<F>> extends 8
  ? Curry8<F>
  : any;

export = function curry<F extends Func>(fn: F): Curry<F> {
  return function curried(this: any, ...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply (this, args);
    }
    return (...args2: any[]) => {
      return curried.apply (this, args.concat (args2));
    };
  };
};