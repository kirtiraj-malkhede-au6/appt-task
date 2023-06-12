import React, {useState} from 'react';
import {storage} from '../../storage/storage';

const data = [
  {
    id: 1,
    name: 'Meerim',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 2,
    name: 'Kobal',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
    profileImage:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 3,
    name: 'Kanat',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',

    profileImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 4,
    name: 'Nick',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 5,
    name: 'Mick',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    profileImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
  {
    id: 6,
    name: 'Meerim',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 7,
    name: 'Kobal',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
    profileImage:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 8,
    name: 'Kanat',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',

    profileImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 9,
    name: 'Nick',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 10,
    name: 'Mick',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    profileImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
  {
    id: 11,
    name: 'Meerim',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/330/200/200.jpg?hmac=Qo-hwVGhetTRMtlg4NE-HSzGQmvEC4vPxFFp3foXOHM',
  },
  {
    id: 12,
    name: 'Kobal',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
    profileImage:
      'https://fastly.picsum.photos/id/398/200/200.jpg?hmac=vfIjMAWfannZLe4HsdciIJxPkZh7v4XA2OpWglmHARg',
  },
  {
    id: 13,
    name: 'Kanat',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',

    profileImage:
      'https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM',
  },
  {
    id: 14,
    name: 'Nick',
    username: '@random123',
    postImage:
      'https://cdn0.weddingwire.in/article/1678/3_2/960/jpg/8761-wedding-background-images-infinitememories-lead.jpeg',
    profileImage:
      'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0',
  },
  {
    id: 15,
    name: 'Mick',
    username: '@random123',
    postImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
    profileImage:
      'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
  },
];
function useHomeScreen() {
  const jsonUserPost = storage.getString('userPost');
  const userObject = jsonUserPost ? JSON.parse(jsonUserPost) : null;
  const [postList, setPostList] = useState(
    userObject?.id ? [userObject, ...data] : data,
  );

  return {postList};
}

export default useHomeScreen;
