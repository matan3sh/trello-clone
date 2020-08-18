import storageService from './storageService';
import dbService from './dbService';

const KEY = 'lists';
var gLists = null;
_createLists();

function _createLists() {
  gLists = storageService.load(KEY);
  if (gLists === null) {
    gLists = dbService.getDefaultData();
    storageService.store(KEY, gLists);
  }
}

const query = async () => {
  try {
    return Promise.resolve(gLists);
  } catch (err) {
    console.log(err);
  }
};

function makeId(length = 11) {
  var txt = '';
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export default {
  query,
  makeId,
};
