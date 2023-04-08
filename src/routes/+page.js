// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: 'process.env.OPEN_AI_API_KEY',
// });
// const openai = new OpenAIApi(configuration);
// const { data } = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "RETORNA UN JSON CON LOS CAMPOS TITTLE Y BODY Y GENERA UN BLOG DE 50 PALABRAS SOBRE EL CALENTAMIENTO GLOBAL. NO TE DETENGAS HASTA QUE CIERRES EL JSON\n\n{\n    \"title\": \"Calentamiento Global: Una Mirada a la Crisis Climática\",\n    \"body\": \"El calentamiento global es una de las mayores amenazas a la humanidad. Está causando cambios climáticos drásticos en todo el mundo, desde inundaciones extremas hasta sequías masivas. Esto está afectando",
//   temperature: 0.52,
// });

const response = await fetch('https://hospitality-seal-queue-heath.trycloudflare.com/api/blogs');

const { data: blogs } = await response.json();

console.log(blogs);

export async function load() {
  return {
    // text: data.choices[0].text,
    blogs,
  };
}
