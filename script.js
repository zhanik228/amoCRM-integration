const baseURL = "https://zhan142004.amocrm.ru/";
const getContactListQuery = `api/v4/contacts`;

const client_id = "33dcb17a-8245-427c-a96c-d17bb8ab219b";
const client_secret =
  "vSZw6hDJHo2AH5GUvsnHiOrRwBYybgPTyIGMHcVyrCUreDycz4pmibI4xhRdVzsW";
const redirect_uri = "https://zhan142004.amocrm.ru/";
const code =
  "def502001a41a20fa2e01b1bc9fd06bb2a17ed1834ab038abf15a20d13523188a948b56e77c5f47476b321209ff8d8dbfe1bfb9889cbed9c143f0c12b75ac1ccbc7b5959e67783d163c24cd83474ada2b40fe4ef470d048318719c3c7296332a7d121ef4913c366e883d7f2f2f65617bd8b0497e4ade996404dc32742631ef667060964bd8a46e995b2dcecb53946af3750e37de24dcc5c833ddb4afac8e14b207912df9de056dbab14fc64825383e65bc7cefbf58c763837524d677748aaa2d93b87f06647b876f8d9b4c1f71e29dc87c60414d762a7000f4d89f37629be33ef5b71ec5857850e01fc15b8e912f20b20487fb29abac9eff3b31e676eef6166d86094588a67295b8a5f7483f5c180463965efd5cb6e5cf02fc274f973b878a2ffe844f4f3efd3f7692e523cef260c4a6e17ec482c431ca815db25802ab412697b23183e038b5c38c35d80a4c0245eb715a1f94ea1d3e938a52c6835c5d16ddf45caf6a980356319cea0f09aa3d285b31ce1066f3c0f75932079fa43fc550a728058744f19d30ca3b04c48ab7987de93126ac4a1a5a164e2db7cb2eafcc1ad5f098b7f8defff3840bb0ebe1ab99be02ad5763faacadd078ce33766a1d8815783234b5f10c417033d3ece65530ed4d3447be2b0cbf6c425b87d0e27bfa45130b016ccf1940303d39de460f03c6d623517f61358e2ed47d74240c5085659931d82c97d6";

const getContacts = async () => {
  try {
    const res = await fetch(`${baseURL}oauth2/access_token`, {
      method: "POST",
      body: {
        client_id,
        client_secret,
        grant_type: "authorization_code",
        code,
        redirect_uri: "https://zhanik228.github.io/amoCRM-integration/",
      },
    });
    const data = res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getContacts();
