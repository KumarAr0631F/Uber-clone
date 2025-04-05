# /users/register

**Method:** `POST`  
**Description:** Creates a new user account.

## Request Body

```json
{
  "fullname": {
    "firstname": "string (min length: 3)",
    "lastname": "string (optional, min length: 3)"
  },
  "email": "valid email (min length: 5)",
  "password": "string (min length: 6)"
}