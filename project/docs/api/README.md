# Music Training Platform API Documentation

## Authentication
All protected routes require a JWT token in the Authorization header.

## Endpoints

### Music

#### GET /api/music
Returns a list of all music courses.

Response: 200 OK
```json
[
  {
    "id": "string",
    "title": "string",
    "artist": "string",
    "album": "string",
    "genre": "string",
    "releaseDate": "date",
    "imageUrl": "string",
    "description": "string",
    "price": "number",
    "duration": "number",
    "level": "string"
  }
]
```

#### POST /api/music
Create a new music course (Protected - Admin only)

Request Body:
```json
{
  "title": "string",
  "artist": "string",
  "album": "string",
  "genre": "string",
  "releaseDate": "date",
  "imageUrl": "string",
  "description": "string",
  "price": "number",
  "duration": "number",
  "level": "string"
}
```

Response: 201 Created