import mocks from "../mocks/Trip";
import Schema from "../lib/schema";

export default class TripServiceMock {
  static async getAll() {
    return mocks.map(m => 
      new Schema(m));
  }

  static async create() {
    return true;
  }

  static async update() {
    return true;
  }

  static async delete() {
    return true;
  }
}