/**
 * システム日時ライブラリクラス
 */
export class SystemClock {
	constructor() {
		console.log("SystemClock Constructor");
	}

	/**
	 * 現在日時を返却する
	 *
	 * @return {Date} 現在日時
	 */
	now() {
		return new Date();
	}
}
