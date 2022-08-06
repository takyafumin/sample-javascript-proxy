/**
 * システム日時ライブラリクラス
 *
 * @param {Date} base ベースとなる日付インスタンス
 */
export class SystemClock {
	constructor() {
		console.log("SystemClock Constructor");
		this.base = new Date();
	}

	/**
	 * 現在日時を返却する
	 *
	 * @return {Date} 現在日時
	 */
	now() {
		return this.base.toString();
	}
}
