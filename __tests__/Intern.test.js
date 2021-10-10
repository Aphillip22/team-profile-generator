const Intern = require('../lib/Intern')

test('creates a new intern role', () => {
    const intern = new Intern ('Dave', '1015', 'testing@test.com','Intern', 'University of Utah');

    expect(intern.role).toBe('Intern');
    expect(intern.school).toBe('University of Utah');
});