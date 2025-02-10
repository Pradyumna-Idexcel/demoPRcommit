module.exports =  {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(.+?)-(\d+)\]\((.+?)\): (.+)$/,
            headerCorrespondence: ['type', 'ticketNumber', 'scope', 'description'],
        }
    },
    plugins : [{
        rules: {
            'type-empty': (parsed, _when) => {
                console.log('parsed', parsed);
                
                const { type, ticketNumber, scope, description } = parsed;
                console.log('type', type, "description", description, "ticketNumber", ticketNumber, "scope", scope);
                
                if (!type) return [false, 'type is required'];
                return [true];
            },
            'type-enum': (parsed, _when , expectedValues) => {
                const { type } = parsed;
                console.log('expectedValues', expectedValues);
                
                if (!type || !expectedValues.includes(type)) {
                    return [false, `type must be one of ${expectedValues.join(', ')}`];
                }
                return [true];
            },
            'description-min-length': (parsed, _when, expectedValues) => {
                const { description } = parsed;
                if (!description || description?.length < expectedValues[0]) {
                    return [false, `description must be at least ${expectedValues[0]} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
            'description-max-length': (parsed, _when, expectedValues) => {
                const { description } = parsed;
                if (!description || description?.length > expectedValues[0]) {
                    return [false, `description must be less than ${expectedValues[0]} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
        }
    }],
    rules: {
        'type-empty': [2, 'always'],
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'revert']],
        'description-min-length': [2, 'always', 10],
        'description-max-length': [2, 'always', 100],
    }
  };