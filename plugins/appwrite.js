import Vue from 'vue'

import { Client, Account } from 'appwrite';

export default async ({ app, store, $config }, inject) => {
    const client = new Client;
    Vue.prototype.$awAccount = new Account(client);
    
    client
        .setEndpoint($config.apiURL)
        .setProject($config.apiProject)
        ;
  }



