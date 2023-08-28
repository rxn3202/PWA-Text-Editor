import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// This method takes some content as input and stores it in the database.
export const putDb = async (content) => {
  console.log('PUT in the database');

  // Establish a connection to the database with the specified name and version.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction with read-write privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Access the desired object store.
  const store = tx.objectStore('jate');

  // Create a request to store the provided content with a specific ID.
  const request = store.put({ id: 1, value: content });

  // Await confirmation of the request and log the result.
  const result = await request;
  console.log('Data saved in the database', result);
};

// This method retrieves all content stored in the database.
export const getDb = async () => {
  console.log('GET from the database');

  // Establish a connection to the database with the specified name and version.
  const jateDb = await openDB('jate', 1);

  // Create a new transaction with read-only privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Access the desired object store.
  const store = tx.objectStore('jate');

  // Use the .getAll() method to retrieve all data from the database.
  const request = store.getAll();

  // Await confirmation of the request and store the result.
  const result = await request;
  console.log('Retrieved data:', result);
  return result;
};

// Initialize the database when the module is imported.
initdb();
