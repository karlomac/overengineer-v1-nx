import { Client, Account } from 'appwrite';

const localdb = {
  async initialise() {
  
    const client = new Client;
    const account = new Account(client);
    
    console.log('url -', this.$config.apiUrl)
    
    client
        .setEndpoint(process.env.apiUrl)
        .setProject(process.env.apiProject)
        ;

  }
}

export default localdb