import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

interface UserFollowState {
    isFollowing: boolean;
    message: string;
    
}

export const userFollowState: Writable<UserFollowState> = writable({
  isFollowing: false,
  message: '',
});