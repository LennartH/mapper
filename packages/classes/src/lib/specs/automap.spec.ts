import 'reflect-metadata';
import { AUTOMAP_PROPERTIES_METADATA_KEY } from '../keys';
import { AutoMap } from '../automap';

describe(AutoMap.name, () => {
    const spiedReflectDefine = jest.spyOn(Reflect, 'defineMetadata');
    const spiedReflectGet = jest.spyOn(Reflect, 'getMetadata');

    describe('primitives', () => {
        class Bar {
            @AutoMap()
            bar!: string;
        }

        it('should call getMetadata', () => {
            expect(spiedReflectGet).toHaveBeenCalledWith(
                'design:type',
                Bar.prototype,
                'bar'
            );
            spiedReflectGet.mockReset();
        });

        it('should call defineMetadata', () => {
            spiedReflectGet.mockReturnValueOnce(String);
            expect(spiedReflectDefine).toHaveBeenCalledWith(
                AUTOMAP_PROPERTIES_METADATA_KEY,
                [
                    [
                        'bar',
                        {
                            type: expect.any(Function),
                            depth: 1,
                            isGetterOnly: undefined,
                        },
                    ],
                ],
                Bar
            );
            spiedReflectGet.mockReset();
        });
    });

    describe('explicit type', () => {
        class Foo {
            @AutoMap(() => Date)
            date!: Date;
        }

        it('should call defineMetadata', () => {
            expect(spiedReflectDefine).toHaveBeenCalledWith(
                AUTOMAP_PROPERTIES_METADATA_KEY,
                [['date', { type: expect.any(Function), depth: 1 }]],
                Foo
            );
            spiedReflectDefine.mockReset();
        });
    });

    describe('flattening path', () => {
        describe('from dot-formatted path', () => {
            it('with multiple steps', () => {
                class WithMultipleSteps {
                    @AutoMap({flatteningPath: 'child.property'})
                    flattened!: string;
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['child', 'property'] }]],
                    WithMultipleSteps
                );
                spiedReflectDefine.mockReset();
            });
            it('with single step', () => {
                class WithSingleStep {
                    @AutoMap({flatteningPath: 'directProperty'})
                    flattened!: string;
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['directProperty'] }]],
                    WithSingleStep
                );
                spiedReflectDefine.mockReset();
            });
        })

        describe('from selector function', () => {
            it('without array in path', () => {
                class Source {
                    child!: { value: string }
                }
                class WithoutArray {
                    @AutoMap<Source>({flatteningPath: (source) => source.child.value})
                    flattened!: string;
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['child', 'value'] }]],
                    WithoutArray
                );
                spiedReflectDefine.mockReset();
            })
            it('with array in path', () => {
                class Source {
                    child!: { value: string }[]
                }
                class WithArray {
                    @AutoMap<Source>({
                        type: () => [String],
                        flatteningPath: (source) => source.child.value
                    })
                    flattened!: string[];
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['child', 'value'] }]],
                    WithArray
                );
                spiedReflectDefine.mockReset();
            })
            it('with two-dimensional array in path', () => {
                class Source {
                    child!: { value: string }[][]
                }
                class With2DArray {
                    @AutoMap<Source>({
                        type: () => [String],
                        flatteningPath: (source) => source.child.value
                    })
                    flattened!: string[];
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['child', 'value'] }]],
                    With2DArray
                );
                spiedReflectDefine.mockReset();
            })
            it('with complex source data structure', () => {
                class Source {
                    child!: {
                        inner: {
                            deep: { value: string }[]
                        }
                    }[][]
                }
                class WithComplexSource {
                    @AutoMap<Source>({
                        type: () => [String],
                        flatteningPath: (source) => source.child.inner.deep.value
                    })
                    flattened!: string[];
                }

                expect(spiedReflectDefine).toHaveBeenCalledWith(
                    AUTOMAP_PROPERTIES_METADATA_KEY,
                    [['flattened', { type: expect.any(Function), depth: 1, flatteningPath: ['child', 'inner', 'deep', 'value'] }]],
                    WithComplexSource
                );
                spiedReflectDefine.mockReset();
            })
        })
    })
});
