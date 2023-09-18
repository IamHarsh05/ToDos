import { Fragment, useState } from 'react'


export default function Sidebar() {
    const [todo, setTodo] = useState('');
  const [todosArray, setTodosArray] = useState([]);

  const inputChange = (e) => {
    setTodo(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodosArray([...todosArray, todo]);
      setTodo('');
    }
  };

  const handleDelete = (index) => {
    setTodosArray(todosArray.filter((_, i) => i !== index));
  };

  return (   
    <div className='flex h-screen overflow-y-hidden bg-gradient-to-r from-cyan-900 to-sky-900'>
    <main className="flex w-1/3 h-full sm:w-1/5 lg:w-1/4">
        <div className="sm:px-0 lg:px-0">                    
            <div className="overflow-hidden">
                <div className="inset-y-0 left-0 flex  ">
                    <div className="relative max-w-md">
                    <div className="flex h-full flex-col py-6">
                        <div className="px-4 sm:px-6">
                            <div className="text-base font-semibold leading-6 text-white-900 ">
                                MAIN MENU
                            </div>
                        </div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6 ">
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                        <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Dashboard
                                </div>
                            </div>
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                        <path fillRule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Email
                                </div>
                            </div> 
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Chat
                                </div>
                            </div> 
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Kanban
                                </div>
                            </div> 
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Contact
                                </div>
                            </div>
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Calendar
                                </div>
                            </div>
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Courses
                                </div>
                            </div>
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 007.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 004.902-5.652l-1.3-1.299a1.875 1.875 0 00-1.325-.549H5.223z" />
                                    <path fillRule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 009.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 002.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3zm3-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zm8.25-.75a.75.75 0 00-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-5.25a.75.75 0 00-.75-.75h-3z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Shop
                                </div>
                            </div> 
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Invoices
                                </div>
                            </div> 
                            <div className="flex items-center hover:text-teal-200 cursor-pointer">
                                <div className='m-1'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-10 Sm:h-10">
                                    <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                                </svg>
                                </div>
                                <div className='m-2 text-base sm:text-xl'>
                                    Settings
                                </div>
                            </div>                            
                        </div>
                        <div className='pl-6'>
                            <div className='grid justify-items-center'>
                                Increase Your <br/> work with Kanban <br/> 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>             
        </div>
    </main> 
    <div className='flex flex-col w-2/3 h-full '>
        <div className='px-10 py-6 text-2xl font-mono font-bold antialiased'>
            <h1> To-do List in Next.js </h1>
        </div>
        <div className='flex flex-col px-10 py-5 text-2xl font-mono font-bold antialiased'>
            <form onSubmit={inputSubmit}>
                <div>
                    <input className='bg-transparent border-b-indigo-500 active:border-b-indigo-500 focus:border-transparent' type="text" value={todo} onChange={inputChange} placeholder="Enter a todo" />
                </div>
                <br/>
                <div>
                    <button className='px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-700' type="submit">Add todo</button>
                </div>
            </form>
        </div>
        <div className=' overflow-auto'>
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-4 overflow-auto'>
            {todosArray.map((todo, index) => (
                <li className='flex flex-col m-2 py-3 items-center text-2xl font-mono font-bold antialiased' key={index}>
                {todo}
                <button className='my-3 mx-10 px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-700' onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  </div>
  )
}
