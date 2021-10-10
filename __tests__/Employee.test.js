const Employee = require('../lib/Employee')

test('creates an employee card', () => {
    const employee = new Employee ('Dave', '1015', 'testing@test.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual('1015');
    expect(employee.email).toBe('testing@test.com');
});