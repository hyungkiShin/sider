import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum UserRole {
  Client = 'Client',
  Owner = 'Owner',
}

registerEnumType(UserRole, { name: 'UserRole' });
