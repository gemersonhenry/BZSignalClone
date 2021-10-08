import { IChat } from "../../APIs/chats.interfaces";
import { ChatRoomItemProps } from "../../components/ChatRoomItem/ChatRoomItem";
import { getFormattedDateTime } from "../../helpers/date.helper";

export const getFormattedChats = (chats: IChat[]): ChatRoomItemProps[] => {
  return chats.map(chat => {
    return {
      id: chat.id,
      imageSrc: chat.users[1].imageUri,
      name: chat.users[1].name,
      hour: getFormattedDateTime(chat.lastMessage.createdAt),
      lastMessage: chat.lastMessage.content,
      numberOfNewMessages: chat.numberOfNewMessages,
    } as ChatRoomItemProps;
  })
}