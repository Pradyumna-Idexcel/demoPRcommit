module.exports =  {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(\w*)?-(\d+)\]\((.+?)\): (.+)$/,
            headerCorrespondence: ['type', 'ticketNumber', 'scope', 'description'],
        }
    },
    plugins : [{
        rules: {
            'header-format': (parsed, _when) => {
                const headerPattern = /^\[(\w*)?-(\d+)\]\((.+?)\): (.+)$/;
                if (!headerPattern.test(parsed.header)) {
                    throw new Error('❌ Invalid commit message format! Expected format: [type-ticketNumber](scope): description');
                }
                const [, , , scope] = parsed.header.match(headerPattern) || [];
                if (!scope || !/^[a-z0-9-_]+$/i.test(scope)) {
                    throw new Error('❌ Scope must be a valid string with no special characters.');
                }
                return [true];
            },
            'type-empty': (parsed, _when) => {
                console.log('parsed', parsed);
                const { type } = parsed;                
                if (!type) {
                    return [false, 'type is required']
                };
                return [true];
            },
            'type-enum': (parsed, _when , expectedValues) => {
                const { type } = parsed;
                if (!type || !expectedValues.includes(type)) {
                    return [false, `type must be one of ${expectedValues.join(', ')}`];
                }
                return [true];
            },
            'description-trim-spaces': (parsed, _when) => {
                const { description } = parsed;
                if (description && (description.startsWith(' ') || description.endsWith(' '))) {
                    throw new Error('description must not start or end with spaces(note that there is only one space after "[type-ticketNumber](scope):")');
                }
                return [true];
            },
            'description-min-length': (parsed, _when, expectedValues) => {
                const { description } = parsed;
                if (!description || description?.length < expectedValues) {
                    return [false, `description must be at least ${expectedValues} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
            'description-max-length': (parsed, _when, expectedValues) => {
                const { description } = parsed;
                if (!description || description?.length > expectedValues) {
                    return [false, `description must be less than ${expectedValues} characters, current length is ${description.length || 0}`];
                }
                return [true];
            },
        }
    }],
    rules: {
        'header-format': [2, 'always'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'revert']],
        'description-trim-spaces': [2, 'always'],
        'description-min-length': [2, 'always', 10],
        'description-max-length': [2, 'always', 30],
    }
  };