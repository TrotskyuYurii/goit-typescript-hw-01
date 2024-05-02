
  
  function createOrUpdateUser(initialValues: Partial<User>) {

  }
  
type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }

  createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
  } as Partial<User>);
  