import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://30baca4a143c.ngrok-free.app/gun'] });
export const user = gun.user();