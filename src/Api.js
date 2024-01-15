import axios from "axios";

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
    .then((res) => console.log(res.status))
    .catch((error) => console.log(error));
}
