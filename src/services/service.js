import axios from 'axios';

const PATH = 'list/';

const query = async () => {
  try {
    const res = await axios.get(PATH);
    return res.data.list;
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
