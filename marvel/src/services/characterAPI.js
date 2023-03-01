import api from './apiConfig';
import md5 from 'md5';

const getAllCharacter = () => {
  const publicKey = 'bfd388ba325f5978227228d57ef8c0cc';
  const privateKey = 'd3f3b9e0d9b32b5d2cfa8c89065f9eec231e04f6';
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const uri = `/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`;

  return api.get(uri).then((result) => {
    return result.data;
  });
};

const getCharacter = (name) => {
  const publicKey = 'bfd388ba325f5978227228d57ef8c0cc';
  const privateKey = 'd3f3b9e0d9b32b5d2cfa8c89065f9eec231e04f6';
  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const uri = `/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&name=${name}`;

  return api.get(uri).then((result) => {
    return result.data;
  });
};

export { getAllCharacter, getCharacter };
