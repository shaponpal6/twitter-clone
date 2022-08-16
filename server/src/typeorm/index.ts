import { Users } from './User'
import { Murmurs } from '../murmurs/entity/murmurs.entity'
import { Followers } from './Followers'
import { Tweets } from '../tweets/entity/tweets.entity'

const entities = [Users, Murmurs, Followers, Tweets];

export { Users, Murmurs, Followers, Tweets };

export default entities;
