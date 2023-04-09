# express-mysql-api-boilerplate

A simple boilerplate for building RESTful API with Express and MySQL using JWT for authentication.

## DB Setup

Edit `config.json` file to connect with DB MySQL

```JSON
{
  "database": {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "",
    "database": "example-db"
  },
  "createDb": false,
  "secret": "jokowi"
}
```

- "database" is the database connection configuration
- "createDb" is the flag to create the database if it does not exist
- "secret" is the secret key for JWT
