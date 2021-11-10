interface Response {
    token: string;
    user: {
      name: string,
      email: string,
      password: string,
    };
    credentials?: object
  }
  
  export function signIn(credentials): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: "jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3",
          user: {
            name: credentials.username,
            email: "thiagomarinho@rockeseat.com.br",
            password: credentials.password
          },
        });
      }, 2000);
    });
  }