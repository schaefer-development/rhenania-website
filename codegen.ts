import dotenv from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';

dotenv.config();

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
