"user strict";

const queryParametrs = {
  search: "Вася",
  take: 10,
  queryString: function () {
    let result = [];

    for (let key in this) {
      if (key !== "queryString") {
        result.push(`${key}=${this[key]}`);
      }
    }

    return result.join("&");
  },
};

console.log(queryParametrs.queryString());
