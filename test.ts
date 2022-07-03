import { assertEquals } from 'https://deno.land/std@0.146.0/testing/asserts.ts';
import { ClassObject, toCss } from './mod.ts';

const a: ClassObject = {
    borderRadius: '10px',
    color: 'red',
    backgroundColor: '#eeeeee',
};

Deno.test("Can convert object to css string", () => {
    const result = toCss(a);
    assertEquals(result, 'border-radius: 10px;color: red;background-color: #eeeeee;');
});
