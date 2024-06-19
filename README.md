## DOCUMENTAÇÃO ROTAS
"/user/new-user",
{
  "enterpriseId": "enterpriseId",
  "name": "Leonardo",
  "email": "email@gmail.com"
}

"/user/delete-user",
{
  "id": "user-id"
}   
"/user/me/:userId"
"/user/notifications/:userId"


### Rotas Usuario

-- Falta Test
- [] Notifications ('name', 'email', 'cellphone')

-- Testado
- [x] Change Password
- [x] Get User Informations(name, lastname, email, company, department)
- [x] Delete User
- [x] Get Notifications 


-- Desenvolvimento
- [] Put Notifications
- [] Tasks ('name', 'points', 'created_at', 'completed_at')
- [] Rankings('name', 'position', 'created_at', 'ended_at', 'points' )
- [] Rewards('name', 'points', 'claimed_at' )
