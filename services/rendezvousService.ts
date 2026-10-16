import { RendezVous } from '../types/RendezVous';

const data = [
  {
    id: 1,
    particien: 'Dr. Sophie Martin',
    specialite: 'Médecin généraliste',
    date: '2026-10-01T09:00:00',
    status: true,
  },
  {
    id: 2,
    particien: 'Dr. Karim Benali',
    specialite: 'Cardiologue',
    date: '2026-10-04T14:30:00',
    status: false,
  },
  {
    id: 3,
    particien: 'Dr. Claire Dubois',
    specialite: 'Dermatologue',
    date: '2026-10-02T11:15:00',
    status: true,
  },
  {
    id: 4,
    particien: 'Dr. Youssef Haddad',
    specialite: 'Dentiste',
    date: '2026-08-11T16:00:00',
    status: false,
  },
  {
    id: 5,
    particien: 'Dr. Émilie Laurent',
    specialite: 'Ophtalmologue',
    date: '2026-09-27T10:45:00',
    status: true,
  },
  {
    id: 6,
    particien: 'Dr. Thomas Petit',
    specialite: 'Pédiatre',
    date: '2026-10-09T08:30:00',
    status: true,
  },
];

export const fetchRendezVous = async (): Promise<RendezVous[]> => {
  await new Promise<void>(resolve => setTimeout(resolve, 3000));
  const sortedDate = data.sort((a, b) => a.date.localeCompare(b.date));
  return sortedDate;
};
