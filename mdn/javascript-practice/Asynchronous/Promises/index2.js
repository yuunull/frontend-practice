async function fetchProducts() {
  try {
    // この行の後、この関数は `fetch()` 呼び出しが決定されるのを待ちます。
    // `fetch()` 呼び出しは Response を返すか、エラーを発生させます。
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // この行の後、この関数は `response.json()` 呼び出しが決定されるのを待ちます。
    // `response.json()` 呼び出しは、解釈された JSON オブジェクトを返すか、エラーを発生させるかのどちらかです。
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
