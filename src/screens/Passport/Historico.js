import React, { useState, useEffect }  from "react";
import { ScrollView } from "react-native";
import TripService from "../../services/Trip";
import CloudImageBackground from "../../components/CloudImageBackground";
import HistryTripCard from "../../components/HistoryTripCard";

export default function Historico({ navigation }) {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    TripService.getAll()
      .then(trip => setTrips(trip))
      .catch(err => console.error(err))
  }, []);

  //A princpio, a variavel `trips` já tem o histórico de todas as viagens deste usuário
  //A partir desta variável, vocês devem fazer um forEach para demonstrar todos os valores desta variável

  return (
    <CloudImageBackground>
      <ScrollView>
        { trips && trips.map(trip => {
          return <HistryTripCard trip={trip.body}/>
        })}
      </ScrollView>
    </CloudImageBackground>
  );
}
