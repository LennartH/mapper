import { MapFnClassId, TransformationType } from '../../types';
import { nullishSubstitution } from '../nullish-substitution';

describe(nullishSubstitution.name, () => {
    it('should return correctly', () => {
        const nullishSub = nullishSubstitution('');
        expect(nullishSub).toBeTruthy();
        expect(nullishSub[MapFnClassId.type]).toEqual(
            TransformationType.UndefinedSubstitution
        );
        expect(nullishSub[MapFnClassId.fn]).toBeInstanceOf(Function);
    });

    it('should return source if source is not nullish', () => {
        const nullishSub = nullishSubstitution('subbed');
        const result = nullishSub[MapFnClassId.fn]({ foo: 'bar' }, ['foo']);
        expect(result).toEqual('bar');
        expect(result).not.toEqual('subbed');
    });

    it('should return subbed if source is undefined', () => {
        const nullishSub = nullishSubstitution('subbed');
        const result = nullishSub[MapFnClassId.fn]({}, ['foo']);
        expect(result).toEqual('subbed');
        expect(result).not.toEqual(undefined);
    });

    it('should return subbed if source is null', () => {
        const nullishSub = nullishSubstitution('subbed');
        const result = nullishSub[MapFnClassId.fn]({foo: null}, ['foo']);
        expect(result).toEqual('subbed');
        expect(result).not.toEqual(null);
    });
});
