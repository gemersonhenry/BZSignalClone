export interface IUser {
  id: string;
  name: string;
  imageUri?: string;
}

export interface IMessage {
  id: string;
  content: string;
  createdAt: string;
}

export interface IChat {
  id: string;
  users: IUser[];
  lastMessage: IMessage;
  numberOfNewMessages: number;
}

export interface IMessageByUser extends IMessage {
  user: IUser;
}

export interface ICompleteChat {
  id: string;
  users: IUser[];
  messages: IMessageByUser[];
}