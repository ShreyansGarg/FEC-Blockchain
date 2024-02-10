import React from 'react'
import './usersite_homepage.css'
import { testy, testyz } from './testy'
import { useState, useEffect } from 'react'
import Timeline from '../popups/timeline'
import { ethers } from 'ethers';
import Reports from '../popups/reports'

import { func1 } from '../Get_functions'
import { func_get_reports } from '../getreports'
import { InsertReport, Set_User_Data } from "../Set_function"

function UsersiteHomepage() {
  const [timelinePop, settimelinePop] = useState(false)
  //baki hai reports ki designing....
  const [reportsPop, setreportsPop] = useState(false)


  const [my_name, set_name] = useState("")
  const [my_age, set_age] = useState("")
  const [my_gender, set_gen] = useState("")
  const [my_contact, set_con] = useState("")
  const [my_blood, set_blood] = useState("")
  const [my_allg, set_allg] = useState("")
  const [my_defc, set_defc] = useState("")
  const [my_chrcd, set_chrcd] = useState("")

  const fetch_data = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    let walletAddress = await signer.getAddress();
    walletAddress = "0xaEB837233665fc43309dABF4abD53338E60a61bE"
    let name2 = await func1(walletAddress)
    // func_get_reports(walletAddress)
    // SetAge(walletAddress)
    // console.log(name2);
    set_name(name2[0])
    // console.log(name2[1])
    set_age(name2[1])
    set_gen(name2[2])
    set_con(name2[3])
    set_blood(name2[4])
    set_allg(name2[5])
    set_defc(name2[6])
    set_chrcd(name2[7])
  }

  useEffect(() => {
    fetch_data();
  }, []);

  const Set_Data = async (name, age, gender, contactnumber, blood_type, allergy, deficiency, chronicdisease) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const walletAddress = await signer.getAddress();
    // console.log(78)
    Set_User_Data(walletAddress, name, age, gender, contactnumber, blood_type, allergy, deficiency, chronicdisease)
  }
  const Set_Report = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const walletAddress = await signer.getAddress();
    // console.log(78)
    InsertReport()
  }



  return (
    <div id='userhome'>
      <div className="navbaruser">
        <div className="logouser">LIFE LEDGER</div>
        {/* const name, age, gender, contactnumber, blood_type, allergy, deficiency, chronicdisease; */}
        {/* abhi data daalna hai */}
        <div className="updatediv" onClick={Set_Data}> 
          <i class="fa-solid fa-pen" id='update'></i></div>
        <div className="messagediv" onClick={Set_Report}><i class="fa-solid fa-message" id='message'></i></div>

        {/* <div className='upload'>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div> */}

        {/* <div className='upload'>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div> */}

      </div>
      {/*Here i have to apply a js script which can render with respect to the existence of user
     Kam baccha hai eske bad user existence check karna padega */}
      <div className="bodyuser">
        <div className="Details">
          <div className="Name">
            <div className="Nametext">Name:</div>
            <div className="Namebox"></div>
          </div>
          <div id="Id">
            <div className="Nametext">Id:</div>
            <div className="Namebox"></div>
          </div>
        </div>
        <div className="blocksuser">
          <div className="Box1 Box">
            <ul>
              <li>Name: {my_name}</li>
              <li>Age:{my_age}</li>
              <li>Gender:{my_gender}</li>
              <li>Contact Info:{my_contact}</li>
            </ul>


          </div>
          <div className="Box2 Box">
            <ul>
              <li>Blood group:{my_blood}</li>
              <li>Allergies:{my_allg}</li>
              <li>Deficiencies:{my_defc}</li>
              <li>Chronic Diseases:{my_chrcd}</li>
            </ul>



          </div>
          <div className="Box3 Box" onClick={() => setreportsPop(true)}>
            Reports
          </div>
          <div className="Box4 Box" onClick={() => settimelinePop(true)}>
            Timeline
          </div>
          <Timeline trigger={timelinePop} setTrigger={settimelinePop} />
          <Reports trigger={reportsPop} setTrigger={setreportsPop} />
        </div>
      </div>
      <div className="notificationuser" onClick={testyz}>
        <i class="fa-solid fa-bars fa-2x" id='notiIcon' ></i>
      </div>
    </div>
  )
}

export default UsersiteHomepage