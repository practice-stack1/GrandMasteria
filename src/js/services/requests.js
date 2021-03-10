async function postData(api, formData){
  let response = await fetch(`${api}`, {
    method: 'POST',
    body: formData
  });
  return await response.text();
}

export default postData;