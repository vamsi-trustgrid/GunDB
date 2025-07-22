import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://8ff56593cc27.ngrok-free.app '] });
export const user = gun.user();