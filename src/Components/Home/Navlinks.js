import React, { useState, useSyncExternalStore } from 'react'
import { links } from './Mylink';
import { Link } from 'react-router-dom';

const Navlinks = () => {
 const[heading, setHeading] = useState("")
 
  return (
    <>
     {links.map((link) => (
        <div>
            <div className='px-3  text-left md:cursor-pointer group '>
                <h1 className='py-3 flex justify-between items-center md:pr-0 pr-5 group' 
                    onClick={()=> heading !== link.name ? setHeading(link.name) : setHeading("")  }>{link.name}
                    <span className="text-xl md:hidden inline">
                        <ion-icon
                            name={`${heading === link.name ? "chevron-up" : "chevron-down" }`}
                        ></ion-icon>
                     </span>
                    <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                        <ion-icon name="chevron-down"></ion-icon>
                    </span>
                </h1>
                {link.submenu && (
                    <div >
                        <div className='absolute top-20 hidden group-hover:md:block md:hover-block '>
                            <div className='py-3'>
                                <div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45  '></div>
                            </div>
                            <div className='bg-black p-5 '  >
                                {link.sublinks.map((mysublinks)=>(
                                        <div  >
                                           
                                            {mysublinks.sublink.map((slink) => (
                                                <li className='text-md text-black-300 mb-3'>
                                                    <Link to={slink.link}>{slink.name} </Link>
                                                </li>
                                                
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/*-------mobile menu------*/}
            <div className='bg-white'>
                {link.sublinks.map((slinks) => (
                    <div>
                    <div className={`
                            ${heading === link.name ? 'md:hidden' : 'hidden'}
                         `}>
                        {slinks.sublink.map((slink) => (
                            <li className='py-3 pl-14'>
                                <Link to={slink.link}>{slink.name}</Link>
                            </li>
                        ))}
                    </div>
                </div>
                ))}
                
            </div>
        </div>
     ))} 
    </>
  )
}

export default Navlinks
