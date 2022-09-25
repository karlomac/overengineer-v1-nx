import Vue from 'vue'

import { Client, Account } from 'appwrite';

const client = new Client;
const account = new Account(client);

console.log('url -', process.env.API_URL)

client
    .setEndpoint(process.env.apiUrl)
    .setProject(process.env.apiProject)
    ;



