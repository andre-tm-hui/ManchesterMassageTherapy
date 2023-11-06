import { Massage } from '../massage/Massage';

export default interface IMasseuseData {
  uuid: string;
  profilePhotoUrl: string;
  fullName: string;
  yearsWithMMT: number;
  expertIn: Massage[];
  favorite: Massage;
  message: string;
}

export const defaultMasseuse: IMasseuseData = {
  uuid: '12345678',
  profilePhotoUrl: '/assets/masseuse/placeholder.jpg',
  fullName: 'John Doe',
  yearsWithMMT: 11,
  expertIn: [Massage.DeepTissueSwedish, Massage.Sports],
  favorite: Massage.Sports,
  message: 'Lorem ipsum',
};

export const defaultMasseuses: IMasseuseData[] = [
  defaultMasseuse,
  { ...defaultMasseuse, uuid: '23456789', fullName: 'Dohn Joe' },
  { ...defaultMasseuse, uuid: '34567890', fullName: 'Mean Dean' },
  { ...defaultMasseuse, uuid: '45678901', fullName: 'Dean Mean' },
  { ...defaultMasseuse, uuid: '56789012', fullName: 'Bob' },
];
