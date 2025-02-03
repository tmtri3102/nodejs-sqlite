Endpoint GET user cho phép chúng ta lấy user bằng username
GET
/user/:userName

CASE 1:
userName = "peter" =>
Status: 200
Response:
{
"id": 1,
"userName": "peter",
"age": "24"
}

CASE 2:
userName = "unauthorised" =>
Status: 403
Response : { }

CASE 3:
userName = ({USERNAME}) =>
Status: 200
Response :
{
"id": 0,
"userName": {USERNAME},
"age": "20"
}
Endpoint POST cho phép chúng ta tạo thêm User
POST
/user

CASE 4:
Body:
{
"id": 3,
"userName": "goodBoy",
"age": 35
}
=>
Status: 201
Response:
{
"id": 3,
"userName": "goodBoy",
"age": 35
}

CASE 5:
Body:
{
"id": 1,
"userName": "peter",
"age": 20
}
=>
Status: 209
Response:
{
"errorMessage": "UserId already exists"
}