export default function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === '123456') {
          resolve('admin'); 
        }
         else {
          reject(new Error('401'));
        }
      }, 1000);
    });
  }
  