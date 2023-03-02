import fs from "fs/promises";

export class App {
  constructor() {
    this.filePath =
      import.meta.url.split("file:///")[1].split("main.js")[0] + "/store.json";
  }

  async store(id, value) {
    let obj = JSON.parse(await fs.readFile(this.filePath, "utf8"));
    obj[id] = value;
    await fs.writeFile(this.filePath, JSON.stringify(obj, null, 2));
  }

  async get(id) {
    let obj = JSON.parse(await fs.readFile(this.filePath, "utf8"));
    return obj[id];
  }
}
