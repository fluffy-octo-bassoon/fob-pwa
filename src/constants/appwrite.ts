import { Account, Client, Databases } from "appwrite";

const client = new Client();
client.setEndpoint("https://fra.cloud.appwrite.io/v1").setProject("68135c340013362bb5bb");

const account = new Account(client);

const databases = new Databases(client);

export { account, client, databases };
