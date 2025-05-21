async function getData() {
  try {
    let res = await fetch("./data.json");
    let data = await res.json().then((data) => {
      return data;
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}
