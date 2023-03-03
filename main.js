import fs from "fs/promises";
import { fileURLToPath } from "url";

export class App {
  constructor() {
    this.filePath =
      fileURLToPath(import.meta.url).split("main.js")[0] + "/store.json";
    console.log(this.filePath);
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

  async delete(id) {
    let v = await this.get(id);
    await this.store(id, undefined);
    return v;
  }
}
