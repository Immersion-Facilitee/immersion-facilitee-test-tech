import { describe, expect, it } from 'vitest';

describe('Testing environnement check', () => {
  it('Unit test - FAIL', () => {
    expect(true).toEqual(false);
  });
  it('Unit test - PASS', () => {
    expect(true).toEqual(true);
  });
});
