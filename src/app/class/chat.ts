import * as moment from 'moment';

export class Password { // 追加
  email: string;
  password: string;
  password_confirmation: string;

  constructor() {
    this.email = '';
    this.password = '';
    this.password_confirmation = '';
  }

  reset(): void {
    this.email = '';
    this.password = '';
    this.password_confirmation = '';    
  }
}


export class User {
  uid: number;
  name: string;

  constructor(uid: number, name: string) {
  	this.uid = uid;
  	this.name = name;
  }
}

export class Comment {
  user: User;
  initial: string;
  content: string;
  date: number;
  key?: string;
  edit_flag?: boolean;

  constructor(user: User, content: string) {
    this.user = user;
    this.initial = user.name.slice(0, 1);
    this.content = content;
    this.date = +moment();
  }

  // 取得した日付を反映し、更新フラグをつける
  setData(date: number, key: string): Comment {
    this.date = date;
    this.key = key
    this.edit_flag = false;
    return this;
  }
}

export class Session {
  login: boolean;

  constructor() {
    this.login = false;
  }

  reset(): Session {
    this.login = false;
    return this;
  }
}