import React, {useState, useEffect} from 'react';

export function useData(filename) {
  let [data, setData] = useState({});

  useEffect(() => {
    getData(filename).then((d) => {
      setData({
        ...data,
        [filename]: d.data,
      });
    });
  }, [filename]);

  return data[filename];
}

export function getData(filename) {
  let endpoint = '/generated/data/' + filename + '.json';
  return fetch(endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json, text/html',
      'Content-Type': 'application/json',
    },
  })
    .then((r) => r.json())
    .then((data) => ({name: filename, data}));
}

{
  /* <div className="container text-center">
    <span className="fa fa-spinner"></span>
</div> */
}
