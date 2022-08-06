import { DateTime } from "luxon";

/**
 * システム日時ライブラリクラス(Wrapper)
 *
 *  - Wrapperなので、baseクラスの機能へのエントリポイントを拡張として個々に実装する必要がある
 */
export class SystemClockWrapper {
	/**
	 * ハンドラーをセットしたクラス生成して返却する
	 *
	 * @returns {Proxy}
	 */
	constructor() {
		/**
		 * @type {String} 名前
		 */
		this.name = "SystemClockWrapper";

		const handler = {};

		return new Proxy(this, handler);
	}

	local() {
		return DateTime.local();
	}

	/**
	 * 現在日時を返却する
	 *
	 * @return {String} 現在日時
	 */
	now() {
		return DateTime.local().toString();
	}
}
