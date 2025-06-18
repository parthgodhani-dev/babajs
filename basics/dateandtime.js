"use strict";


const myDate = new Date();

// console.log(myDate); // 2025-06-18T15:54:17.843Z
// console.log(myDate.toString()); // Wed Jun 18 2025 15:55:43 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString("en-IN")); // 18/6/2025, 4:10:24 pm
// console.log(Date.now());  // 1750263044792
// console.log(Date.parse("2025-06-18"));  // 1750263044792
// console.log(Date.UTC(2025, 5, 18));  // 1750263044792


// const myTime = new Date(2025, 5, 18);
// console.log(myTime); // 2025-01-18T00:00:00.000Z
// console.log(myTime.toString()); // Wed Jun 18 2025 00:00:00 GMT+0000 (Coordinated Universal Time)


const myTime = new Date();

// console.log(myTime.getFullYear());
// console.log(myTime.getMonth());
// console.log(myTime.getUTCDate());
// console.log(myTime.getDay());
// console.log(myTime.getHours());
// console.log(myTime.getMinutes());
// console.log(myTime.getSeconds());
// console.log(myTime.getMilliseconds());


// console.log(myTime.toTimeString(myTime.getTime()));


/*
| **Method**               | **Description**                          | **Example Code**                          | **Output Example**                      |
| ------------------------ | ---------------------------------------- | ----------------------------------------- | --------------------------------------- |
| `new Date()`             | Creates a new Date object                | `let d = new Date(); console.log(d);`     | `Wed Jun 18 2025 21:15:00 GMT+0530`     |
| `Date.now()`             | Returns timestamp (ms since Jan 1, 1970) | `console.log(Date.now());`                | `1750452900000`                         |
| `Date.parse()`           | Parses a date string                     | `console.log(Date.parse("2025-06-18"));`  | `1750444800000`                         |
| `Date.UTC()`             | Returns UTC time (ms)                    | `console.log(Date.UTC(2025, 5, 18));`     | `1750444800000`                         |
| `getFullYear()`          | Gets 4-digit year                        | `console.log(d.getFullYear());`           | `2025`                                  |
| `getMonth()`             | Gets month (0-11)                        | `console.log(d.getMonth());`              | `5` (for June)                          |
| `getDate()`              | Gets day of month (1-31)                 | `console.log(d.getDate());`               | `18`                                    |
| `getDay()`               | Gets weekday (0-Sun to 6-Sat)            | `console.log(d.getDay());`                | `3` (for Wednesday)                     |
| `getHours()`             | Gets hours (0-23)                        | `console.log(d.getHours());`              | `21`                                    |
| `getMinutes()`           | Gets minutes (0-59)                      | `console.log(d.getMinutes());`            | `15`                                    |
| `getSeconds()`           | Gets seconds (0-59)                      | `console.log(d.getSeconds());`            | `33`                                    |
| `getMilliseconds()`      | Gets milliseconds (0-999)                | `console.log(d.getMilliseconds());`       | `912`                                   |
| `getTime()`              | Returns time in ms since 1970            | `console.log(d.getTime());`               | `1750452933912`                         |
| `getTimezoneOffset()`    | Difference to UTC in minutes             | `console.log(d.getTimezoneOffset());`     | `-330`                                  |
| `setFullYear(YYYY)`      | Sets full year                           | `d.setFullYear(2030); console.log(d);`    | `Tue Jun 18 2030 21:15:00 GMT+0530`     |
| `setMonth(0-11)`         | Sets month                               | `d.setMonth(11); console.log(d);`         | `Wed Dec 18 2030 21:15:00 GMT+0530`     |
| `setDate(1-31)`          | Sets day of month                        | `d.setDate(1); console.log(d);`           | `Mon Dec 01 2030 21:15:00 GMT+0530`     |
| `setHours(0-23)`         | Sets hours                               | `d.setHours(10); console.log(d);`         | `Mon Dec 01 2030 10:15:00 GMT+0530`     |
| `setMinutes(0-59)`       | Sets minutes                             | `d.setMinutes(30); console.log(d);`       | `Mon Dec 01 2030 10:30:00 GMT+0530`     |
| `setSeconds(0-59)`       | Sets seconds                             | `d.setSeconds(45); console.log(d);`       | `Mon Dec 01 2030 10:30:45 GMT+0530`     |
| `setMilliseconds(0-999)` | Sets milliseconds                        | `d.setMilliseconds(999); console.log(d);` | `Mon Dec 01 2030 10:30:45.999 GMT+0530` |
| `toDateString()`         | Converts to readable date                | `console.log(d.toDateString());`          | `"Mon Dec 01 2030"`                     |
| `toTimeString()`         | Converts to readable time                | `console.log(d.toTimeString());`          | `"10:30:45 GMT+0530"`                   |
| `toISOString()`          | Converts to ISO format                   | `console.log(d.toISOString());`           | `"2030-12-01T05:00:45.999Z"`            |
| `toUTCString()`          | Converts to UTC string                   | `console.log(d.toUTCString());`           | `"Mon, 01 Dec 2030 05:00:45 GMT"`       |
| `toLocaleDateString()`   | Localized date string                    | `console.log(d.toLocaleDateString());`    | `"12/1/2030"` (depends on locale)       |
| `toLocaleTimeString()`   | Localized time string                    | `console.log(d.toLocaleTimeString());`    | `"10:30:45 AM"` (depends on locale)     |
| `toLocaleString()`       | Localized full date+time                 | `console.log(d.toLocaleString());`        | `"12/1/2030, 10:30:45 AM"`              |
| `valueOf()`              | Returns same as `getTime()`              | `console.log(d.valueOf());`               | `1922368845999`                         |

*/



