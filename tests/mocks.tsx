export default function mocks() {
  /*
    jest.mock('@services/auth', () => {
    return {
      useAuth: jest.fn(() => {
        return {
          validatePhoneVerification: () => {
            return new Promise((resolve) => {
              resolve({
                data: {
                  validatePhoneVerification: {
                    success: true
                  }
                }
              });
            });
          },
          startPhoneVerification: () => {
            return new Promise((resolve) => {
              resolve({
                data: {
                  startPhoneVerification: {
                    success: true
                  }
                }
              });
            });
          },
          isSignedIn: () => {
            return true;
          },
          signOut: () => {
            return new Promise((resolve) => {
              resolve(null);
            });
          }
        };
      })
    };
  });

  jest.mock('next/router', () => {
    return {
      useRouter: jest.fn(() => {
        return {
          push: jest.fn(() => {}),
          route: '/'
        };
      })
    };
  });

  jest.mock('@utils/js/get-auth-token', () => {
    return () => {
      return '';
    };
  });

  jest.mock('react-use-intercom', () => {
    return {
      useIntercom: jest.fn(() => {
        return {
          boot: jest.fn(),
          shutdown: jest.fn(),
          show: jest.fn()
        };
      })
    };
  });
  */
}
