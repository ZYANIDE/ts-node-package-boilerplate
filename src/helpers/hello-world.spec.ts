import { helloWorld } from './hello-world';

describe('helloWorld()', () => {
  it('should log "Hello world!"', () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    const EXPECTED_LOG = 'Hello world!';

    // Act
    helloWorld();

    // Assert
    expect(spy).toBeCalledWith(EXPECTED_LOG);
  });
});
