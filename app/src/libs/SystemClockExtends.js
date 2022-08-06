import { DateTime } from "luxon";

/**
 * システム日時ライブラリクラス(Extends)
 *
 *  - 継承してもstaticメソッドの拡張はできない？？？
 */
export class SystemClockExtends extends DateTime {
	constructor() {
		super({});
	}

	/**
	 * @type {String} 名前
	 */
	static name = "SystemClockExtends";

	static local() {
		// 継承してもWrapperと一緒のことしかできない？
		return DateTime.local();
	}

	static now() {
		return DateTime.local().toString();
	}
}
