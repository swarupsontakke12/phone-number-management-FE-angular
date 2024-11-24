export interface PhoneNumber {
  id: number;
  number: string;
  status: string;
  messages: number;
  messageCount: number;
}


export interface StatusRequest {
  status: string;
}
