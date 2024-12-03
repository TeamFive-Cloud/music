export const up = async (db) => {
  await db.createCollection('users', {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["email", "password", "role"],
        properties: {
          email: {
            bsonType: "string",
            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          },
          password: {
            bsonType: "string",
            minLength: 6
          },
          role: {
            enum: ["user", "admin"]
          }
        }
      }
    }
  });

  await db.createCollection('music', {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title", "artist"],
        properties: {
          title: {
            bsonType: "string"
          },
          artist: {
            bsonType: "string"
          },
          album: {
            bsonType: "string"
          },
          genre: {
            bsonType: "string"
          },
          releaseDate: {
            bsonType: "date"
          }
        }
      }
    }
  });

  await db.collection('users').createIndex({ email: 1 }, { unique: true });
  await db.collection('music').createIndex({ title: 1 });
};