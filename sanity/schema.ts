import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemaTypes/blockContent';
import home from './schemaTypes/home';
import project from './schemaTypes/project';
import about from './schemaTypes/aboutPage';
import compactList from './schemaTypes/compactList';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, about, project, blockContent, compactList],
};
