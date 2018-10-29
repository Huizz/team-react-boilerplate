import ErrorManager from './errorManager';

export default class Validator {

  public error: (errorCode?: number) => ErrorManager;
  private type: string;

  constructor(type: string = 'Unknown Object') {
    this.type = type;
    this.error = (errorCode = 500) => new ErrorManager(this.type, errorCode);
  } 

}