require('dotenv').config();

import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.VITE_GRAPHCMS_ENDPOINT,
	generates: {
		'src/lib/graphql/generated/schema.ts': {
			plugins: ['typescript', 'typescript-resolvers']
		},
		'./graphql.schema.json': {
			plugins: ['introspection']
		}
	}
};

export default config;
