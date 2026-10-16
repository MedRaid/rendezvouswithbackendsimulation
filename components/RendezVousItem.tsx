import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { RendezVous } from '../types/RendezVous';

type Props = {
  rendezvous: RendezVous;
};

const RendezVousItem = ({ rendezvous }: Props) => {
  // id: 1,
  // particien: 'Dr. Sophie Martin',
  // specialite: 'Médecin généraliste',
  // date: '2026-10-20T09:00:00',
  // status: true,

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.particienInfo}>
          <Text style={styles.particienInfoText}>{rendezvous.particien}</Text>
          <Text style={styles.particienInfoText}>{rendezvous.specialite}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.particienInfoText}>{rendezvous.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  containerCard: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'lightgray',
    flexDirection: 'column',
    padding: 12,
    minWidth: 400,
  },
  particienInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    padding: 12,
  },
  particienInfoText: {
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    alignItems: 'center',
  },
});

export default RendezVousItem;
