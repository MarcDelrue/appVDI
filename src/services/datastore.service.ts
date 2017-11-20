import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Category, Company, Event, User } from '../models/reseauvdiModels.model';

const config: DatastoreConfig = {
  baseUrl: 'https://staging-vdi-api.herokuapp.com',
  models: {
    categories: Category,
    compagnies: Company,
    users: User,
    events: Event,
    //admins: Admin
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);

    }
}
