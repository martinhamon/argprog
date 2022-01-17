export class Education{
 private _id: number
  public get id(): number {
    return this._id
  }
  public set id(value: number) {
    this._id = value
  }
 private _logo: String
  public get logo(): String {
    return this._logo
  }
  public set logo(value: String) {
    this._logo = value
  }
 private _title: String
  public get title(): String {
    return this._title
  }
  public set title(value: String) {
    this._title = value
  }
 private _subTitle: String
  public get subTitle(): String {
    return this._subTitle
  }
  public set subTitle(value: String) {
    this._subTitle = value
  }
 private _description: String
  public get description(): String {
    return this._description
  }
  public set description(value: String) {
    this._description = value
  }
 private _start: String
  public get start(): String {
    return this._start
  }
  public set start(value: String) {
    this._start = value
  }
 private _end: String
  public get end(): String {
    return this._end
  }
  public set end(value: String) {
    this._end = value
  }

  constructor  (){
    this._id=0
    this._logo=""
    this._title=""
    this._subTitle=""
    this._description=""
    this._start=""
    this._end=""
}

}
