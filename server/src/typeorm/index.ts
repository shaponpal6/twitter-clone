import { Users } from '../users/entity/user.entity'
import { Murmurs } from '../murmurs/entity/murmurs.entity'
import { Followers } from '../followers/entity/followers.entity'
import { Tweets } from '../tweets/entity/tweets.entity'

const entities = [Users, Murmurs, Followers, Tweets];

export { Users, Murmurs, Followers, Tweets };

export default entities;
