export const isInCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};

const API = "http://192.168.246.227:3000";

export async function fetchFromAPI(endPoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`${API}/${endPoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
