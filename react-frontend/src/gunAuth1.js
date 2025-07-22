import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://666b6ab550f8.ngrok-free.app'] });
export const user = gun.user();