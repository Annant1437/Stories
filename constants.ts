import { UserStory } from './types';

export const MOCK_USER_STORIES: UserStory[] = [
  {
    userId: 'user1',
    username: 'Abhi',
    avatar: 'https://picsum.photos/id/1015/200/200',
    stories: [
      {
        id: 'story1-1',
        url: 'story1.png', // <-- CHANGED to local file
        type: 'image',
        duration: 5000,
        viewers: [{ userId: 'user3', username: 'TravelBug', avatar: 'https://picsum.photos/id/1025/200/200' }],
      },
      {
        id: 'story1-2',
        url: 'story2.jpg', // <-- CHANGED to local file
        type: 'image',
        duration: 7000,
        viewers: [],
      },
    ],
  },
  {
    userId: 'user2',
    username: 'Kazz',
    avatar: 'https://picsum.photos/id/102/200/200',
    stories: [
      {
        id: 'story2-1',
        url: 'https://picsum.photos/id/103/1080/1920', // <-- This external one still works
        type: 'image',
        duration: 5000,
        viewers: [],
      },
      {
        id: 'story2-2',
        url: 'https://picsum.photos/id/1043/1080/1920',
        type: 'image',
        duration: 6000,
        viewers: [{ userId: 'user1', username: 'NatureLover', avatar: 'https://picsum.photos/id/1015/200/200' }],
      },
      {
        id: 'story2-3',
        url: 'https://picsum.photos/id/104/1080/1920',
        type: 'image',
        duration: 5000,
        viewers: [],
      },
    ],
  },
  {
    userId: 'user3',
    username: 'Rogue',
    avatar: 'abhia.png', // <-- CHANGED to local file
    stories: [
      {
        id: 'story3-1',
        url: 'https://picsum.photos/id/10/1080/1920',
        type: 'image',
        duration: 8000,
        viewers: [],
      },
    ],
  },
  {
    userId: 'user4',
    username: 'Annant',
    avatar: 'https://picsum.photos/id/202/200/200',
    stories: [
      {
        id: 'story4-1',
        url: 'https://picsum.photos/id/211/1080/1920',
        type: 'image',
        duration: 5000,
        viewers: [],
      },
      {
        id: 'story4-2',
        url: 'https://picsum.photos/id/305/1080/1920',
        type: 'image',
        duration: 7000,
        viewers: [],
      },
    ],
  },
  {
    userId: 'user5',
    username: 'Infinitydaa',
    avatar: 'https://picsum.photos/id/30/200/200',
    stories: [
      {
        id: 'story5-1',
        url: 'https://picsum.photos/id/431/1080/1920',
        type: 'image',
        duration: 6000,
        viewers: [],
      },
    ],
  },
];

export const CURRENT_USER = {
  userId: 'currentUser',
  username: 'You',
  avatar: 'https://picsum.photos/id/58/200/200',
};