import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  ignoreNoDocuments: true,
  documents: ['src/graphql/**/*.graphql', 'src/graphql/*.graphql'],
  generates: {
    './src/graphql/generated.tsx': {
      // preset: "client",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        apolloReactCommonImportFrom: '@apollo/client',
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
};

export default config;
