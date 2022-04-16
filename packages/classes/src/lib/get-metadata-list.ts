import type { Constructor, MetadataList } from '@automapper/core';
import { isDateConstructor, isPrimitiveConstructor } from '@automapper/core';
import 'reflect-metadata';
import { AUTOMAP_PROPERTIES_METADATA_KEY, AUTOMAPPER_METADATA_FACTORY_KEY } from './keys';
import { ClassesMetadata, WithMetadataFactory } from './types';

export function getMetadataList(model: Constructor): [
    metadataList: MetadataList,
    nestedConstructor: Constructor[]
] {
    let metadataList: ClassesMetadata[] = [];
    if (model.constructor?.prototype) {
        const prototypeMetadata = Reflect.getMetadata(AUTOMAP_PROPERTIES_METADATA_KEY, model.constructor.prototype);
        if (prototypeMetadata != null) {
            metadataList = metadataList.concat(prototypeMetadata);
        }
    }
    const modelMetadata = Reflect.getMetadata(AUTOMAP_PROPERTIES_METADATA_KEY, model);
    if (modelMetadata != null) {
        metadataList = metadataList.concat(modelMetadata);
    }
    if (hasMetadataFactory(model)) {
        const additionalMetadata = model[AUTOMAPPER_METADATA_FACTORY_KEY]();
        if (additionalMetadata) {
            metadataList.push(...additionalMetadata);
        }
    }
    return metadataList.reduce(
        (result: [MetadataList, Constructor[]], metadata) => {
            const { type: typeProvider, ...rest } = metadata[1];
            const providedType = typeProvider();
            const isArray = Array.isArray(providedType);
            const type = isArray ? providedType[0] : providedType;

            if (!isDateConstructor(type) && !isPrimitiveConstructor(type)) {
                result[1].push(type);
            }
            result[0].push([metadata[0], { type: () => type, isArray, ...rest }]);
            return result;
        },
        [[], []]
    );
}

function hasMetadataFactory(model: unknown): model is WithMetadataFactory {
  const factory = (model as WithMetadataFactory)[AUTOMAPPER_METADATA_FACTORY_KEY];
  return factory != null && typeof factory === 'function';
}
