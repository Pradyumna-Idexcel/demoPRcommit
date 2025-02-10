module.exports =  {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(\w+)-(\d+)\]\((\w+)\): (.+)$/g,
            headerCorrespondence: ['type', 'ticketNumber', 'scope', 'description'],
        }
    },
    plugins : [{
        rules: {
            'type-empty': (parsed) => {
                const { type } = parsed;
                console.log('type', type);
                
                if (!type) {
                    return [false, 'type is required'];
                }
                return [true];
            },
            'type-enum': (parsed, expectedValues) => {
                const { type } = parsed;
                if (!type || !expectedValues.includes(type)) {
                    return [false, `type must be one of ${expectedValues}`];
                }
                return [true];
            },
            'description-min-length': (parsed, expectedValues) => {
                const { description } = parsed;
                if (!description || description.length < expectedValues[0]) {
                    return [false, `description must be at least ${expectedValues[0]} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
            'description-max-length': (parsed, expectedValues) => {
                const { description } = parsed;
                if (!description || description.length > expectedValues[0]) {
                    return [false, `description must be less than ${expectedValues[0]} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
        }
    }],
    rules: {
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'revert']],
        'description-min-length': [2, 'always', 10],
        'description-max-length': [2, 'always', 100],
    }
  };