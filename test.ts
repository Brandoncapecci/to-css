import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { ClassObject, toCss } from './mod.ts';

Deno.test("Can convert basic object to css string", () => {
    const sampleObj: ClassObject = {
        borderRadius: '10px',
        color: 'red',
        backgroundColor: '#eeeeee',
    };
    const result = toCss(sampleObj);
    assertEquals(result, 'border-radius: 10px;color: red;background-color: #eeeeee;');
});

Deno.test("Can convert object requiring vendor prefix to css string", () => {
    const sampleObj: ClassObject = {
        backgroundClip: 'text',
        textFillColor: 'transparent',
    };
    const result = toCss(sampleObj);
    assertEquals(result, 'background-clip: text;-webkit-background-clip: text;-moz-background-clip: text;text-fill-color: transparent;-webkit-text-fill-color: transparent;-moz-text-fill-color: transparent;');
});
