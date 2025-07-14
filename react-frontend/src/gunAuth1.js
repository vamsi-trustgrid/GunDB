import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://0a307f264fb8.ngrok-free.app/gun'] });
export const user = gun.user();