describe("import e2e", () => {
  it('should be able to import without throwing', () => {
    // Assign
    const func = jest.fn(async () => await require('../src/index'));

    // Act & Assert
    expect(func).not.toThrow();
  });
});