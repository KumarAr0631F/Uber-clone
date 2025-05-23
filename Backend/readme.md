# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It validates the input data, hashes the password, and creates a new user record in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field             | Type   | Required | Description                                   |
|--------------------|--------|----------|-----------------------------------------------|
| `fullname`         | Object | Yes      | Contains the user's first and last name.      |
| `fullname.firstname` | String | Yes      | First name of the user (min 3 characters).    |
| `fullname.lastname`  | String | No       | Last name of the user (min 3 characters).     |
| `email`            | String | Yes      | Email address of the user (must be valid).    |
| `password`         | String | Yes      | Password for the user (min 6 characters).     |

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success (201 Created)
- **Description**: User successfully registered.
- **Response Body**:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Error (400 Bad Request)
- **Description**: Input validation failed.
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be atleast 3 character long.",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 character long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) upon successful authentication.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field     | Type   | Required | Description                                   |
|-----------|--------|----------|-----------------------------------------------|
| `email`   | String | Yes      | Email address of the user (must be valid).    |
| `password`| String | Yes      | Password for the user (min 6 characters).     |

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success (200 OK)
- **Description**: User successfully authenticated.
- **Response Body**:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Error (400 Bad Request)
- **Description**: Input validation failed.
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 character long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: Invalid email or password.
- **Response Body**:
```json
{
  "message": "Invalid email or password"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the authenticated user's profile information.

### Method
`GET`

### Headers
- **Authorization**: Bearer `<JWT_TOKEN>`

### Responses

#### Success (200 OK)
- **Description**: User profile retrieved successfully.
- **Response Body**:
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: User is not authenticated.
- **Response Body**:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the authenticated user by invalidating their token.

### Method
`GET`

### Headers
- **Authorization**: Bearer `<JWT_TOKEN>`

### Responses

#### Success (200 OK)
- **Description**: User logged out successfully.
- **Response Body**:
```json
{
  "message": "Logged out successfully"
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: User is not authenticated.
- **Response Body**:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain in the system. It validates the input data, hashes the password, and creates a new captain record in the database. Upon successful registration, it returns the captain details.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field                  | Type   | Required | Description                                      |
|------------------------|--------|----------|--------------------------------------------------|
| `fullname`             | Object | Yes      | Contains the captain's first and last name.      |
| `fullname.firstname`   | String | Yes      | First name of the captain (min 3 characters).    |
| `fullname.lastname`    | String | No       | Last name of the captain (min 3 characters).     |
| `email`                | String | Yes      | Email address of the captain (must be valid).    |
| `password`             | String | Yes      | Password for the captain (min 6 characters).     |
| `vehicle.color`        | String | Yes      | Color of the vehicle (min 3 characters).         |
| `vehicle.plate`        | String | Yes      | License plate of the vehicle (min 3 characters). |
| `vehicle.capacity`     | Number | Yes      | Capacity of the vehicle (minimum 1).             |
| `vehicle.vehicleType`  | String | Yes      | Type of the vehicle (car, bike, or truck).       |

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success (201 Created)
- **Description**: Captain successfully registered.
- **Response Body**:
```json
{
  "_id": "captain_id_here",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Validation Error (400 Bad Request)
- **Description**: Input validation failed.
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be atleast 3 character long.",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Color must be atleast 3 character long.",
      "param": "vehicle.color",
      "location": "body"
    }
  ]
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/captains/login`

### Description
This endpoint is used to authenticate a captain. It validates the input data, checks the captain's credentials, and returns a JSON Web Token (JWT) upon successful authentication.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field     | Type   | Required | Description                                   |
|-----------|--------|----------|-----------------------------------------------|
| `email`   | String | Yes      | Email address of the captain (must be valid). |
| `password`| String | Yes      | Password for the captain (min 6 characters).  |

### Example Request
```json
{
  "email": "jane.smith@example.com",
  "password": "securepassword"
}
```

### Responses

#### Success (200 OK)
- **Description**: Captain successfully authenticated.
- **Response Body**:
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Validation Error (400 Bad Request)
- **Description**: Input validation failed.
- **Response Body**:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 character long.",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: Invalid email or password.
- **Response Body**:
```json
{
  "message": "Invalid Credentials"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/captains/logout`

### Description
This endpoint is used to log out the authenticated captain by invalidating their token.

### Method
`GET`

### Headers
- **Authorization**: Bearer `<JWT_TOKEN>`

### Responses

#### Success (200 OK)
- **Description**: Captain logged out successfully.
- **Response Body**:
```json
{
  "message": "Logged out successfully"
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: Captain is not authenticated.
- **Response Body**:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```

---

## Endpoint: `/captains/profile`

### Description
This endpoint is used to retrieve the authenticated captain's profile information.

### Method
`GET`

### Headers
- **Authorization**: Bearer `<JWT_TOKEN>`

### Responses

#### Success (200 OK)
- **Description**: Captain profile retrieved successfully.
- **Response Body**:
```json
{
  "_id": "captain_id_here",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Authentication Error (401 Unauthorized)
- **Description**: Captain is not authenticated.
- **Response Body**:
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500 Internal Server Error)
- **Description**: An unexpected error occurred on the server.
- **Response Body**:
```json
{
  "error": "Internal Server Error"
}
```