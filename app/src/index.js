import { DateTime } from "luxon";
import { SystemClockWrapper } from "./libs/SystemClockWrapper";
import { SystemClockExtends } from "./libs/SystemClockExtends";

console.log("----------------------------------------");
console.log("Luxon2での出力");
const now = DateTime.local();
console.log(now.toString());

console.log("----------------------------------------");
console.log("SystemClockWrapperでの出力");
/**
 * @type {SystemClockWrapper} 日時ライブラリ
 */
const clockWrapper = new SystemClockWrapper();
console.log(clockWrapper.name);
console.log(clockWrapper.now());
console.log(clockWrapper.local().toString());

console.log("----------------------------------------");
console.log("SystemClockExtendsでの出力, static参照");

console.log(SystemClockExtends.name);
console.log(SystemClockExtends.now());
console.log(SystemClockExtends.local().toString());
