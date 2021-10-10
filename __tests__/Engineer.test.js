const Engineer = require('../lib/Engineer')

test('creates a new engineer role', () => {
    const engineer = new Engineer ('Dave', '1015', 'testing@test.com','Engineer', 'engineerDave4523');

    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('engineerDave4523');
});