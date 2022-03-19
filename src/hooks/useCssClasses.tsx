type useCssClassesType = (cssClasses: string[]) => string[];

export const useCssClasses: useCssClassesType = (cssClasses) => {
  const arr: string[] = [];
  cssClasses.map(cssClass => {

    arr.push(cssClass)
  })
  const result = [...cssClasses].join(` `)

  console.log(arr);
  return arr;
};
