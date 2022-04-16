import { Constructor, MetadataOptions, NormalizedMetadataOptions } from '@automapper/core';
import { AUTOMAPPER_METADATA_FACTORY_KEY } from './keys';

export type AutoMapOptions<T = unknown> = {
    /**
     * Type Function
     */
    type?: () => Constructor | [Constructor];
} & MetadataOptions<T>;

export type ClassesMetadata = [
    property: string,
    metadata: {
        type: () => Constructor | [Constructor];
    } & NormalizedMetadataOptions,
]

export interface WithMetadataFactory {
    [AUTOMAPPER_METADATA_FACTORY_KEY]: () => ClassesMetadata[];
}
