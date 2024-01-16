import axios from "axios";
const key = "bd0e2808d85e15483734c295fe8cb97b&token";
const token =
  "ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1";
export async function board() {
  const b = await axios
    .get(
      "https://api.trello.com/1/members/me/boards?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1"
    )
    .then((res) => {
      return res.data;
    });
  return b;
}

export async function createBoard(name) {
  const create = await axios
    .post(
      "https://api.trello.com/1/boards/?name=" +
        name +
        "&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "POST" }
    )
    .then((res) => res.data);
  return create;
}

export async function getList(id) {
  const b = await axios
    .get(
      "https://api.trello.com/1/boards/" +
        id +
        "/lists?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1"
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error));
  return b;
}

export async function addList(name, id) {
  const b = await axios
    .post(
      "https://api.trello.com/1/lists?name=" +
        name +
        "&idBoard=" +
        id +
        "&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "POST" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}

export async function deleteList(id) {
  const b = await axios
    .put(
      "https://api.trello.com/1/lists/" +
        id +
        "/closed?value=true&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "PUT" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}
//deleteList("65a22f11bd24e24f2e7fb742");
export async function getCards(id) {
  const b = await axios
    .get(
      "https://api.trello.com/1/lists/" +
        id +
        "/cards?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1"
    )
    .then((res) => {
      return res.data;
    });
  return b;
}
export async function addCard(name, id) {
  const b = await axios
    .post("https://api.trello.com/1/cards?idList="+id+"&name="+name+"&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1", { method: "POST" })
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}
