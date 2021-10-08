import ChatRooms from "../assets/dummy-data/ChatRooms";
import Chats from "../assets/dummy-data/Chats";

import { IChat, ICompleteChat } from "./chats.interfaces";

export const CHATS = ChatRooms as IChat[];
export const COMPLETE_CHAT = Chats as ICompleteChat; 