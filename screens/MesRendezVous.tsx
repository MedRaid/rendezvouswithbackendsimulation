import {
  View,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { RendezVous } from '../types/RendezVous';
import { fetchRendezVous } from '../services/rendezvousService';
import RendezVousItem from '../components/RendezVousItem';

const MesRendezVous = () => {
  const [rendezVousList, setRendezVousList] = useState<RendezVous[]>([]);
  const [filterSelected, setFilterSelected] = useState<string>('upcoming');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('showavailable => ', filterSelected);
    setRendezVousList([]);
    const getData = async () => {
      const rendezvous = await fetchRendezVous();

      setIsLoading(false);
      setRendezVousList(rendezvous);
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredRendezVous = rendezVousList.filter(rdv => {
    return filterSelected === 'upcoming'
      ? new Date(rdv.date).getTime() >= Date.now()
      : new Date(rdv.date).getTime() < Date.now();
  });

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Pressable
          accessibilityLabel="rendez vous passé"
          accessibilityRole="button"
          accessibilityState={{ selected: filterSelected === 'expired' }}
          style={[
            styles.statusBtn,
            filterSelected === 'expired' && styles.selected,
          ]}
          onPress={() => {
            setFilterSelected('expired');
          }}
        >
          <Text>Passés</Text>
        </Pressable>
        <Pressable
          style={[
            styles.statusBtn,
            filterSelected === 'upcoming' && styles.selected,
          ]}
          onPress={() => {
            setFilterSelected('upcoming');
          }}
        >
          <Text>A venir</Text>
        </Pressable>
      </View>
      {isLoading === false ? (
        <View style={styles.listContainer}>
          {filteredRendezVous.length > 0 ? (
            <FlatList
              data={filteredRendezVous}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <RendezVousItem rendezvous={item} />}
            />
          ) : (
            <Text>Aucun rendezvous disponible</Text>
          )}
        </View>
      ) : (
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorView: {
    flex: 1,
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    margin: 14,
  },
  statusBtn: {
    backgroundColor: 'lightgray',
    padding: 14,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: '#ABCDFF',
  },
});

export default MesRendezVous;
