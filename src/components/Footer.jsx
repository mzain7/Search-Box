import React from 'react'

function Footer({ loading, error, resultLength }) {
    return (
        <div
            class="bg-white rounded-br-[20px] rounded-bl-[20px] pt-4 pr-6 pb-4 pl-6 h-[51px] relative"
        >
            <div
                class="text-paragraph text-left text-sm leading-5 font-medium absolute left-6 top-[15px] flex items-center justify-start"
            >
                {
                    loading ? (
                        <p>Searching ...</p>
                    ) : error ? (
                        <p className='text-error'>{error}</p>
                    ) : resultLength === 0 ? (
                        <p>No results</p>
                    ) : (
                        <p>{resultLength} results</p>
                    )
                }
            </div>
        </div>

    )
}

export default Footer