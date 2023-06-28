import { Montserrat } from 'next/font/google'


const RegularFont =  Montserrat({weight: '400', subsets: ['cyrillic']})
const MediumFont =  Montserrat({weight: '500', subsets: ['cyrillic']})
const SemiBoldFont = Montserrat({weight: '600', subsets: ['cyrillic']})
const BoldFont = Montserrat({weight: '700', subsets: ['cyrillic']})


export {
    RegularFont, MediumFont, 
    SemiBoldFont, BoldFont
}