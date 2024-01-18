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
    })
    .catch((error) => console.log(error));
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
    .then((res) => res.data)
    .catch((error) => console.log(error));
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
    })
    .catch((error) => console.log(error));
  return b;
}
export async function addCard(name, id) {
  const b = await axios
    .post(
      "https://api.trello.com/1/cards?idList=" +
        id +
        "&name=" +
        name +
        "&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "POST" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}
export async function deleteCard(id) {
  const b = await axios
    .delete(
      "https://api.trello.com/1/cards/" +
        id +
        "?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "DELETE" }
    )
    .then((res) => res)
    .catch((error) => console.log(error));
  return b;
}

export async function getCheckList(id) {
  const b = await axios
    .get(
      "https://api.trello.com/1/cards/" +
        id +
        "/checklists?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1"
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}

export async function createCheckList(name, id) {
  console.log(name + "fgth");
  const b = await axios
    .post(
      " https://api.trello.com/1/cards/" +
        id +
        "/checklists?name=" +
        name +
        "&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "POST" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}

export async function deleteCheckList(cardid, listid) {
  const b = await axios
    .delete(
      "https://api.trello.com/1/cards/" +
        cardid +
        "/checklists/" +
        listid +
        "?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "DELETE" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return b;
}

export async function getitems(id) {
  const b = await axios
    .get(
      "https://api.trello.com/1/checklists/" +
        id +
        "/checkItems?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1"
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return b;
}

export async function createItems(listId, name) {
  const b = await axios
    .post(
      "https://api.trello.com/1/checklists/" +
        listId +
        "/checkItems?name=" +
        name +
        "&key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "POST" }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return b;
}

export async function deleteItem(listid, itemid) {
  const b = await axios
    .delete(
      " https://api.trello.com/1/checklists/" +
        listid +
        "/checkItems/" +
        itemid +
        "?key=bd0e2808d85e15483734c295fe8cb97b&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "DELETE" }
    )
    .then((res) => res.status)
    .then((error) => console.log(error));
  return b;
}

export async function checkItem(cardId, itemId,state) {
  const b = await axios
    .put(
      "https://api.trello.com/1/cards/"+cardId+"/checkItem/"+itemId+"?key=bd0e2808d85e15483734c295fe8cb97b&state="+state+"&token=ATTA9b9a8dadb96e739eeef13f26ba140e989cb45c80c3cfa9ed0e5a1745d3530e48C4A64BC1",
      { method: "PUT" }
    )
    .then((res) => res.status)
    .then((error) => console.log(error));
  return b;
}
//https://api.trello.com/1/cards/$%7BcardId%7D/checkItem/$%7Bid%7D?key=${APIKEY}&state=${stateOfItem}&token=${APITOKEN}