import { useState } from "react";
import axios from "axios";
import {v4 as uuid}  from "uuid";

function useFlip() {
  const [flipState, setFlipState] = useState(true);
  const flip = () => {setFlipState(flipState => !flipState);};

  return [flipState, flip];
}

function useAxios(baseUrl) {
    const initialData = []
    const [data, setData] = useState(initialData)

    async function addData(endPoint) {
        const response = await axios.get(`${baseUrl}${endPoint}`)
        setData([...data, {...response.data, id: uuid()}])
    }

    return [data, addData]
}

export {useFlip, useAxios}