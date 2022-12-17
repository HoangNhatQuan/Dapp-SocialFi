import axios from 'axios'

const urlExcute = 'https://judge0-ce.p.rapidapi.com/submissions';


const CodeEditorService = {
  compileCode: async function (formData) {
    let token;
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '346d710a9fmsh3d9a061d9858472p12efe1jsn7262b68d660c',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
      data: formData,
    }

    await axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data)
        token = response.data.token
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err
        console.log('error', error)
        return;
      })

    return token;
  },

  checkStatus: async function (token) {
    const options = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/submissions/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '346d710a9fmsh3d9a061d9858472p12efe1jsn7262b68d660c',
      },
    }
    let response = await axios.request(options)
    if (!!response.data) {
      return response.data
    }
    return;
  }
};

export default CodeEditorService;