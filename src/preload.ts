import { ipcRenderer, contextBridge } from "electron";
contextBridge.exposeInMainWorld("api", {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
  receive: (channel: string, func: (...T: any) => void) => {
    ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
});
