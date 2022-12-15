//the structural typing system of typescript

 type VerifyUserFn = (bdUser: User, sentUser: User) => boolean;
 type User = {user: string, password: string};

 const verifyUser: VerifyUserFn = (bdUser, sentUser) =>{
  return bdUser.user === sentUser.user && bdUser.password === sentUser.password;
 }

/*  these objects are not of type User, but it matches with it's restrictions, so, we can
use this objects as User types. In other strongly typed languages as Java, it must match the type
of the objects also, but here, we just need that it's structure matches. TS has a structural
typing system. */
 const user = {
  user:'Jim',
  password: '123456'
 }

export const bdUser = {
  user: 'Jim',
  password: '123456',
  permission: 'manager'
 }

 console.log(verifyUser(user, bdUser));
