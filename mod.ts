
import { paramCase } from "https://deno.land/x/case@2.1.1/mod.ts";

export type ClassObject = {
	[key: string]: string | number;
}

export function toCss(classNames: ClassObject) {
    let result = '';
    const keys = Object.keys(classNames);
	keys.forEach((key: string) => {
        const splitKey = paramCase(key);
		const value = classNames[key as keyof ClassObject];
        result += `${splitKey}: ${value};`;
    });
    return result;
}
