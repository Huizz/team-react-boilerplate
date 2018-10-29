interface IError {
  code: number;
  httpCode: number;
  message: string;
  error?: any;
}

export const errorBuilder = (code: number, message: string, error?: any): IError => {
  code = Math.abs(code);
  return {
    code: 0 - code,
    message,
    httpCode: (code < 1000) ? code : Math.floor(code / 10),
    error
  }
}


export default class Validator {

  public type: string;
  public errorCode: number;
  public httpCode: {[key: string]: number};
  public message: {[key: string]: string};
  public shouldThrowError: () => Validator;

  constructor(type: string , errorCode: number = 500) {
    this.type = type || 'Object';
    this.errorCode = errorCode;
    this.httpCode = {
      badRequest: 400,
      unauthorised: 403,
      notExists: 404,
      unexpected: 500
    }
    this.message = {
      IAMS_ACCESS_TOKEN: `Unexpected IAMS error when retrieving access token`,
      IAMS_USER_INFO: `Unexpected IAMS error when retrieving user info`,
      badRequest: `Bad request while calling action on ${this.type}`,
      unexpected: `Something went wrong while calling action on ${this.type}`,
      unauthorised: `Unauthorised access of ${this.type}`
    }
    this.shouldThrowError = (newErrorCode = 500) => new Validator(this.type, newErrorCode);
  }

  public when(condition: boolean) {
    if (condition) {
      switch (this.errorCode) {
        case 400: throw errorBuilder(this.httpCode.badRequest, this.message.badRequest);
        case 403: throw errorBuilder(this.httpCode.unauthorised, this.message.unauthorised);
        case 404: throw errorBuilder(this.httpCode.notExists, this.message.notExists);
        default: throw errorBuilder(this.httpCode.unexpected, this.message.unexpected);
      }
    }
    return true;
  }

}