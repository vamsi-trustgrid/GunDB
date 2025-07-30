import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://705f6ef3470b.ngrok-free.app/gun'] });
export const user = gun.user();