
export interface Story {
  id: string;
  url: string;
  type: 'image' | 'video';
  duration: number;
  viewers: { userId: string; username: string; avatar: string }[];
}

export interface UserStory {
  userId: string;
  username: string;
  avatar: string;
  stories: Story[];
}
