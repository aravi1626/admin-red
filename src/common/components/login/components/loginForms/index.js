import React from 'react'
import styles from '../../styles.module.css'
const LoginBox = () => {
	return (
		<>
			<div className='max-w-sm rounded overflow-hidden shadow-lg px-8 py-8 w-full h-full '>
				<div class="sm:col-span-2 my-8">
					<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">
						Email
					</label>
					<div class="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							placeholder='Email'
							class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="sm:col-span-2 my-8">
					<label for="email" class="block text-sm font-semibold leading-6 text-gray-900">
						Password
					</label>
					<div class="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							placeholder='Password	'
							autocomplete="email"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div class="my-14 ">
					<button
						type="submit"
						class="block w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800">
						Submit
					</button>
				</div>
			</div>
		</>
	)
}

export default LoginBox
