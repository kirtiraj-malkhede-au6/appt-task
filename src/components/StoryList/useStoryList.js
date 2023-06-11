import React, {useState} from 'react';

const myPhoto =
  'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U';

const data = [
  {
    id: 1,
    name: 'Meerim',
    imageUrl:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 2,
    name: 'Kobal',
    imageUrl:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 3,
    name: 'Kanat',
    imageUrl:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 4,
    name: 'Nick',
    imageUrl:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 5,
    name: 'Mick',
    imageUrl:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
  {
    id: 6,
    name: 'Meerim',
    imageUrl:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 7,
    name: 'Kobal',
    imageUrl:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 8,
    name: 'Kanat',
    imageUrl:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 9,
    name: 'Nick',
    imageUrl:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 10,
    name: 'Mick',
    imageUrl:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
  {
    id: 11,
    name: 'Meerim',
    imageUrl:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 12,
    name: 'Kobal',
    imageUrl:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 13,
    name: 'Kanat',
    imageUrl:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 14,
    name: 'Nick',
    imageUrl:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 15,
    name: 'Mick',
    imageUrl:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
];

export default function useStoryList() {
  const [storyList, setStoryList] = useState(data);

  return {storyList, myPhoto};
}
