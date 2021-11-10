interface Response {
    token: string;
    user: {
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
            email: credentials.useremail,
            password: credentials.password
          },
        });
      }, 2000);
    });
  }