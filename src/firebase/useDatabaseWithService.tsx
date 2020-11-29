import React, {useEffect} from 'react';
import {IRepository} from './Repository';
import {IDatabaseReturn} from './useDatabase';

export interface IDataWithKey<T> {
  primaryKey: string;
  data: T;
}

export interface ITableService<T> {
  primaryKey: string;
  data: T;
  update: (data: T) => void;
  remove: () => void;
}

export function useDatabaseWithService<T>(
  repo: IRepository<T>
): IDatabaseReturn<ITableService<T>[]> {
  // initialize our default state
  let [error, setError] = React.useState(false);
  let [loading, setLoading] = React.useState(true);
  let [feed, setFeed] = React.useState<any>(null);

  useEffect(() => {
    repo.getAll().once(
      'value',
      (snapShot) => {
        setLoading(false);
        let data = snapShot.val();
        setFeed(data);
      },
      setError
    );

    return () => repo.table.off();
  }, []);

  return {
    error,
    loading,
    data: transformToList<T>(feed).map(({primaryKey, data}) => ({
      primaryKey,
      data,
      update: (d: T) => {
        repo.update(primaryKey, d);
        feed[primaryKey] = d;
        setFeed({...feed});
      },
      remove: () => {
        repo.remove(primaryKey);
        delete feed[primaryKey];
        setFeed({...feed});
      },
    })),
  };
}

function transformToList<T>(data: any): IDataWithKey<T>[] {
  if (!data) return [];
  return Object.keys(data).map((primaryKey) => ({
    primaryKey,
    data: data[primaryKey],
  }));
}
