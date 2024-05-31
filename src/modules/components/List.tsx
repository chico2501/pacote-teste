export function List() {
  const arrayList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return arrayList.map((item) => <li key={item}>{item}</li>);
}
