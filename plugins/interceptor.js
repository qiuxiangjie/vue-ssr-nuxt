export default ({ store, $axios }) => {
  $axios.onRequest((config) => {
    if (store.state.user.token) {
      config.header.Authorization = store.state.user.token;
    }
    return config;
  });
};
