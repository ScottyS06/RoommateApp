import { DocumentType, getModelForClass, modelOptions, prop} from '@typegoose/typegoose';

@modelOptions({ options: { customName: 'users' } })
export class UserSchema {
  @prop({ required: true })
  name!: string;
}

export const User = getModelForClass(UserSchema);
export type UserDocument = DocumentType<UserSchema>;
