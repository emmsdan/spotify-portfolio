import UPILogo from '../../assets/icons/upi-logo.svg'
import PaytmLogo from '../../assets/icons/paytm-logo.svg'
import VisaLogo from '../../assets/icons/visa-logo.svg'
import MasterCardLogo from '../../assets/icons/mastercard-logo.svg'
import AmexLogo from '../../assets/icons/amex-logo.svg'
import DinnerClubLogo from '../../assets/icons/diners-club-logo.svg'

export const paymentMethods = [
    {
        icon: UPILogo,
    },
    {
        icon: PaytmLogo,
    },
    {
        icon: VisaLogo,
    },
    {
        icon: MasterCardLogo,
    },
    {
        icon: AmexLogo,
    },
    {
        icon: DinnerClubLogo,
    },
]

export const pricingList = [
    {
        planName: 'Mini',
        price: 'From ₹7/day',
        numberAccount: 1,
        features: [
            `Ad-free music listening on mobile`,
            'Group Session',
            'Download 30 songs on 1 mobile device'
        ]
    },
    {
        free: 1,
        planName: 'Individual',
        price: '₹119',
        numberAccount: 1,
        features: [
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices'
        ]
    },{
        free: 1,
        planName: 'Duo',
        price: '₹149',
        numberAccount: 2,
        features: [
            'For couples who live together',
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices per account'
        ]
    },{
        free: 6,
        planName: 'Family',
        price: '₹179',
        numberAccount: 1,
        features: [
            'For family who live together',
            'Block explicit music',
            `Ad-free music listening`,
            'Group Session',
            'Download 10k songs/device on 5 devices'
        ]
    }]
