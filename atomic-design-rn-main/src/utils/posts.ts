import { profiles } from './profiles';

export const posts = [
  {
    id: '1',
    likes: 'liked by rodrigo and 29 others',
    cover: require('../assets/photos/1.png'),
    description: 'The game in Japan was amazing and I want to share some photos',
    lastLiked: profiles[1],
    postProfilePicture: require('../assets/people/3.png'),
    postUsername: 'Felipe',
    postLocation: 'Tokyo'
  },
  {
    id: '2',
    likes: 'liked by rodrigo and 29 others',
    cover: require('../assets/photos/2.png'),
    description: 'The game in Japan was amazing and I want to share some photos',
    lastLiked: profiles[2],
    postProfilePicture: require('../assets/people/1.png'),
    postUsername: 'Rodrigo Gonçalves',
    postLocation: 'Santa Catarina'
  },
  {
    id: '3',
    likes: 'liked by rodrigo and 29 others',
    cover: require('../assets/photos/3.png'),
    description: 'The game in Japan was amazing and I want to share some photos',
    lastLiked: profiles[3],
    postProfilePicture: require('../assets/people/2.png'),
    postUsername: 'Karenna',
    postLocation: 'Indianapolis'
  },
];