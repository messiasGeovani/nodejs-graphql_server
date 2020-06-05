# nodejs-graphql_server
> A simple sever with graphql archtecture

## Intallation

```sh
yarn && yarn start
```
##### Development mode

```sh
yarn dev
```

## Usage Manual:

### Queries

##### user

```
users: [User!]!
```
##### Type details

```
type User {
  id: ID!
  name: String!
  email: String!
}
```
##### user

```
user(
  id: ID!
): User
```

##### Type details

```
type User {
  id: ID!
  name: String!
  email: String!
}
```

##### Arguments

```
id: ID!
```

### Mutations

##### createUser

```
createUser(
name: String!
email: String!
): User
```

##### Type details

```
type User {
id: ID!
name: String!
email: String!
}
```

##### Arguments

```
name: String!
email: String!
```

## Meta

Linkedin Profile – [Messias Geovani](https://www.linkedin.com/in/messias-geovani-00125416a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGnSoFwiETD%2BtGrv4dF9mSw%3D%3D) 

Email – messias.geovani.lima@gmail.com

Github profile – [messiasGeovani](https://github.com/messiasGeovani)

## Contributing

1. Fork it (<https://github.com/messiasGeovani/nodejs-graphql_server/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
