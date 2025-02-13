module.exports =  {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\S+)?-(\S+)-(\S+)\((\S+)\): (\S(?:.*\S)?)$/,
            headerCorrespondence: ['type','ticketKey', 'ticketNumber', 'moduleName', 'description'],
        }
    },
    plugins : [{
        rules: {
            'header-format': (parsed, _when) => {
                const headerPattern = /^(\S+)?-(\S+)-(\S+)\((\S+)\): (\S(?:.*\S)?)$/;
                if (!headerPattern.test(parsed.header)) {
                    throw new Error('❌ Invalid commit message format!(check for any extra whitespace character.) Expected format: "type-ticketKey-ticketNumber(moduleName): description');
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
            'ticket-key-format': (parsed, _when) => {
                const { ticketKey } = parsed;
                if(ticketKey.length > 7) {
                    return [false, `❌ ticketKey must be less than 8 characters. Current length is ${ticketKey.length} characters`];
                }
                if(!parsed.ticketKey || !/^[A-Z]+$/.test(parsed.ticketKey)) {
                    return[false, '❌ ticketKey must be uppercase letters only.'];
                }
                return [true];
            },
            'ticket-number-format': (parsed, _when) => {
                const { ticketNumber } = parsed;
                if (!ticketNumber || !/^\d+$/.test(ticketNumber)) {
                    return [false, '❌ ticketNumber must be numeric only'];
                }
                return [true];
            },
            'moduleName-format': (parsed, _when, expectedValues) => {
                const { moduleName } = parsed;
                if (!moduleName || !/^[a-z]+$/.test(moduleName)) {
                    return [false, '❌ moduleName must be a valid string which contains lowercase alphabets only.'];
                }
                if (!moduleName || !expectedValues.includes(moduleName)) {
                    return [false, `❌ moduleName must be one of ${expectedValues.join(', ')}`];
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
        'ticket-key-format': [2, 'always'],
        'ticket-number-format': [2, 'always'],
        'moduleName-format': [2, 'always', ['admn', 'coll', 'cove', 'loan', 'reln', 'exce', 'expo', 'custp', 'file', 'flex', 'memo', 'onbd', 'rskr', 'sprd', 'dash', 'othr']],
        'description-min-length': [2, 'always', 10],
        'description-max-length': [2, 'always', 50],
    }
  };