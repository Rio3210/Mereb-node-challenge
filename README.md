# Mereb-node-crud-challenge
## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Rio3210/Mereb-node-challenge.git
    ```
2. Go to the directory
   ```   
    cd Mereb-node-challenge
    npm install
    ```

## API Endpoints
The following endpoints are available:

 * **GET** /person: Retrieves information about all persons.
 * **GET** /person/{personId}: Retrieves information about a specific person.
 * **POST** /person: Creates a new person record.
 * **PUT** /person/{personId}: Updates an existing person record.
 * **DELETE** /person/{personId}: Deletes an existing person record.

. Person Object Structure
- `id` : A unique identifier generated on the server-side (string/UUID)
- `name` : The person's name (string, required)
- `age` : The person's age (number, required)
- `hobbies` : ' An array of the person's hobbies (array of strings or empty array, required) '