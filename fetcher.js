export const fetcher = (...args) =>
  fetch(...args).then((res) =>
    res.json().then((data) => {
      const transformedData = [];
      for (const key in data) {
        transformedData.push(data[key]);
      }
      return transformedData;
    })
  );
