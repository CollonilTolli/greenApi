export interface request {
  method: string;
  requestBody?: object;
}
export interface message {
  idMessage: string;
  textMessage: string;
  type: string;
}
export interface chat {
  id: string;
  name: string;
  type: string;
}
