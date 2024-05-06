const fusionArray = require("./fusionarraw");
test("Rassemble Tableau", () => {
  let arr1 = [1, 2, 3];
  let arr2 = [5, 5];
  expect(fusionArray(arr1, arr2)).toEqual([1, 2, 3, 5, 5]);
});
