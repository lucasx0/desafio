import axios from 'axios';
import md5 from 'md5';

const privateKey = 'd3f3b9e0d9b32b5d2cfa8c89065f9eec231e04f6';
const publicKey = 'bfd388ba325f5978227228d57ef8c0cc';

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const Api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/characters?',
});

export default Api;
