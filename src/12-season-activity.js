/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  const season = {
    Winter : [1,2,12],
    Spring : [3,4,5],
    Summer : [6,7,8],
    Autumn : [9,10,11]
  }
  if(season.Winter.includes(month)) {
    if(temperature<0) return {season : Object.keys(season)[0], activity : "skiing"};
    else return {season : Object.keys(season)[0], activity : "ice skating"};
  } else if(season.Spring.includes(month)) {
    if(temperature>20) return {season : Object.keys(season)[1], activity : "hiking"};
    else return {season : Object.keys(season)[1], activity : "museum visit"};
  } else if(season.Summer.includes(month)) {
    if(temperature>35) return {season : Object.keys(season)[2], activity : "swimming"};
    else return {season : Object.keys(season)[2], activity : "cycling"};
  } else if(season.Autumn.includes(month)) {
    if(temperature>15) return {season : Object.keys(season)[3], activity : "nature walk"};
    else return {season : Object.keys(season)[3], activity : "reading at a cafe"};
  } else return null;

}
