export interface IError {
  httpCode: number;
  code: number;
  message: string;
  error?: any;
}

interface IErrorType<T> {
  badRequest: T;
  unauthorised: T;
  notFound: T;
  unexpected: T;
}

export default class ErrorManager {

  public httpCode: IErrorType<number>;
  public message: IErrorType<string>;

  private type: string;
  private errorCode: number;

  constructor(type: string = 'Unknown Object', errorCode: number = 500) {
    this.type = type;
    this.errorCode = errorCode;
    this.httpCode = {
      badRequest: 400,
      unauthorised: 403,
      notFound: 404,
      unexpected: 500
    };
    this.message = {
      badRequest: `Bad request while transacting on ${this.type}`,
      unauthorised: `Unauthorised access of ${this.type}`,
      notFound: `The ${this.type} resource could not be found`,
      unexpected: `Something went wrong while transacting on ${this.type}`
    }
  }

  // INFO: Used in conjucture with error function (Validator/index.ts)
  // --> e.g. validator.error(404).throwsWhen(user === null); 
  public throwsWhen(condition: boolean) {
    if (condition) {
      const errorMsg = Object.keys(this.message).find(key => this.httpCode[key] === this.errorCode);
      throw buildError(this.errorCode, this.message[errorMsg || 'unexpected']);
    }
    return true;
  }

  public returnUnexpectedError() {
    return buildError(this.httpCode.unexpected, this.message.unexpected);
  }
}

export const buildError = (code: number, message: string, error?: any): IError => {
  code = Math.abs(code);
  return {
    httpCode: (code < 1000) ? code : Math.floor(code / 10),
    code: 0 - code,
    message,
    error
  }
}

export const formatError = (err: any) => {
  const sampleErrorObj = buildError(200, 'sample');
  const sampleKeys = Object.keys(sampleErrorObj).sort();
  const errorKeys = Object.keys(err).sort();

  if(JSON.stringify(sampleKeys) !== JSON.stringify(errorKeys)){
    return buildError(500, 'Something wrong happened', err)
  }
  return err;
}