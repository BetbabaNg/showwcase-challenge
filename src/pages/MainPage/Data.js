import _ from "lodash";
export const userEducation = [];

export function getProfileByName(userName) {
  const result = userEducation.filter((e) => e.user === userName);
  return _.reverse(result);
}

export function getProfileBySchool(school) {
  const result = userEducation.filter((e) => e.school === school);
  return result;
}

export function postEducationProfile(data) {
  userEducation.push(data);
  return userEducation;
}
