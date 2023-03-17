import { createContext, useContext} from 'react'

import unoFoto from '../fotos-Perfil/cerdo-Batman.png'
import dosFoto from '../fotos-Perfil/cerdo-Capitan.png'
import tresFoto from '../fotos-Perfil/cerdo-cerdo.png'
import cuatroFoto from '../fotos-Perfil/cerdo-Finn.png'
import cincoFoto from '../fotos-Perfil/cerdo-Gojo.png'
import seisFoto from '../fotos-Perfil/cerdo-Goku.png'
import sieteFoto from '../fotos-Perfil/cerdo-Luffy.png'
import ochoFoto from '../fotos-Perfil/cerdo-Naruto.png'
import nueveFoto from '../fotos-Perfil/cerdo-Saitama.png'
import diezFoto from '../fotos-Perfil/cerdo-Spider.png'
import onceFoto from '../fotos-Perfil/cerdo-Vegeta.png'
import doceFoto from '../fotos-Perfil/cerdo-Volador.png'

const ImageContext = createContext()
export const useImageContext = () => useContext(ImageContext)

function ImageContextProvider({children}) {

  return (
    <ImageContext.Provider 
    value={
      {
        unoFoto,
        dosFoto,
        tresFoto,
        cuatroFoto,
        cincoFoto,
        seisFoto,
        sieteFoto,
        ochoFoto,
        nueveFoto,
        diezFoto,
        onceFoto,
        doceFoto
      }
    }> 
      {children}   
    </ImageContext.Provider>
  )
}

export default ImageContextProvider
