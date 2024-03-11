import type { Timeline } from "../Types/Timeline";

const DUGGUP_ICON = import.meta.env.VITE_DUGGUP_ICON;
const BETTERUP_ICON = import.meta.env.VITE_BETTERUP_ICON;


export let timelineItems: Timeline[] = [
    {
        type: "post",
        date: "Dec 2023",
        posts: [
            {
                imageUrl: "https://shorturl.at/djlO8",
                convincingDescription: "No amount of technology can convert a bad story into a good story"
            },
            {
                imageUrl: "https://yt3.googleusercontent.com/q4pQdGZdT9Suk5Yu7cm0KI9pLMSaFhEeKQtyZCYjFeJRcbODjS4V5J9AQhN96TYOHXI-rgZ5TA=s900-c-k-c0x00ffffff-no-rj",
                convincingDescription: "What happens when you limit yourself to someone else's creation"
            },
        ]
    },
    {
        type: "job",
        JobTitle: "Co-Founder and CEO",
        JobType: "Full-time · Remote",
        JobLocation: "San Francisco Bay Area",
        JoiningDate: "Nov 2023",
        CompanyName: "Duggup",
        ImageUrl: DUGGUP_ICON,
    },
    {
        type: "post",
        date: "Dec 2023",
        posts: [
            {
                imageUrl: "https://s3-alpha-sig.figma.com/img/19af/a12d/f27e595212d7ad397a130cdeb8ac6c5e?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Htfr2nBE~tyspuVPCUnQaeCtZxiW2uOmS5dLkY8q3JtCmWtEKmq5jFts4iKnN1~FeEqDG-2HVx1QwDPnTOWrUwsZHY64xhJ6xnLV2h9RO46NhASPNYIQxbyjqqOVPhSSDLYo2zxcrSdfNS4~Cx17EBN~LQ89EQ2AFBQa9roumb7QbAwUA8JwtnPXe73hc2XhxDwIfyoAujuQvj-AOxBvGcXiUY-IARz4DjfD5A3-2SQ2bJSntkXXrdW6486UpfOkA1IeZ08Y~5G9po2lupn5E0a2b2Kh9so~j7cKrJIMeUF~vQD0OycxC2q4CXqI8G2p-zSRj2DZwgFYTeeE7DZ66w__",
                convincingDescription: "Startup Lesson I am reflecting. Don't build for the \"average person\"."
            },
            {
                imageUrl: "https://s3-alpha-sig.figma.com/img/fcaf/84e6/4461b5caa81a8f3d2afecfa15491ed1f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fXQtZaSXvasp~3zTGMyiXjNZqwtA~hn-UiXIAZ~RftGmKw6ikeCBnHMQ2jnwa~-KUQpuwOTg1tn7rCX0beYea-rACbqAKvYYfg5adtbiyBs6L7DMwYcq9VwUDt60Uej~XnFgLKG2AIhlTqj76qehPJ1hyGV2UBkUr6Puu9NWXCN6ze3mxNNutcK-gsdC60w5o~jpfejvnLG3mxOvWmOLq9HYQKxUjt~9DB0u7tilC4GyfIlmbOYcRSBDLJUFJ0KrmxPT3oOAacVh6K~QH3JU9N94VQqdgysKs0g-T5IqVBYn0TAVVaE6pS4bs6zoQvNkb1KJDfQzuT2~-wOKRkiisg__",
                convincingDescription: "Your biggest regrets at 80 will be acts of omission."
            },
        ]
    },
    {
        type: "job",
        JobTitle: "VP Engineering",
        JobType: "Full-time",
        JobLocation: "San Francisco Bay Area",
        JoiningDate: "Sep 2022",
        CompanyName: "BetterUp",
        ImageUrl: BETTERUP_ICON,
    },
]