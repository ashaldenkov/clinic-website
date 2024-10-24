import React from 'react'
import TestLogo from '../images/TestLogo.svg';
import Home from '../images/home_FILL0_wght300_GRAD0_opsz24.svg';
import Group from '../images/group_FILL0_wght300_GRAD0_opsz24.svg';
import Calendar from '../images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg';
import Chat from '../images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg';
import Transactions from '../images/credit_card_FILL0_wght300_GRAD0_opsz24.svg';
import Doctor from '../images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png';
import Settings from '../images/settings_FILL0_wght300_GRAD0_opsz24.svg';
import ShowMore from '../images/more_vert_FILL0_wght300_GRAD0_opsz24.svg';

export default function Header () {
  return (
    <div className='flex justify-between h-[72px] px-8 py-[14px] bg-white rounded-[72px] body-emphasized-14pt mb-[18px]'>
        <img src={TestLogo} alt="Logo" />
        <div className='flex'>
            <button className='flex items-center px-4 py-3 mr-6 rounded-full hover:bg-teal-200 duration-300	'>
                <img src={Home} alt="OverviewImg" />
                <div className='pl-[9px]'>Overview</div>
            </button>
            <button className='flex items-center px-4 py-3 rounded-full bg-activeState'>
                <img src={Group} alt="PatientsImg" />
                <div className='pl-[9px]'>Patients</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-6 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Calendar} alt="ScheduleImg" />
                <div className='pl-[9px]'>Schedule</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-2 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Chat} alt="MessageImg" />
                <div className='pl-[9px]'>Message</div>
            </button>
            <button className='flex items-center px-4 py-3 ml-2 rounded-full hover:bg-teal-200 duration-300'>
                <img src={Transactions} alt="TransactionsImg" />
                <div className='pl-[9px]'>Transactions</div>
            </button>
        </div>
        <div className='flex'>
            <div className='flex pr-3'>
                <img className='w-[44px] h-[44px] mr-2' src={Doctor} alt="DoctorImg" />
                <div className='flex flex-col justify-center'>
                    <div>
                    Dr. Jose Simmons
                    </div>
                    <div className='body-secondary-info-14pt text-sideText'>
                    General Practitioner
                    </div>
                </div>
            </div>
            <div className='flex items-center pl-3 border-l border-verticalDash'>
                <button className='mr-3'>
                    <img src={Settings} alt="SettingsImg" />
                </button>
                <button>
                    <img src={ShowMore} alt="ShowMoreImg" />
                </button>
            </div>
        </div>

    </div>
  )
}
