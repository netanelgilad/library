import {variant, onTerms, payload, nil, TypeNames, GVariantOf} from 'variant';
 
export const Option = variant(onTerms(({T}) => ({
    Some: payload(T),
    None: nil,
})));
export type Option<T, TType extends TypeNames<typeof Option> = undefined>
    = GVariantOf<typeof Option, TType, {T: T}>;
