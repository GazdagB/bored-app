import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './Activity.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb,faQuestion , faEarthEurope, faGraduationCap, faSwimmer, faBeerMugEmpty,faTools,faHandHoldingHeart, faUtensils,faBed, faMusic, faBriefcase, faUser, faUsers, faCheck, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Activity = () => {


    const [activity,setActivity] = useState([])
    
    const getActivity = async () => {
        axios.get('https://www.boredapi.com/api/activity')
        .then((response) => setActivity(response.data))
        .catch((error) => {console.log(error)})
       
    };

    const addTypeIcon = (activity) => {
        // if the activity type is 'education' return a graduation cap icon
        if(activity.type == 'education'){
            return <FontAwesomeIcon className='margin-right-5' icon={faGraduationCap} />
        // if the activity type is 'recreational' return a swimming pool icon
        }else if(activity.type === 'recreational'){
            return <FontAwesomeIcon className='margin-right-5' icon={faSwimmer} />
        // if the activity type is 'social' return a beer mug icon
        }else if(activity.type === 'social'){
            return <FontAwesomeIcon className='margin-right-5' icon={faBeerMugEmpty} />
        // if the activity type is 'diy' return a tool box icon
        }else if(activity.type === 'diy'){
            return <FontAwesomeIcon className='margin-right-5' icon={faTools} />
        // if the activity type is 'charity' return a heart icon
        }else if(activity.type ===  'charity'){
            return <FontAwesomeIcon className='margin-right-5' icon={faHandHoldingHeart} />
        // if the activity type is 'cooking' return a utensils icon
        }else if(activity.type === 'cooking'){
            return <FontAwesomeIcon className='margin-right-5' icon={faUtensils} />
        // if the activity type is 'relaxation' return a bed icon
        }else if(activity.type === 'relaxation'){
            return <FontAwesomeIcon className='margin-right-5' icon={faBed} />
        // if the activity type is 'music' return a music icon
        }else if(activity.type === 'music'){
            return <FontAwesomeIcon className='margin-right-5' icon={faMusic} />
        // if the activity type is 'busywork' return a briefcase icon
        }else if(activity.type === 'busywork'){
            return <FontAwesomeIcon className='margin-right-5' icon={faBriefcase} />
        // if the activity type is none of the above return a question mark icon
        }else{
            return <FontAwesomeIcon className='margin-right-5' icon={faQuestion} />
        }
    }

    const addParticipantsIcon = (activity) => {
        let numberOfParticipants = activity.participants;
        if (numberOfParticipants === 1){
            return <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
        }else if(numberOfParticipants === 2){
            return <div >
                <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
                <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
            </div>
        }else if(numberOfParticipants === 3){
            return <div >
                <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
                <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
                <FontAwesomeIcon className='icon__participants margin-left-5' icon={faUser} />
            </div>
        }else if(numberOfParticipants > 3){
            return <div >
                <FontAwesomeIcon icon={faUsers} />
                <FontAwesomeIcon icon={faUsers} />
            </div>
        }
    }

    const addPrice = (activity) => {
        if(activity.price === 0){
            return <p><FontAwesomeIcon className='margin-right-5' icon={faCheck} /> Free</p>
        }else if(activity.price > 0 && activity.price <= 0.2){
            return <p> 
                <FontAwesomeIcon className='margin-right-5' icon={faDollarSign} /> 
                Cheap</p>
        }else if(activity.price > 0.2 && activity.price <= 0.4){
            return <p>
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-5' icon={faDollarSign} />
                Not too expensive</p>
        }else if(activity.price > 0.4 && activity.price <= 0.6){
            return <p>
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-5' icon={faDollarSign} />
                A bit pricey</p>
        }else if(activity.price > 0.6 && activity.price <= 0.8){
            return <p>
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-5' icon={faDollarSign} />
                Quite expensive</p>
        }else {
            return <p>
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-2' icon={faDollarSign} />
                <FontAwesomeIcon className='margin-right-5' icon={faDollarSign} />
                Very expensive</p>
        }
    }

   const openWebsite = () => {
        window.open(activity.link)
    }

    const showActivity = (activity) => {
        if(activity.activity){
            return (
                <div className='activity__data'>
                    <div className="info">
                        <p>{addTypeIcon(activity)}{activity.type}</p>
                        <p className='part_icon_container' >{activity.participants}{addParticipantsIcon(activity)}</p>
                        <p>{addPrice(activity)}</p>
                    </div>
                    <h2>{activity.activity}</h2>
                    <p>{(activity.link) ? <button className='website__link' onClick={openWebsite} ><FontAwesomeIcon className='faEarthEurope' icon={faEarthEurope} /> Website</button> : "" }</p>
                </div>
            )
        }else{
            return (
                <div className='activity__data'>
                    <h2><FontAwesomeIcon className='icon faQuestion' icon={faQuestion} /></h2>
                    <h2>What to do?</h2>
                </div>
            )
        }
    };

  return (
    <div  className='activity-container'>
        <h1>Are you Bored? </h1>
        <div className=''>
            {showActivity(activity)}
        </div>

        <button onClick={getActivity}> <FontAwesomeIcon className='icon faLightBulb' icon={faLightbulb} /> Get an Idea</button>
    </div>
  )
}

export default Activity