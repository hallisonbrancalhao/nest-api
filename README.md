# **Steps**

### Import Mongoose App module

https://docs.nestjs.com/techniques/mongodb#plugins

### Generate module

```
nest g module auth
```

### Gerando controller

```
nest g controller auth
```

### Gerando Service

```
nest g service auth
```

### Gerando Guard

```
nest g guard auth
```

### Instalando bcrypt

https://docs.nestjs.com/security/encryption-and-hashing#hashing

```
npm i bcrypt
npm i -D @types/bcrypt
```

### Configuando Guards

https://docs.nestjs.com/security/authentication#jwt-token

```
npm install --save @nestjs/jwt
```

### Implementando Auth guard

https://docs.nestjs.com/security/authentication#implementing-the-authentication-guard

### Exceptions

https://docs.nestjs.com/exception-filters#built-in-http-exceptions

### Gerando Middleware

```
nest g middleware middleware/logger
```

### Aplicando Middleware

https://docs.nestjs.com/middleware#applying-middleware
