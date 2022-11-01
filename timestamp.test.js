const toHumanreadableTimestamp = require('./timestamp');


test('when function is called with null it returns null', () => {

    let result = toHumanreadableTimestamp(null);
    expect(result).toBe(null);
})

