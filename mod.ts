
import { paramCase } from "https://deno.land/x/case@2.1.1/mod.ts";

export type ClassObject = {
	[key: string]: string | number;
}

const vendorPrefixes = ['-webkit-', '-moz-'];
const cssPropertiesToPrefix = [
    'background-clip',
    'text-fill-color',
    'backdrop-filter',
    'appearance',
    'clip-path',
    'initial-letter',
    'line-clamp',
    'user-select',
    'box-reflect'
];

export function toCss(classNames: ClassObject) {
    let result = '';
    const keys = Object.keys(classNames);
	keys.forEach((key: string) => {
        const splitKey = paramCase(key);
        const value = classNames[key as keyof ClassObject];
        result += `${splitKey}: ${value};`;
        if (cssPropertiesToPrefix.includes(splitKey)) {
            vendorPrefixes.forEach((prefix: string) => {
                result += `${prefix}${splitKey}: ${value};`;
            });
        }
    });
    return result;
}
