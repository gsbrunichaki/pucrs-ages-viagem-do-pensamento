window.addEventListener = () => { };

import firebase from 'firebase';
import TripSchema from '../schemas/Trip';
import UserService from "./User";

import TripServiceMock from "./Trip.mock";
import AppConfig from "../../app.json";

import Schema from "../lib/schema";

const db = firebase.firestore();

export default class TripService {
  static async getAll() {
    const query = await getCollectionScope().get();
    const trips = [];

    query.forEach(doc => {
      if (doc.exists)
        trips.push(new TripSchema({
          id: doc.id,
          ...doc.data()
        }));
    })

    return trips
  }

  static async create(trip) {
    if (!trip instanceof Schema)
      throw Exception("Trip is not instance of Schema");

    return await getCollectionScope().add(trip.getBody());
  }

  static async update(trip) {
    if (!trip instanceof Schema)
      throw Exception("Trip is not instance of Schema");

    const body = trip.getBody();
    const id = body.id;

    delete body.id;

    return await getCollectionScope()
      .doc(id)
      .update(body);
  }

  static async delete(trip) {
    if (!trip instanceof Schema)
      throw Exception("Trip is not instance of Schema");

    const body = trip.getBody()

    return await getCollectionScope()
      .doc(body.id)
      .delete();
  }
}

const getCollectionScope = () => {
  const userId = UserService.uid;

  return db.collection(`users/${userId}/trips`);
}