(1)base_URL
http://localhost:4200

(2) register
/api/auth/register
Request:{
"parentName": "أحمد حزه",
"email": "ahmed1@example.com",
"password": "Ahmed123",
"confirmPassword": "Ahmed123",
"childName": "عمر",
"childAge": 6
}'

examples of responses
success: 201
{
"success": true,
"message": "Account created successfully",
"data": {
"userData": {
"parentName": "mohamed hassan",
"email": "mohamed@example.com",
"childName": "hassan",
"childAge": 6,
"\_id": "6afb60dbe6ccb7e253553f3c"
}
}
}

errors{
failed: 409
{
"success": false,
"message": "User already exists",
"data": null
}

    server error: 500
        {
            "success": false,
            "message": "Internal server error",
            "data": null
        }
        validation: 400
       {
    "success": false,
    "messsage": "Validation failed",
    "data": null,
    "errors": [
        {
            "type": "field",
            "value": "",
            "msg": "This field is required",
            "path": "parentName",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "This feild is required",
            "path": "email",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "This feild is required",
            "path": "password",
            "location": "body"
        },
        {
            "type": "field",
            "value": "245",
            "msg": "Password doesn't match",
            "path": "confirmPassword",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "This feild is required",
            "path": "childName",
            "location": "body"
        },
        {
            "type": "field",
            "value": "",
            "msg": "This feild is required",
            "path": "childAge",
            "location": "body"
        }
    ]

}

}

(3) login
/api/auth/login
Request:
{
"email": "ahmed@example.com",
"password": "Ahmed123"
}
examples of responses
success: 200
{
"success": true,
"message": "login successfully",
"data": {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YWU1MjYyOTBiZTZlZjhiMzViODFhMzMiLCJlbWFpbCI6ImFobWVkQGV4YW1wbGUuY29tIiwiaWF0IjoxNzk0ODU3NDQzLCJleHAiOjE3OTQ4NTc3NDN9.wizn7hUmGIx0gU5RLhXHvma0Mc5QlkmMNpbeR3viVKg"
}
}

errors:{
email or password incorrect
401
{
"success": false,
"message": "Invalid email or password",
"data": null
}
validation
400
{
"success": false,
"messsage": "Validation failed",
"data": null,
"errors": [
{
"type": "field",
"value": "",
"msg": "This feild is required",
"path": "email",
"location": "body"
},
{
"type": "field",
"value": "",
"msg": "This feild is required",
"path": "password",
"location": "body"
}
]
}
}

(4) token
name: token
refresh time: 5 minutes
authorization: Bearer <token>

(5) error shape
feild: message
language: Arabic & english
status code:
400 : validation error
401: invalid email or password
409: repeated email
500: internal server error

(6) database language: arabic & english
