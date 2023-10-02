export abstract class HierarchicalElement {
  private _level: number = 0
  private static _maxLevel: number = 0
  constructor(level: number = 0) {
    this._level = level
  }

  get level(): number {
    return this._level
  }

  setLevel(level: number): void {
    this._level = level
  }

  static setMaxLevel(level: number): void {
    this._maxLevel = level
  }

  static get maxLevel(): number {
    return this._maxLevel
  }
}
