import React, { useState, useEffect }  from "react";
import { ScrollView } from "react-native";
import TripService from "../../services/Trip";
import CloudImageBackground from "../../components/CloudImageBackground";
import HistryTripCard from "../../components/HistoryTripCard";
import Loading from "../../components/Loading";

export default function Historico({ navigation }) {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    TripService.getAll()
      .then(trip => setTrips(trip))
      .catch(err => console.error(err))
      .finally(_=> setLoading(false));
  }, []);

  return (
    <CloudImageBackground>
      <ScrollView>
        { trips && trips.map(trip => {
          return <HistryTripCard trip={trip.body}/>
        })}
      </ScrollView>
      <Loading loading={loading} />
    </CloudImageBackground>
  );
}
