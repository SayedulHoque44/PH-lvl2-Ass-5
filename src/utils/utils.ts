export const checkStringOrNumber = (value) => {
  if (typeof value === "number") {
    return "number";
  } else if (typeof value === "string") {
    return "text";
  }
  return "text";
};

export const compareObj = (matchObj, mainObj) => {
  const numberValueToBe = ["quantity", "price"];
  const reqObj: Record<string, unknown> = {};
  Object.keys(matchObj).forEach((key) => {
    // eslint-disable-next-line no-prototype-builtins
    if (mainObj.hasOwnProperty(key)) {
      if (numberValueToBe.find((ele) => ele === key)) {
        reqObj[`${key}`] = parseInt(mainObj[key]);
      } else {
        reqObj[`${key}`] = mainObj[key];
      }
    }
  });
  return reqObj;
};
