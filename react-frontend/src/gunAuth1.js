import react from "react";
import Gun from 'gun';
import 'gun/sea';
export const gun = Gun({ peers: ['https://d4dd27cecb35.ngrok-free.app /gun'] });
export const user = gun.user();