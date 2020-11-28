import { getFirebaseApp } from "./FirebaseApp";

export interface IRepository<T> {
    getAll(): firebase.default.database.Reference;
    getOne(key: string): firebase.default.database.Reference;
    create(data: T): Promise<any>;
    update(key: string, data: T): Promise<any>;
    remove(key: string): Promise<any>;
    removeAll(): Promise<any>;
}

type Rule<T> = (data: T) => Promise<any>;

export class Repository<T> implements IRepository<T> {
    table: firebase.default.database.Reference;
    rules: Rule<T>[];
    constructor(name: string, rules?: Rule<T>[]) {
        let {database} = getFirebaseApp();
        this.table = database.ref(name);
        this.rules = rules;
    }

    getAll(): firebase.default.database.Reference {
        return this.table;
    }

    getOne(key: string): firebase.default.database.Reference {
        return this.table.child(key);
    }

    create(data: T): Promise<any> {
        return Promise
            .all(this.rules.map(r => r(data)))
            .then(() => {
                return this.table.push(data).then();
            });
    }

    update(key: string, data: T): Promise<any> {
        return this.table.child(key)?.update(data);
    }

    remove(key: string): Promise<any> {
        return this.table.child(key)?.remove();
    }

    removeAll(): Promise<any> {
        return this.table.remove();
    }
}
