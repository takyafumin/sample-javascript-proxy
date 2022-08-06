import { DateTime } from "luxon";
import { SystemClock } from "./libs/SystemClock";

// -----------------
// Luxon2での出力
// -----------------
const now = DateTime.local();
console.log(now.toString());

// -----------------
// SystemClockでの出力
// -----------------

/**
 * @type {SystemClock} 日時ライブラリ
 */
const clock = new SystemClock();
console.log(clock.now());
