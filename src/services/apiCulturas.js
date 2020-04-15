import axios from 'axios';

async function getCulturas(){

    const response = await axios.get("https://api.cnptia.embrapa.br/agritec/v1/culturas", {
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Accept: 'application/json',
            'Authorization': 'Bearer 2604e7a7-7200-3fd1-914b-41cf9f540696'
        }
    })
    return response
}

export default getCulturas;