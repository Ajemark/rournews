
// import siteMetadata from '@/data/siteMetadata' 
import { PageSEO } from '@/components/SEO'
import { useRef, useState } from 'react'


export default function EmailExtractor() {

    const inputEl = useRef(null)
    const outputEl = useRef(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    // const 


    return (
        <>
            <PageSEO title={"Email Address Extractor"} description={"Email address extractor"} />

            <div className="shadow-lg mb-2">
                <div className=" bg-primary-500 mb-2">
                    <div className="p-3 justify">

                        <h3 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9 md:text-2xl md:leading-9">Email Address Extractor Tool</h3>

                        <p>Ajemark Hub Email Extractor Tool will help you extract emails in files or Text documents. Emails are improtant for online marketing, thus our tool will be useful for you if want to extract emails. </p>
                    </div>
                </div>

                <form className="flex flex-col sm:flex-row" >
                    <div>
                        <label className="sr-only" htmlFor="email-input">
                            Email address
                        </label>
                        <input
                            autoComplete="text"
                            className="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                            id="email-input"
                            name="text"
                            // placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
                            ref={inputEl}
                            required
                            type="text"
                        // disabled={subscribed}
                        />
                    </div>
                    <div className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                        <button
                            className={`w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 
                             
                                focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
                            type="submit"
                        // disabled={subscribed}
                        >
                            {'Sign up'}
                        </button>
                    </div>
                </form>
                {error && (
                    <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
                )}


            </div>


        </>
    )
}
