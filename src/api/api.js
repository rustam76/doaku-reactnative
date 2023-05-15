export const findAllData = () => {
  try {
    return fetch('https://doa-doa-api-ahmadramadhan.fly.dev/api').then(res =>
      res.json(),
    );
  } catch (err) {
    return err
  }
};
export const findSearchData =(params) =>{
  try {
    return fetch(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${params}`).then(res =>
      res.json(),
    );
  } catch (err) {
    return err
  }
}
