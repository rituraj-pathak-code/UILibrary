import React,{useState} from 'react'
import styles from './index.module.css'
import Popup from '../../components/Popup'
import Button from '../../components/Button'
import imageURL from '/assets/pop_up_image.png'
const PopUpScreen = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isErrorOpen, setIsErrorOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isImageOpen, setIsImageOpen] = useState(false)



  return (
    <div>
    <h2>Popup</h2>
   <div className={styles.popupContainer}>
   <Button type = "primary" startIcon = "" endIcon = "" borderRadius = "normal" size="normal" onClick={()=>setIsSuccessOpen(true)}>Popup One</Button>
   <Button type = "primary" startIcon = "" endIcon = "" borderRadius = "normal" size="normal" onClick={()=>setIsErrorOpen(true)}>Popup Two</Button>
   <Button type = "primary" startIcon = "" endIcon = "" borderRadius = "normal" size="normal" onClick={()=>setIsWarningOpen(true)}>Popup Three</Button>
   <Button type = "primary" startIcon = "" endIcon = "" borderRadius = "normal" size="normal" onClick={()=>setIsInfoOpen(true)}>Popup Four</Button>
   <Button type = "primary" startIcon = "" endIcon = "" borderRadius = "normal" size="normal" onClick={()=>setIsImageOpen(true)}>Popup Four</Button>

  <Popup isOpen={isSuccessOpen} onClose={()=>setIsSuccessOpen(false)} onConfirm={()=>setIsSuccessOpen(false)} category='success'/>
  <Popup isOpen={isErrorOpen} onClose={()=>setIsErrorOpen(false)} onConfirm={()=>setIsErrorOpen(false)} category='error'/>
  <Popup isOpen={isWarningOpen} onClose={()=>setIsWarningOpen(false)} onConfirm={()=>setIsWarningOpen(false)} category='warning'/>
  <Popup isOpen={isInfoOpen} onClose={()=>setIsInfoOpen(false)} onConfirm={()=>setIsInfoOpen(false)} category='info'/>
  <Popup isOpen={isImageOpen} onClose={()=>setIsImageOpen(false)} onConfirm={()=>setIsImageOpen(false)} imageURL={imageURL}/>
   </div>
  </div>
  )
}

export default PopUpScreen