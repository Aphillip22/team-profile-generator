const Manager = require('../lib/Manager')

test('creates a new manager role', () => {
    const manager = new Manager ('Dave', '1015', 'testing@test.com','Manager', '123');

    expect(manager.role).toBe('Manager');
    expect(manager.office).toEqual('123');
});