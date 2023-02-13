import axios from 'axios';
import md5 from 'md5';

const Api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/characters?',
  publicKey: 'bfd388ba325f5978227228d57ef8c0cc',
  privateKey: 'd3f3b9e0d9b32b5d2cfa8c89065f9eec231e04f6',
});

const has = md5(Api.publicKey + Api.privateKey);

export default Api;
