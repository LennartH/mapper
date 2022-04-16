import type { Constructor } from '@automapper/core';
import 'reflect-metadata';
import { AUTOMAP_PROPERTIES_METADATA_KEY } from './keys';
import { AutoMapOptions, ClassesMetadata } from './types';
import { getMemberPath } from '@automapper/core';

export function AutoMap(): PropertyDecorator;
export function AutoMap(
    typeFn: () => Constructor | [Constructor]
): PropertyDecorator;
export function AutoMap<TSource = unknown>(options: AutoMapOptions<TSource>): PropertyDecorator;
export function AutoMap(
    typeFnOrOptions?: (() => Constructor | [Constructor]) | AutoMapOptions
): PropertyDecorator {
    const options = getAutoMapOptions(typeFnOrOptions);
    return (target, propertyKey) => {
        if (typeof propertyKey === 'symbol') {
          return;
        }

        const metadata = createMetadata(target, propertyKey, options);
        if (!metadata) {
            console.warn(`Cannot determine type metadata of "${String(propertyKey)}" on class ${target.constructor.name}. "${String(propertyKey)}" metadata has been skipped. Manually provide the "type" metadata to prevent unexpected behavior.`);
            return;
        }

        const existingMetadataList: ClassesMetadata[] = Reflect.getMetadata(AUTOMAP_PROPERTIES_METADATA_KEY, target.constructor) || [];
        Reflect.defineMetadata(AUTOMAP_PROPERTIES_METADATA_KEY, [...existingMetadataList, metadata], target.constructor);
    };
}

function getAutoMapOptions(
    typeFnOrOptions?: (() => Constructor | [Constructor]) | AutoMapOptions
): AutoMapOptions {
    if (typeFnOrOptions === undefined) {
        return {};
    } else if (typeof typeFnOrOptions === 'function') {
        return { type: typeFnOrOptions};
    } else {
        return typeFnOrOptions;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-types
function createMetadata(target: Object, propertyKey: string, options: AutoMapOptions): ClassesMetadata | null {
    let {
        type,
        isGetterOnly,
        flatteningPath,
    } = options;
    if (!type) {
        const designTypeMeta = Reflect.getMetadata('design:type', target, propertyKey);
        // only store design:type metadata if it's not Array or Object
        if (designTypeMeta && designTypeMeta !== Array && designTypeMeta !== Object) {
            type = () => designTypeMeta;
        } else {
            return null;
        }
    }

    if (!isGetterOnly) {
        // paramtypes gives information about the setter.
        // it will be null if this is not a getter
        // it will be an [] if this is an getter-only
        const designParamsType = Reflect.getMetadata('design:paramtypes', target, propertyKey);
        isGetterOnly = designParamsType && !(designParamsType as []).length;
    }

    // Replace flattening path variants with string array
    if (typeof flatteningPath === 'string') {
        flatteningPath = flatteningPath.split('.');
    } else if (typeof flatteningPath === 'function') {
        flatteningPath = getMemberPath(flatteningPath);
    }

    return [propertyKey, {
        type,
        depth: options.depth || 1,
        isGetterOnly,
        flatteningPath,
    }]
}
