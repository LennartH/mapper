import type { Dictionary, NullishSubstitutionReturn, SelectorReturn } from '../types';
import { TransformationType } from '../types';
import { get } from '../utils/get';

export function nullishSubstitution<
    TSource extends Dictionary<TSource>,
    TDestination extends Dictionary<TDestination>,
    TSelectorReturn = SelectorReturn<TDestination>
>(
    substitution: TSelectorReturn
): NullishSubstitutionReturn<TSource, TDestination, TSelectorReturn> {
    return [
        TransformationType.NullishSubstitution,
        (source, sourceMemberPath) => {
            const sourceValue = get(
                source,
                sourceMemberPath
            ) as TSelectorReturn;
            return sourceValue === undefined || sourceValue === null ? substitution : sourceValue;
        },
    ];
}
