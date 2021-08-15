import React, { useEffect, useState } from 'react'
import { IdxContext } from '../../contexts/IdxContext'
import Ceramic from '@ceramicnetwork/http-client'
import { IDX } from '@ceramicstudio/idx'

const IdxWrapper = ({children}) => {
  const [basicProfileImage, setBasicProfileImage] = useState("");

  const fetchBasicProfileImage = async () => {
    const ceramicApiUrl = process.env.REACT_APP_CERAMIC_API_URL
    const idxDid = process.env.REACT_APP_IDX_DID
    if (!ceramicApiUrl || !idxDid) return;

    const ceramic = new Ceramic(ceramicApiUrl)
    const aliases = {}
    const idx = new IDX({ ceramic, aliases })
    let basicProfile = await idx.get('basicProfile', idxDid)
    setBasicProfileImage(basicProfile?.image?.original?.src)
  }

  useEffect(fetchBasicProfileImage, [])

  return (
    <IdxContext.Provider
      value={{ basicProfileImage }}
    >
      {children}
    </IdxContext.Provider>
  );
}

export default IdxWrapper