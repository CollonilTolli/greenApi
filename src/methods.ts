import { request } from './interfaces';

//GET
export const GetContacts: request = {
  method: 'GetContacts',
};

//POST
export const GetChatHistory: request = {
  method: 'GetChatHistory',
  requestBody: {
    chatId: '',
    count: 40,
  },
};
export const SendMessage: request = {
  method: 'SendMessage',
  requestBody: {
    chatId: '',
    message: '',
  },
};
